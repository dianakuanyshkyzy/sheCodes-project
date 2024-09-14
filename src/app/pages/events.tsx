import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Events = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Фильтры поиска</h2>
        
        {/* Search filters */}
        <div className="space-y-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Онлайн</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Оффлайн</button>
          
          <select className="w-full p-2 border rounded">
            <option>Любой регион</option>
            {/* Add more options */}
          </select>
          
          <div>
            <label className="block mb-2">18+</label>
            {/* Add toggle or checkbox here */}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Эко-мероприятия</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Книжный клуб</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Приют для животных</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Репетиторство</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Другое</span>
          </div>
          
          {/* More filters */}
          <select className="w-full p-2 border rounded">
            <option>Образование</option>
            {/* Add more options */}
          </select>
          
          <select className="w-full p-2 border rounded">
            <option>Зимние лыжи, Катаниянад</option>
            {/* Add more options */}
          </select>
          
          <select className="w-full p-2 border rounded">
            <option>Графический дизайн</option>
            {/* Add more options */}
          </select>
          
          {/* Range slider */}
          <div>
            <label className="block mb-2">Возраст</label>
            <input type="range" min="1" max="100" className="w-full" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Search bar */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Поиск по названию"
            className="w-full p-2 pl-10 border rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        {/* Results */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Ищем волонтеров для Алекс</h2>
          <p className="text-gray-600 mb-4">Single Family</p>
          <div className="flex items-center text-gray-500">
            <MapPin className="mr-2" />
            <span>Location details would go here</span>
          </div>
        </div>
      </div>
      
      {/* User info */}
      <div className="absolute bottom-4 right-4 bg-pink-500 text-white p-2 rounded-lg">
        Римма Кубанова
      </div>
    </div>
  );
};

export default Events;