"use client";
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
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
}

const SearchPage = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/events.json');
      if (!response.ok) {
        console.error("Failed to fetch events.json");
        return;
      }
      const data = await response.json();
      setEvents(data);
    };

    fetchData();
  }, []);

  return (
    <div className="font-montserrat">
      <Header />
      {/* Main content */}
      <div className="max-w-7xl my-5 mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex items-start"> {/* Added items-start to align top */}
          {/* Left sidebar */}
          <div className="w-1/4 bg-[#EBEAFB] rounded-lg shadow p-4 mr-4 self-start"> {/* Removed h-auto and added self-start */}
            <div className='flex justify-between items-center mb-5'>
              <h2 className="text-lg font-semibold">Фильтры поиска</h2>
              <h5 className="text-[12px] text-[#6258E9]">Сбросить все</h5>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Онлайн</button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm">Оффлайн</button>
              </div>
              <h3 className='text-grey text-sm'>Локация</h3>
              <select className="w-full p-2 border rounded text-sm">
                <option>Любой регион</option>
                <option>Астана</option>
                <option>Алматы</option>
                <option>Шымкент</option>
                <option>Караганда</option>
                <option>Актобе</option>
              </select>
              <div className="flex items-center">
                <input type="checkbox" id="18plus" className="mr-2" />
                <label htmlFor="18plus" className="text-sm">18+</label>
              </div>
              <h3 className='text-grey text-sm'>Категория</h3>
              <div className="flex flex-wrap gap-2">
                {['Эко - мероприятия', 'Книжный клуб', 'Приют для животных', 'Репетиторство', 'Другое'].map((tag) => (
                  <span key={tag} className="bg-white px-3 py-1 rounded-full text-[11px]">{tag}</span>
                ))}
              </div>
              <h3 className='text-grey text-sm'>Навыки</h3>
              <div className="flex flex-wrap gap-2">
                {['Коммуникабельность', 'Английский язык', 'Программирование', 'Маркетинг', 'Графический дизайн'].map((tag) => (
                  <span key={tag} className="bg-white px-3 py-1 rounded-full text-[11px]">{tag}</span>
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
              <input
                type="text"
                placeholder="Поиск по названию"
                className="w-full p-2 pl-10 pr-4 border rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {events.length > 0 ? (
              events.map(event => (
                <Event key={event.id} event={event} />
              ))
            ) : (
              <p>Loading events...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
