import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 p-2 overflow-hidden border border-t-2 fixed w-full top-[88%] ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between md:flex-row relative z-10 ">
        
      
        
        {/* Copyright */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-4 md:mb-0">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">Sonugupta™</a>. All Rights Reserved.
        </span>

          {/* Logo */}
          <div className="mb-4 md:mb-0 ">
          <Logo width="80px"/>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">Contact</Link>
          </li>
        </ul>

      </div>
    </footer>
  );
}

export default Footer;
