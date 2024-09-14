"use client";
import Image from "next/image";
import bookmark from '/images/bookmark.svg';
import points from '/images/points.svg';

interface EventProps {
  event: {
    id: number;
    name: string;
    description: string;
    location: string;
    category: string;
    age: boolean;
    rewards: number;
    volunteersNeeded: number;
    date: string;
  };
}

const imagePaths = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
  '/images/image6.png',
  '/images/image7.png',
  '/images/image8.png',

];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return imagePaths[randomIndex];
};

const Event: React.FC<{ event: EventProps['event'] }> = ({ event }) => {
  return (
    <div className="bg-[#F8F1EF] rounded-lg shadow p-6 flex gap-7 pr-10 mb-5">
      <div className="relative w-[250px] h-[230px] rounded-[20px] overflow-hidden">
        <img src={getRandomImage()} // Random image selection
          alt="Event image"
          className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-[#F68141] w-8 h-8 flex items-center justify-center rounded-md">
          <Image src="/images/bookmark.svg" alt="Bookmark Icon" width={20} height={10} /> {/* Correct path */}
        </div>
        <div className="gap-2 absolute bottom-3 left-3 flex items-center bg-[#F68141] text-white px-3 py-1 rounded-full">
          <Image src="/images/points.svg" alt="Points Icon" width={20} height={10} /> {/* Correct path */}
          <span>{event.rewards}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-[22px] font-semibold mb-2">{event.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <p>{event.location}</p>
            <span>•</span>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-white text-[#6258E9] font-semibold px-4 py-1 rounded-full text-xs">{event.category}</span>
            <span className="bg-white text-[#6258E9] font-semibold px-4 py-1 rounded-full text-xs">
              {event.age ? '18+' : 'Все возрасты'}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[#6258E9] font-semibold text-sm">{event.volunteersNeeded} волонтеров нужно</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
