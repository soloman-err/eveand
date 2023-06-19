import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Events', to: '/events' },
  { name: 'News', to: '/news' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Header = () => {
  return (
    <header className="text-white">
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-900 py-5 px-10">
        <h2 className="text-4xl font-bold">EVE&</h2>
        <div className="flex gap-5 text-xl">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <FaBehance />
          </Link>
        </div>
      </div>

      <nav className="flex flex-col md:flex-row items-center md:justify-between bg-cyan-500 px-10 xl:text-lg py-2 md:py-0">
        <ul className="hidden md:flex">
          {navLinks.map((navItem, index) => (
            <Link key={index} to={navItem.to} className="hover:bg-cyan-600 p-5">
              {navItem.name}
            </Link>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center gap-1 pr-1 bg-slate-200">
            <input
              type="search"
              className="rounded-sm mr-2 outline-none focus:border-2"
            />
            <FaSearch className="text-black" />
          </div>
          <button className="btn btn-sm rounded-sm text-white border-none bg-blue-700 hover:bg-blue-900 shadow-lg capitalize xl:text-lg">
            Book An Event
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
