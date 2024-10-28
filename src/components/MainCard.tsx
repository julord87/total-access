"use client"

import Link from "next/link";
import Header from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";

const MainCard = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="flex flex-col justify-between h-screen md:h-full w-full main-card bg-gray-900 p-6 md:m-4">
      {/* Header con idioma */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Contenido principal condicionado */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight">
          {language === 'EN' ? 'Total Access & Logistics' : 
           language === 'CH' ? '全面访问与物流' : 
           'Total Access & Logistics'}
        </h1>
        <Link href="/nuestra_firma" className="text-lg lg:text-xl text-white py-3 mt-2 font-color hover:opacity-75">
          {language === 'EN' ? '*Who are we?' : 
           language === 'CH' ? '*我们是谁?' : 
           '*Quiénes somos ?'}
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainCard;
