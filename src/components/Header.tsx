"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import type { Language } from "@/store/useLanguageStore";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  return (
    <header className="space-x-2 flex lg:ml-8 items-center justify-between lg:justify-normal p-4">
      {/* Logo */}
      <Link href="/" className="flex">
        <Image
          src="/images/logo.png"
          alt="Description"
          width={60}
          height={60}
          className="mr-8 opacity-95"
        />
      </Link>

      {/* Botón de menú hamburguesa en móviles */}
      <div className="lg:hidden justify-items-end">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <AiOutlineClose className="text-2xl text-white" />
          ) : (
            <AiOutlineMenu className="text-2xl text-white" />
          )}
        </button>
      </div>

      {/* Navegación: siempre visible a partir de lg */}
      <nav
        className={`lg:flex lg:space-x-2 xl:space-x-8 font-color ${
          isOpen ? "block justify-items-end" : "hidden"
        } nav lg:block absolute lg:staticrounded-md top-16 right-4 lg:w-full md:w-auto lg:bg-transparent p-4 lg:p-0 z-20`}
      >
        <Link href="/nuestra_firma" className="block py-2 lg:inline hover:opacity-75 text-sm">
          {language === "EN" ? "Our Firm" : language === "ZH" ? "我们的公司" : "Nuestra Firma"}
        </Link>
        <Link href="/servicios" className="block py-2 lg:inline hover:opacity-75 text-sm">
          {language === "EN" ? "Services" : language === "ZH" ? "服务" : "Servicios"}
        </Link>
        <Link href="/contacto" className="block py-2 lg:inline hover:opacity-75 text-sm">
          {language === "EN" ? "Contact" : language === "ZH" ? "联系" : "Contacto"}
        </Link>
          <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="block py-2 lg:inline hover:opacity-75 text-sm"
          rel="noopener noreferrer"
          target="_blank"
        >
          {language === "ZH" ? "WhatsApp" : "WhatsApp"}
        </Link>
        {language === "ZH" && (
          <Link
            href="/wechat-contact" // Página con el QR y las instrucciones para WeChat
            className="block py-2 lg:inline hover:opacity-75 text-sm"
            rel="noopener noreferrer"
          >
            微信号
          </Link>
        )}

        {/* Menú de idiomas dentro de la misma navegación */}
        <div className="relative py-2 lg:inline hover:opacity-75 text-sm font-color5">
          <button onClick={toggleLanguageMenu} aria-label="Toggle language menu">
            {language === "EN" ? "Language" : language === "ZH" ? "语言" : "Idioma"}
          </button>
          {languageMenuOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-gray-800 text-white rounded shadow-md z-20">
              <button
                onClick={() => {
                  setLanguage("ES" as Language);
                  setLanguageMenuOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700"
              >
                ES
              </button>
              <button
                onClick={() => {
                  setLanguage("EN");
                  setLanguageMenuOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700"
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLanguage("ZH");
                  setLanguageMenuOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700"
              >
                中文
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
