import React from 'react';
import { Fullscreen, Search } from 'lucide-react';
//provide a path to the image.svg
import background from 'public/images/image.svg'
import Image from 'next/image';


const VolunteerSection = () => {
  return (
    <div className="font-montserrat relative h-screen flex flex-col items-center justify-start pt-20 text-center text-navy-700">
      <div className="absolute inset-0 z-0">
        <Image src="images/image.svg" alt="City skyline" className="w-full h-full object-cover" width={1080} height={1900} />
      </div>
      <div className="z-10 space-y-4">
        <div className="text-amber-400 text-sm">⭐ 1000+ волонтеров</div>
        <h1 className="text-4xl font-bold leading-tight" style={{ color: '#090859' }}>
          Подай Руку помощи, Создай<br />Лучшее Будущее
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
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </div>
  );
};

export default VolunteerSection;
