import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="w-full bg-black h-16 flex items-center justify-around">
      <ul className="flex gap-6">
      <a
          href="#"
          className="group text-white/90 hover:text-white font-medium transition duration-300 text-sm"
        >
          Productos
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainBlue"></span>
        </a>
        <a
          href="#"
          className="group text-white/90 hover:text-white font-medium transition duration-300 text-sm"
        >
          Industria
          <span className="block  max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainBlue"></span>
        </a>
        <a
          href="#"
          className="group text-white/90 hover:text-white font-medium transition duration-300 text-sm"
        >
          Comunidad
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainBlue"></span>
        </a>
        <a
          href="#"
          className="group text-white/90 hover:text-white font-medium transition duration-300 text-sm"
        >
          Recursos
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainBlue"></span>
        </a>
        <a
          href="#"
          className="group text-white/90 font-medium hover:text-white transition duration-300 text-sm"
        >
          Learn
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainBlue"></span>
        </a>
      </ul>
      <ul className="flex gap-6 items-center">
        <button className="bg-transparent text-sm shadow-xl text-white/90 shadow-mainBlue/10  border-2 text-center font-medium tracking-widest border-mainBlue rounded-full text-white px-4 py-1 hover:bg-mainBlue duration-200 hover:text-gray-950 flex gap-2 items-center uppercase">
          Planes y Precios{" "}
          <BsArrowRightShort className="text-xl"></BsArrowRightShort>
        </button>
        <AiOutlineSearch className="text-white/90 text-xl"></AiOutlineSearch>
        <AiOutlineMenu className="text-white/90 text-xl"></AiOutlineMenu>
        <FaUserCircle className="text-white/90 text-xl"></FaUserCircle>
      </ul>
    </header>
  );
}
