import logo from "./../../assets/Logo.svg";
import { FaSistrix } from "react-icons/fa6";
import Mobil_Ui from "./Mobil_Ui";
function Header() {
  return (<>
    <header className="hidden lg:w-[80%] lg:h-[100px] lg:m-auto  lg:flex lg:items-center lg:justify-between  ">
      <img className="w-50" src={logo} alt="logo" />
      <nav className="">
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
      </nav>
      <div className="flex items-center mr-3">
        <span className="w-30 flex items-center flex-row-reverse pl-1.5 pr-1.5 bg-gray-300 rounded-[4px]">
          <label className="pr-1" htmlFor="">
            <FaSistrix />
          </label>
          <input
            className="w-35 h-7 pl-1.5 bg-gray-300 items-center border-gray-300 rounded-[4px] outline-none "
            placeholder="search"
            type="text"
            />
        </span>
        <button
          id="toggleTheme"
          class="relative w-11 h-5 flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none ml-5"
        >
          <div
            id="icon"
            class="w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-yellow-500"
          ></div>
        </button>
      </div>
    </header>
    <Mobil_Ui/>
          </>
  );
}

export default Header;
