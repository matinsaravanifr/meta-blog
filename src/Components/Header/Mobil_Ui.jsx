import React from 'react'
import { FaBars } from "react-icons/fa";

export default function Mobil_Ui() {
  return (

    <header className='z-50 relative flex justify-end'>
    <nav className='flex flex-col fixed w-[50%] h-full bg-gray-600'>

        <button className='mt-3 ml-2 mb-4 ' >
            <FaBars className='w-5 h-10' />
        </button>
    <ul  className='text-center'>  

    <li className='pb-4'>Home</li>
    <li className='pb-4'>Bloge</li>
    <li className='pb-4'>About Us</li>
    <li className='pb-4'>contact</li>

    </ul>

    </nav>
    </header>
  )
}
