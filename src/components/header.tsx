'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import MobileMenu from "./mobileMenu";
import Link from "next/link";
import { InstagramLogo, FacebookLogo, XLogo } from "@phosphor-icons/react/dist/ssr";


const Header: React.FC = () => {

  const [zIndex, setZIndex] = useState('z-10');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setZIndex('z-50');
        
      } else {
        setZIndex('z-auto');
       
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${zIndex} fixed top-0 w-full  mx-auto h-2 bg-black/[0.50] p-10 flex justify-between items-center`} >
      <Image
        src="/images/logo-transparente.png"
        alt="logo"
        width={100}
        height={50}
        className="object-cover"
      />

      <div className="hidden md:block lg:block">
        <Link href="/" className="text-sm text-white hover:text-gray-400 px-2">
          Inicio
        </Link>
        <Link href="/" className="text-sm text-white hover:text-gray-400 px-2">
          Sobre nós
        </Link>
        <Link href="/" className="text-sm text-white hover:text-gray-400 px-2">
          Blog
        </Link>
        <Link href="/" className="text-sm text-white hover:text-gray-400 px-2">
          Contato
        </Link>
      </div>

      <MobileMenu />

      <div className="hidden md:flex lg:flex ">
        <InstagramLogo size={32} color="white" className="px-1" />
        <FacebookLogo size={32} color="white" className="px-1" />
        <XLogo size={32} color="white" className="px-1"/>
      </div>
    </div>
  );
};

export default Header;
