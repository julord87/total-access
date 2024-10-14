"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Iconos para el menú hamburguesa

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar estado del menú
  };

  return (
    <header className="space-x-6 flex md:ml-8 items-center justify-between md:justify-normal p-4">
      {/* Logo */}
      <Link href="/" className="flex">
        <Image
          src="/images/bg.png"
          alt="Description"
          width={40} // Tamaño reducido para pantallas móviles
          height={40}
          className="mr-4 opacity-45"
        />
      </Link>

      {/* Botón de menú hamburguesa en móviles */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <AiOutlineClose className="text-2xl text-white" />
          ) : (
            <AiOutlineMenu className="text-2xl text-white" />
          )}
        </button>
      </div>

      {/* Navegación */}
      <nav
        className={`lg:flex lg:space-x-10 font-color ${
          isOpen ? "block text-right" : "hidden"
        } lg:block absolute lg:static top-16 right-4 w-full lg:w-auto lg:bg-transparent p-4 lg:p-0 z-20`}
      >
        <Link href="/" className="block py-2 lg:inline hover:opacity-75 text-sm">
          Home
        </Link>
        <Link href="/nuestra_firma" className="block py-2 lg:inline hover:opacity-75 text-sm">
          Nuestra Firma
        </Link>
        <Link href="/servicios" className="block py-2 lg:inline hover:opacity-75 text-sm">
          Servicios
        </Link>
        <Link href="/contacto" className="block py-2 lg:inline hover:opacity-75 text-sm">
          Contacto
        </Link>
        <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="block py-2 lg:inline hover:opacity-75 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </Link>
      </nav>
    </header>
  );
};

export default Header;
