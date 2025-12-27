import { useEffect, useState } from 'react';
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
    <main className='w-[50%] h-dvh m-auto  mt-10 mb-10 p-2.5'>
        <span className=" px-3 py-1 inline-block rounded bg-blue-600">
            <h1 className="text-sm font-bold text-white  ">Technology</h1>
          </span>
        <h1 className='w-full font-bold  mt-2.5  mb-2.5'>title</h1>
        <div className='flex w-[150px] items-center justify-between'>
          <span className='flex items-center justify-center gap-1.5'>
          <FaUserAlt />
        <h2 className='text-gray-500'>athor</h2>

          </span>
        <h2 className='text-gray-500'>date</h2>
        </div>
        <img src={img} alt="iamge" className='m-auto bg-cover w-full h-[462px] mb-5 mt-5' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur autem dolorum officiis quod cupiditate non saepe, quia adipisci, modi possimus beatae laborum dolore labore quae quo nostrum, nemo consequuntur. Beatae minus possimus ipsum, vero quis qui consequatur! Sunt cum nisi inventore ipsum perspiciatis doloremque similique velit. Mollitia quis, atque optio quam non cupiditate, provident voluptatibus autem error necessitatibus, nulla porro! Voluptates delectus, fuga consequuntur architecto molestias, saepe eaque dolorum neque sint repellat ex, voluptate voluptas sequi vero! Doloremque reprehenderit quisquam placeat magnam. Doloremque animi, reiciendis accusamus a reprehenderit eum dicta cum facere rem, eligendi rerum obcaecati aut dolor enim.</p>
    </main>
  )
}

