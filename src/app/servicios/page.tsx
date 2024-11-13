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
          {language === "EN"
            ? "We provide solutions /"
            : language === "ZH"
            ? "我们提供以下解决方案"
            : "Brindamos soluciones en /"}
        </h1>

        <div className="space-y-2 items-center">
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressCard className="mr-2" />
            {language === "EN"
              ? "Temporary, Transitory, and Permanent Residence"
              : language === "ZH"
              ? "临时、过渡性和永久居留"
              : "Residencia: Transitoria, Temporaria y Permanente"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressCard className="mr-2" />
            {language === "EN"
              ? "Provisional and Permanent CUIL"
              : language === "ZH"
              ? "临时和永久CUIL"
              : "CUIL: Provisorio y Definitivo"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN"
              ? "Birth, marriage, and criminal record certifications"
              : language === "ZH"
              ? "出生、结婚及无犯罪记录证明"
              : "Certificaciones: Actas de nacimiento, matrimonio y antecedentes penales"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN"
              ? "Corporate Migration: Work permits, visas, and document management"
              : language === "ZH"
              ? "企业移民：工作许可、签证及文件管理"
              : "Migraciones Empresariales: Permisos de trabajo, visados y gestión documental"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN"
              ? "Customs Logistics: Temporary imports and exports, transport agent"
              : language === "ZH"
              ? "海关物流：临时进出口，运输代理"
              : "Logística Aduanera: Importaciones y exportaciones temporales, agente de transporte"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN"
              ? "Renure Certification: Advisory and processing for companies"
              : language === "ZH"
              ? "Renure证书：企业咨询与办理"
              : "Certificado Renure: Asesoría y trámite para empresas"}
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook className="mr-2" />
            {language === "EN"
              ? "Migration Consulting: Specialized guidance in international mobility"
              : language === "ZH"
              ? "移民咨询：专业的国际流动性指导"
              : "Consultoría Migratoria: Orientación especializada en movilidad internacional"}
          </p>
        </div>

        <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="mt-4 block text-white italic py-2 lg:inline hover:opacity-75 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          *{" "}
          {language === "EN"
            ? "Contact us"
            : language === "ZH"
            ? "联系我们"
            : "Contactanos"}
        </Link>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default Servicios;
