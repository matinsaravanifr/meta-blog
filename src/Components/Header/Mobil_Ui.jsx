import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

export default function Mobil_Ui() {
  const[isopen,setisopen]=useState(false)
  return (

    <header className='z-50 relative flex justify-end lg:hidden'>
        <button className='mt-4 mb-10 mr-10' onClick={()=>setisopen(true)}> 
          <FaBars className='' />

        </button>
    <nav className={`flex flex-col top-0 right-0 fixed w-[50%] h-full transform transition-transform  delay-100 duration-300 ease-in-out bg-gray-300 ${isopen ? "translate-x-0" : "translate-x-full"}`}>
        <button className='mt-3 ml-2 mb-4 cursor-pointer 'onClick={()=>{setisopen(false)}} >
            <FaBars className='w-5 h-10' />
        </button>
    <ul  className='text-center'>  

    <li className=" pb-4 cursor-pointer">
      Home
      </li>
    <li className='pb-4 cursor-pointer'>
      <a href="">
      Bloge
      </a>
      </li>
    <li className='pb-4 cursor-pointer'>
      <a href="">

      About Us
      </a>
      </li>
    <li className='pb-4 cursor-pointer'>
      <a href="">

      contact
      </a>
      </li>

    </ul>

    </nav>
    </header>
  )
}
