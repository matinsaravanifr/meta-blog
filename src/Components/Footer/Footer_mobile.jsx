import { FaEnvelope } from "react-icons/fa6";
import footerlogo from './../../assets/Copyright Info.svg'
export default function Footer_mobile() {
  return (
    <footer className='lg:hidden block bg-gray-300 mt-10 p-4'>
        <div className='w-full '>
            <img className='m-auto' src={footerlogo} alt="logo" />
        </div>
        <ul className="flex items-center justify-center w-full">
          <li className="m-5 hover:border-b-2 p-2 cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="m-5 hover:border-b-2 p-2 cursor-pointer">
            <a href="#">Blog</a>
          </li>
          <li className="m-5 hover:border-b-2 p-2 cursor-pointer">
            <a href="#">About Us</a>
          </li>
          <li className="m-5 hover:border-b-2 p-2 cursor-pointer">
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="w-[300px] h-[250px] bg-white rounded-2xl flex flex-col items-center p-4 m-auto">
                <h1 className="font-bold text-center mt-4">Weekly Newsletter</h1>
                  <p className="mb-4 mt-4 text-center">
                    Get blog articles and offers via email
                  </p>
                  <div className="flex items-center border-[1px] rounded-[5px] w-full px-3 flex-row-reverse">
                    <FaEnvelope className="text-gray-400" />
                    <input
                      className="w-full h-8 pl-3 outline-none"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>
                  <button className="w-full h-8 bg-blue-800 rounded-[5px] text-white font-bold mt-4">
                    Subscribe
                  </button>
        </div>
    </footer>
  )
}
