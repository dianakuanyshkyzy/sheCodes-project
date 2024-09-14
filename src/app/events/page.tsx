"use client"; 
import React, {useState} from 'react';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import Event from '../components/Event';

const SearchPage = () => {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [activeButton, setActiveButton] = useState('online');
    const [activeSkillTag, setActiveSkillTag] = useState<string | null>(null);

    const tags = ['Эко - мероприятия', 'Книжный клуб', 'Приют для животных', 'Репетиторство', 'Другое'];
    const skills = ['Коммуникабельность', 'Английский язык', 'Программирование', 'Маркетинг', 'Графический дизайн'];

  return (
    <div className="min-h-screen font-montserrat">
    <Header/>
      {/* Main content */}
      <div className="max-w-7xl my-5 mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Left sidebar */}
          <div className="w-1/4 bg-[#EBEAFB] rounded-lg shadow p-4 mr-4">
          <div className='flex justify-between items-center mb-5'>
            <h2 className="text-lg font-semibold">Фильтры поиска</h2>
            <h5 className="text-[12px] text-[#6258E9]">Сбросить все</h5>
          </div>
            {/* <h2 className="text-lg font-semibold mb-4">Фильтры поиска</h2> */}
            <div className="space-y-4">
              <div className="flex space-x-2">
                <button className={`px-4 py-2 rounded-full text-sm ${
                    activeButton === 'online' ? 'bg-indigo-600 text-white': 'bg-white text-gray-700'}`}
                    onClick={() => setActiveButton('online')}>Онлайн</button>

                <button className={`px-4 py-2 rounded-full text-sm ${
                    activeButton === 'offline' ? 'bg-indigo-600 text-white': 'bg-white text-gray-700'}`}
                    onClick={() => setActiveButton('offline')}>Оффлайн</button>
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
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-[11px] cursor-pointer ${
                      activeTag === tag
                        ? 'bg-indigo-600 text-white' // Active style
                        : 'bg-white text-gray-700'  // Inactive style
                    }`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
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
              <input
                type="text"
                placeholder="Поиск по названию"
                className="w-full p-2 pl-10 pr-4 border rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <Event/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;