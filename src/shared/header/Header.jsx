import React from 'react';
import {
  FaBars,
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
      {/* Top Nav */}
      <div className="flex md:flex-row items-center text-end md:justify-between bg-gradient-to-r from-cyan-500 to-blue-900 py-3 md:py-5 pr-5 px-1 md:px-10">
        {/* Nav Dropdown */}
        <div className="dropdown md:hidden m-0">
          <label
            tabIndex={0}
            className="btn bg-transparent border-none text-white"
          >
            <FaBars size={24} />
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 shadow-lg bg-white text-base-content z-50 rounded-sm"
          >
            <div className="card-body p-0">
              <ul className="flex flex-col divide-y-2">
                {navLinks.map((navItem, index) => (
                  <Link
                    key={index}
                    to={navItem.to}
                    className="hover:bg-cyan-400 p-5"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold ml-auto md:ml-0">EVE&</h2>

        <div className="hidden md:flex gap-5">
          <div className="flex gap-2 items-center">
            <button className="btn btn-xs rounded-sm font-bold">
              <Link>Login</Link>
            </button>
            <button className="btn btn-xs btn-outline text-white rounded-sm font-bold">
              <Link>Register</Link>
            </button>
          </div>

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
      </div>

      {/* Secondary Nav */}
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
          <button className="btn btn-sm rounded-sm text-white border-none bg-blue-600 hover:bg-blue-900 shadow-lg capitalize xl:text-lg">
            Book An Event
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
