import Image from "next/image";
import React from "react";
import MobileMenu from "./mobileMenu";
import Link from "next/link";
import { InstagramLogo, FacebookLogo, XLogo } from "@phosphor-icons/react/dist/ssr";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div className="z-auto  mx-auto h-2 bg-black/[0.37] p-10 flex justify-between items-center">
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

      <div className="flex ">
        <InstagramLogo size={32} color="white" className="px-1" />
        <FacebookLogo size={32} color="white" className="px-1" />
        <XLogo size={32} color="white" className="px-1"/>
      </div>
    </div>
  );
};

export default Header;
