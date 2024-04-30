import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" py-4 p-[1%] border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-red-500 font-bold text-5xl">Header</div>
        <button
          className="text-black focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4`}
        >
          <li><Link to={"/admin"}>Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
