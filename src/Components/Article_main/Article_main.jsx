import { useEffect, useState } from 'react';
import axios from 'axios'
import img from './../../assets/Image.png'
import { FaUserAlt } from "react-icons/fa";
import {  useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
export default function Article_main() {
  const[data,setdata]=useState(null)
  const [isloading , setisloading]=useState(true)
  const {id}=useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/information/api/v1/news-detail/${id}/`);
        console.log(res.data.title);
        setisloading(false)
        setdata(res.data)
        
        
        
        
      } catch (error) {
        console.error('❌ خطا در دریافت داده:', error);
      }
    };

    fetchData();
  }, [id]);

  console.log(data?.cover_image);
  const newDate=new Date(data?.created_at)
  const formatDate=newDate.toLocaleDateString("fa-IR")
  return (
    <main className='w-[60%] mx-auto mt-10 mb-10 p-4 h-auto'>
      {
      isloading ? <Spinner/>:
      <>
      
        <div className="inline-block px-3 py-1 rounded bg-blue-600">
        <p className="text-sm font-bold text-white">Technology</p>
        </div>

      <h1 className='font-bold mt-2.5 mb-2.5 text-xl'>{data?.title}</h1>

      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-2'>
          <FaUserAlt className='text-gray-500' />
          <span className='text-gray-500'>{data?.author_title}</span>
        </div>
        <span className='text-gray-500'>{formatDate}</span>
      </div>

      <img src={data?.cover_image} alt="image" className='w-full h-[300px] mask-cover mb-5 mt-5 rounded' />

      <p className='text-gray-800 leading-relaxed'>
        {data?.content}
      </p>
      </>
}

</main>
  )
}
