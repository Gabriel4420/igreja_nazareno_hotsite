"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import {
  InstagramLogo,
  FacebookLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden lg:hidden">
      <button
        className="text-white  p-2 rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={32} /> : <List size={32} />}
      </button>
      {isOpen && (
        <div className="absolute top-12 right-0 z-10 w-40   bg-white shadow-lg rounded-lg">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <Link
              href="/"
              className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Sobre nós
            </Link>
            <Link
              href="/blog"
              className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block w-full py-1 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Contato
            </Link>
          </nav>
          <div className="flex flex-col items-center space-y-1">
            <div className="border-t border-slate-200 w-full"></div>
            <div className="flex py-2 -mt-4  items-center justify-center">
              <InstagramLogo
                size={32}
                color="#e67402"
                className="px-1 cursor-pointer"
              />
              <FacebookLogo
                size={32}
                color="#e67402"
                className="px-1 cursor-pointer"
              />
              <XLogo
                size={32}
                color="#e67402"
                className="px-1 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
