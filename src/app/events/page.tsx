"use client";
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import Event from '../components/Event';

interface EventData {
  id: number;
  name: string;
  description: string;
  location: string;
  category: string;
  age: boolean;
  rewards: number;
  volunteersNeeded: number;
  date: string;
  skillsNeeded: string[]; // Assuming skills are stored in this array
}

const SearchPage = () => {
  const searchParams = useSearchParams(); // Use useSearchParams instead of useRouter
  const idsParam = searchParams.get('ids')?.split(',');

  const category = searchParams.get('category'); // Get the category from the query params
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>([]);
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState('online');
  const [activeSkillTag, setActiveSkillTag] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [ageFilter, setAgeFilter] = useState(false); // 18+ filter

  const tags = [
    { displayName: 'Эко - мероприятия', category: 'эко' },
    { displayName: 'Книжный клуб', category: 'книга' },
    { displayName: 'Приют для животных', category: 'животные' },
    { displayName: 'Репетиторство', category: 'наставничество' },
    { displayName: 'Другое', category: 'другое' }
  ];
  const skills = ['Коммуникабельность', 'Английский язык', 'Программирование', 'Маркетинг', 'Графический дизайн'];

  const [events, setEvents] = useState<EventData[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/events.json');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Ошибка загрузки событий:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = events;

    if (idsParam) {
      filtered = events.filter(event => idsParam.includes(event.id.toString()));
    } else if (category) {
      filtered = events.filter(event => event.category === category);
    }

    setFilteredEvents(filtered);
  }, [idsParam, category, events]);

  // Filter function to match multiple criteria
  const filterEvents = () => {
    const results = events.filter(event => {
      const matchesCategory = activeTag ? event.category === activeTag : true;
      const matchesLocation = location ? event.location.includes(location) : true;
      const matchesAge = ageFilter ? event.age === ageFilter : true;
      const matchesQuery = query
        ? event.name.toLowerCase().includes(query.toLowerCase()) ||
          event.description.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesSkills = activeSkillTag
        ? event.skillsNeeded.some(skill => skill.includes(activeSkillTag))
        : true;
      const matchesOnlineOffline = activeButton === 'online' || activeButton === 'offline' ? true : false;

      return (
        matchesCategory &&
        matchesLocation &&
        matchesAge &&
        matchesQuery &&
        matchesSkills &&
        matchesOnlineOffline
      );
    });

    setFilteredEvents(results); // Update the state with the filtered events
  };

  useEffect(() => {
    // Filter events in real-time whenever query or filters change
    filterEvents();
  }, [query, activeTag, location, ageFilter, activeSkillTag, activeButton]);

 

  return (
    <div className="font-montserrat">
      <Header />
      {/* Main content */}
      <div className="max-w-7xl my-5 mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex items-start"> {/* Added items-start to align top */}
          {/* Left sidebar */}
          <div className="w-1/4 bg-[#EBEAFB] rounded-lg shadow p-4 mr-4 self-start">
            <div className='flex justify-between items-center mb-5'>
              <h2 className="text-lg font-semibold">Фильтры поиска</h2>
              <h5 className="text-[12px] text-[#6258E9]" onClick={() => setFilteredEvents(events)}>Сбросить все</h5>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <button className={`px-4 py-2 rounded-full text-sm ${
                    activeButton === 'offline' ? 'bg-indigo-600 text-white': 'bg-white text-gray-700'}`}
                    onClick={() => setActiveButton('offline')}>Оффлайн</button>
                    <button className={`px-4 py-2 rounded-full text-sm ${
                    activeButton === 'online' ? 'bg-indigo-600 text-white': 'bg-white text-gray-700'}`}
                    onClick={() => setActiveButton('online')}>Онлайн</button>
              </div>
              <h3 className='text-grey text-sm'>Локация</h3>
              <select
                className="w-full p-2 border rounded text-sm"
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>Любой регион</option>
                <option>Астана</option>
                <option>Алматы</option>
                <option>Шымкент</option>
                <option>Караганда</option>
                <option>Актобе</option>
              </select>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="18plus"
                  className="mr-2"
                  checked={ageFilter}
                  onChange={() => setAgeFilter(!ageFilter)}
                />
                <label htmlFor="18plus" className="text-sm">18+</label>
              </div>
              <h3 className='text-grey text-sm'>Категория</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.category}
                    className={`px-3 py-1 rounded-full text-[11px] cursor-pointer ${
                      activeTag === tag.category
                        ? 'bg-indigo-600 text-white' // Active style
                        : 'bg-white text-gray-700'  // Inactive style
                    }`}
                    onClick={() => setActiveTag(tag.category)}
                  >
                    {tag.displayName}
                  </span>
                ))}
              </div>
              <h3 className='text-grey text-sm'>Навыки</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-[11px] cursor-pointer ${
                      activeSkillTag === tag
                        ? 'bg-indigo-600 text-white' // Active style for skills
                        : 'bg-white text-gray-700'  // Inactive style for skills
                    }`}
                    onClick={() => setActiveSkillTag(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className='text-grey text-sm'>Образование</h3>
              <select className="w-full p-2 border rounded text-sm">
                <option>Высшее</option>
                <option>Cреднее</option>
                <option>Среднее специальное</option>
              </select>
              <div>
                <h3 className='text-grey text-sm'>Бонусы</h3>
                <input type="range" min="0" max="10000" className="w-full" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>10000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1">
            <div className="mb-6 relative">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Поиск по названию или описанию"
                className="w-full p-2 pl-10 pr-4 border rounded-full"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {/* Display filtered events */}
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <Event key={event.id} event={event} />
              ))
            ) : (
              <p>События не найдены...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;