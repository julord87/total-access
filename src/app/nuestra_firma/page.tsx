"use client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";

const NuestraFirma = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex flex-col justify-between h-screen lg:h-full w-full main-card bg-gray-900 p-6 lg:m-4">
      {/* Header */}
      <Header language={language} setLanguage={setLanguage}/>

      {/* Contenido principal */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight">
          {language === "EN" ? "We are a consultancy /" : language === "ZH" ? "我们是一家咨询公司 /" : "Somos una consultora /"}
        </h1>
        <p className="text-lg lg:text-xl font-color my-3 justify-normal">
          {language === "EN"
            ? "With 15+ years in mobility services and legal advisory, we specialize in migration regulations, relocation, work permits, and customs logistics. Our multidisciplinary team provides tailored, high-quality solutions, helping clients confidently and efficiently navigate mobility and logistics processes."
            : language === "ZH"
            ? "在拥有超过15年在流动性服务和法律咨询方面的经验，专注于移民和海关手续的处理，我们致力于为企业和个人在国际移民法规、搬迁、工作许可管理和海关物流等方面提供全面的解决方案。我们的多学科专业团队能够处理移民和海关流程的每个方面，承诺提供个性化和高质量的体验。我们了解这些程序的复杂性，并致力于让客户在其流动性和国际物流需求的每个阶段都能充满信心和高效地进行。"
            : "Con más de 15 años en movilidad y asesoría jurídica, nos especializamos en normativa migratoria, relocation, permisos de trabajo y logística aduanera. Nuestro equipo multidisciplinario ofrece soluciones personalizadas y de alta calidad para que los clientes naveguen con confianza y eficiencia."}
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
