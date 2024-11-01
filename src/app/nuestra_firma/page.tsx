"use client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";

const NuestraFirma = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex flex-col justify-between h-screen md:h-full w-full main-card bg-gray-900 p-6 md:m-4">
      {/* Header */}
      <Header language={language} setLanguage={setLanguage}/>

      {/* Contenido principal */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight">
          {language === "EN" ? "We are a consultancy /" : language === "ZH" ? "我们是一家咨询公司 /" : "Somos una consultora /"}
        </h1>
        <p className="text-lg lg:text-xl font-color my-3 justify-normal">
          {language === "EN"
            ? "dedicated to providing legal advice on mobility matters. Since 2007, we have been offering comprehensive advice on international migration regulations, relocation, taxes, and social security. Our strength lies in the diversity of professionals that make up our Team: specialized profiles in each area to ensure a comprehensive and personalized approach to your specific needs. Thanks to the constant training and education of our members, we are able to offer you a service experience under the highest quality standards."
            : language === "ZH"
            ? "致力于提供关于流动性问题的法律咨询。自2007年以来，我们一直提供有关国际移民法规、搬迁、税收和社会保障的综合建议。我们的优势在于我们团队中专业人士的多样性：每个领域的专业化配置，确保根据您的具体需求提供全面和个性化的解决方案。感谢我们成员的持续培训和教育，我们能够在最高质量标准下为您提供服务体验。"
            : "dedicada a la asesoría jurídica en materia de movilidad. Orientados a la atención al cliente, desde el 2007 ofrecemos asesoramiento integral sobre normativa migratoria internacional, relocation e impuestos y seguridad social. Nuestra fortaleza radica en la diversidad de profesionales que componen nuestro Equipo: perfiles especializados en cada materia, para asegurar un abordaje amplio y personalizado a su propia necesidad. Gracias a la constante capacitación y formación de nuestros miembros, logramos ofrecerte una experiencia de servicio bajo los más altos estándares de calidad."}
        </p>
        <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="mt-2 block text-white italic py-2 lg:inline hover:opacity-75 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          * {language === "EN" ? "Contact us" : language === "ZH" ? "联系我们" : "Contactanos"}
        </Link>
      </div>

      {/* Footer */}
      <Footer language={language}/>
    </div>
  );
};

export default NuestraFirma;
