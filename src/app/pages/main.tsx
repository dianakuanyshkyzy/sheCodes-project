"use client"; 
import React from 'react';
import {Search } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const VolunteerSection = () => {
  const router = useRouter(); // Инициализируем useRouter
  const [inputText, setInputText] = useState('');  
  
  interface Event {
    id: number;
    name: string;
    description: string;
    location: string;
    category: string;
  }

  const [events, setEvents] = useState<Event[]>([]); // Store fetched events here
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false); // Add loading state for the API call

  // Fetch events from events.json when the component loads
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/events.json');
        const data = await response.json();
        setEvents(data); // Set the events from the fetched data
        setFilteredEvents(data); // Initially display all events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);
  
  useEffect(() => {
    console.log(filteredEvents);
  }, [filteredEvents]);

  
const handleSearch = async () => {
  if (!inputText.trim()) {
    setFilteredEvents(events); // If input is empty, show all events
    return;
  }

  setLoading(true); // Start loading

  try {
    // Convert the events array to a JSON string
    const eventsString = JSON.stringify(events);

    // Send the user input and event data to OpenAI to analyze and find the most suitable events
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`, // Add your API key in the .env file
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are an assistant that helps find suitable volunteer events for users based on their preferences. 
            Here is a list of events in JSON format. Please analyze the user's input and return the IDs of the most relevant event(s) based on location, category, and other matching criteria.
            If multiple events match, return all relevant IDs. Here is the list of events: ${eventsString}. Your output should be something like: [1,3]. Do not output words, just id's of the events.`, // Embed the events as a string
          },
          {
            role: 'user',
            content: inputText, // User's search input (e.g., "I want to volunteer for eco events in Astana.")
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("OpenAI Response:", data); 

    const eventIds = JSON.parse(data.choices[0]?.message?.content || '[]'); 
    if (eventIds.length > 0) {
      const eventIdsString = eventIds.join(',');
      router.push(`/events?ids=${eventIdsString}`);
    } else {
      alert("Нет подходящих событий по вашему запросу.");
    }
    // const matchingEvents = events.filter(event => eventIds.includes(event.id));

    const eventIdsString = eventIds.join(',');
    router.push(`/events?ids=${eventIdsString}`);
    // setFilteredEvents(matchingEvents);
  } catch (error) {
    console.error('Error with OpenAI API:', error);
  } finally {
    setLoading(false);
  }
};
return (
  <div className="font-montserrat relative h-screen flex flex-col items-center justify-start pt-20 text-center text-navy-700">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/image.svg"
        alt="City skyline"
        className="w-full h-full object-cover"
        width={1080}
        height={1900}
      />
    </div>
    <div className="z-10 space-y-4">
      <div className="text-amber-400 text-sm">⭐️ 1000+ волонтеров</div>
      <h1 className="text-4xl font-bold leading-tight" style={{ color: '#090859' }}>
        Подай Руку помощи, Создай
        <br />
        Лучшее Будущее
      </h1>
      <p className="text-xl mb-6" style={{ color: '#090859' }}>
        стань волонтером в своем сообществе
      </p>
      <div className="relative w-96 mx-auto">
        <input
          type="text"
          placeholder="Хочу быть волонтером в"
          className="w-full py-2 px-4 pr-10 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ color: '4A4A4A' }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Update input text in real time
          onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(); }} // Trigger search on Enter key press
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
       
      </div>
      <p className="mt-3 font-semibold text-xs">Введите свои предпочтения, чтобы найти события</p>

      {loading && <p>Loading results...</p>} {/* Show loading state */}
    </div>
  </div>
);
};

export default VolunteerSection;