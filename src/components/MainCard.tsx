// src/components/MainCard.tsx

"use client";

import Link from "next/link";
import Header from "./Header";
import { Footer } from "./Footer";
import { useLanguageStore } from "@/store/useLanguageStore";

const MainCard = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex flex-col justify-between h-screen md:h-full w-full main-card bg-gray-900 p-6 md:m-4">
      <Header language={language} setLanguage={setLanguage} />

      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight">
          {language === "EN"
            ? "Total Access & Logistics"
            : language === "ZH"
            ? "全面访问与物流"
            : "Total Access & Logistics"}
        </h1>
        <Link
          href="/nuestra_firma"
          className="text-lg lg:text-xl text-white py-3 mt-2 font-color hover:opacity-75"
        >
          {language === "EN"
            ? "*Who are we?"
            : language === "ZH"
            ? "*我们是谁?"
            : "*Quiénes somos ?"}
        </Link>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default MainCard;
