"use client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { LiaAddressBook, LiaAddressCard } from "react-icons/lia";
import { useLanguageStore } from "@/store/useLanguageStore";

const Servicios = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex flex-col justify-between h-screen lg:h-full w-full main-card bg-gray-900 p-6 lg:m-4">
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Contenido principal */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight mb-3">
          {language === "EN" ? "We provide solutions /" : language === "ZH" ? "我们提供以下解决方案" : "Brindamos soluciones en /"}
        </h1>

        <div className="space-y-2 items-center">
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressCard className="mr-2" />
            {language === "EN" ? "Temporary, Temporary and Permanent Residence" : language === "ZH" ? "临时、暂时和永久居留" : "Residencia Transitoria, Temporaria y Permanente"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressCard className="mr-2" />
            {language === "EN" ? "Provisional and definitive CUIL" : language === "ZH" ? "临时和最终CUIL" : "CUIL provisorio y definitivo"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN" ? "Obtaining birth and marriage certificates" : language === "ZH" ? "获取出生和结婚证明" : "Obtención de certificados de nacimiento y matrimonio"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN" ? "Criminal record certificate" : language === "ZH" ? "无犯罪记录证明" : "Certificado de antecedentes penales"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN" ? "Renure Certificate for companies" : language === "ZH" ? "企业的Renure证书" : "Certificado Renure para empresas"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN" ? "Migration consulting" : language === "ZH" ? "移民咨询" : "Consultoría migratoria"}
          </p>
        </div>

        <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="mt-4 block text-white italic py-2 lg:inline hover:opacity-75 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          * {language === "EN" ? "Contact us" : language === "ZH" ? "联系我们" : "Contactanos"}
        </Link>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default Servicios;
