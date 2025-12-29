import { useEffect } from 'react';
import axios from 'axios'
import img from './../../assets/Image.png'
import { FaUserAlt } from "react-icons/fa";

export default function Article_main() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/information/api/v1/all-news/');
        console.log('✅ لیست اخبار:', res.data.results);
      } catch (error) {
        console.error('❌ خطا در دریافت داده:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='w-[60%] mx-auto mt-10 mb-10 p-4 h-auto'>
      
      {/* دسته بندی */}
      <div className="inline-block px-3 py-1 rounded bg-blue-600">
        <p className="text-sm font-bold text-white">Technology</p>
      </div>

      {/* عنوان */}
      <h1 className='font-bold mt-2.5 mb-2.5 text-xl'>Title</h1>

      {/* نویسنده و تاریخ */}
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-2'>
          <FaUserAlt className='text-gray-500' />
          <span className='text-gray-500'>Author</span>
        </div>
        <span className='text-gray-500'>Date</span>
      </div>

      {/* تصویر */}
      <img src={img} alt="image" className='w-full h-[300px] mask-cover mb-5 mt-5 rounded' />

      {/* متن */}
      <p className='text-gray-800 leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur autem dolorum officiis quod cupiditate non saepe, quia adipisci, modi possimus beatae laborum dolore labore quae quo nostrum, nemo consequuntur...
      </p>

    </main>
  )
}
