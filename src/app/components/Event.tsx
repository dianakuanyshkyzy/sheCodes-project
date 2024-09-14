import Image from "next/image";
import bookmark from '@/app/public/images/bookmark.svg';
import points from '@/app/public/images/points.svg';

const Event = () => {
    return (
        <div className="bg-[#F8F1EF] rounded-lg shadow p-6 flex gap-7 pr-10">
            <div className="relative w-[250px] h-[230px] rounded-[20px] overflow-hidden">
                <img src="https://static.bntu.by/bntu/new/news/uploads/fast/541_2.jpg"
                alt="Example image"
                className="w-full h-full object-cover"/>
                <div className="absolute top-3 right-3 bg-[#F68141] w-8 h-8 flex items-center justify-center rounded-md">
                    <Image src={bookmark} alt="Bookmark Icon"  />
                </div>
                <div className="gap-2 absolute bottom-3 left-3 flex items-center bg-[#F68141] text-white px-3 py-1 rounded-full">
                    <Image src={points} alt="Points Icon" />
                    <span>1300</span>
                </div>

            </div>

            <div className='flex flex-col justify-between'>
                <div>
                    <h3 className="text-[22px] font-semibold mb-2">Ищем волонтеров для Aiesec SheCodes хакатона</h3>
                    <div className='flex items-center gap-2'>
                        <p className="text-sm text-gray-500">Астана, Казахстан</p>
                        <p>•</p>
                        <p className="text-sm text-gray-500">14.09-15.09</p>
                        <p>•</p>
                        <p className="text-sm text-gray-500">10:00</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-white text-[#6258E9] font-semibold px-4 py-1 rounded-full text-xs">Организация мероприятий</span>
                        <span className="bg-white text-[#6258E9] font-semibold px-4 py-1 rounded-full text-xs">18+</span>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <span className="text-[#6258E9] font-semibold text-sm">12/20 учавствуют</span>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Узнать больше</button>
                    </div>
                </div>
            </div>  
        </div>
    )
};

export default Event;