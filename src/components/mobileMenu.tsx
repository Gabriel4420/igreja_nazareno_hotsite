"use client";

import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden lg:hidden">
      <button
        className="text-white bg-blue-600 p-2 rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? "Close" : "Menu"}
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
              className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
