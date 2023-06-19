import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center bg-zinc-950 text-white py-10 mt-20">
      <footer className="footer p-10">
        <div className="w-20 h-20 rounded-sm">
          <div className="relative md:mt-10">
            <span className="absolute top-10 left-3 font-bold text-2xl -rotate-12 z-10">
              EVE&
            </span>
            <div className="absolute -rotate-12 top-0 border-4 w-20 h-20 rounded-lg bg-cyan-700"></div>
          </div>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      {/* <span>All right reserved&copy; eveand</span> */}
    </footer>
  );
};

export default Footer;
