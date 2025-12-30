import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function Contact() {
  return (
    <>
    <Header/>
    <main className='w-full  min-h-screen flex items-center justify-center'>
        <div className='m-auto w-[50%]  shadow-2xl p-10 flex   flex-col rounded-2xl'>

        <h1 className='text-center font-bold mb-3'>تماس با ما</h1>
        <h2 className='text-center mb-3 mt-3'>+98-123-234-2343</h2>
        <h2 className='text-center mb-3 mt-3'>metablog@gmail.com</h2>

        <section className='w-[50%] flex items-center justify-between m-auto mt-5 '>
        <a href="">
        <FaGithub className='text-3xl cursor-pointer m-1.5' />
        </a>
        <a href="">

        <FaPhoneSquareAlt className='text-3xl cursor-pointer m-1.5' />
        </a>
        <a href="">

        <FaFacebook className='text-3xl cursor-pointer m-1.5'/>
        </a>
        </section>
        </div>

    </main>
    <Footer/>
    </>
  )
}
