import { FaEnvelope } from "react-icons/fa6";
import footerlogo from './../../assets/Copyright Info.svg'
function Footer() {
  return (
    <footer className="w-full h-[400px] bg-gray-300 flex ">
      <section className="w-[80%] m-auto flex justify-between h-full items-center relative">
        <div className="w-[280px]">
          <h1 className="font-bold mb-5">About</h1>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam
          </p>
          <span className="flex">
            <h1 className="font-bold">Email:</h1>
            <a className="ml-2" href="info@jstemplate.net">
              info@jstemplate.net
            </a>
          </span>
          <span className="flex">
            <h1 className="font-bold">Phone:</h1>
            <p className="ml-2"> 880 123 456 789</p>
          </span>
        </div>


        <div className="min-w-[120px]">
          <h1 className="font-bold mb-2">Quick Link</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </div>


        <div className="min-w-[120px]">
          <h1 className="font-bold mb-2">Category</h1>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>


        <div className="w-[300px] h-[250px] bg-white rounded-2xl flex flex-col items-center p-4">
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
      </section>
    </footer>
  );
}

export default Footer;