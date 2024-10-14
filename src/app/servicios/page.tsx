import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { LiaAddressBook, LiaAddressCard } from "react-icons/lia";

const Servicios = () => {
  return (
    <div className="flex flex-col justify-between h-screen md:h-full w-full main-card bg-gray-900 p-6 md:m-4">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight mb-3">
          Brindamos soliciones en /
        </h1>

        <div className="space-y-2 items-center">
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressCard  className="mr-2"/>
            Residencia Transitoria, Temporaria y Permanente
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressCard  className="mr-2"/>
            CUIL provisorio y definitivo
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook  className="mr-2"/>
            Obtención de certificados de nacimiento y matrimonio
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook  className="mr-2"/>
            Certificado de antecedentes penales
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook  className="mr-2"/>
            Certificado Renure para empresas
          </p>
          <p className="text-lg lg:text-xl font-color my-1 justify-normal flex items-center">
            <LiaAddressBook  className="mr-2"/>
            Consultoria migratoria
          </p>
        </div>

        <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="mt-4 block text-white italic py-2 lg:inline hover:opacity-75 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          * Contactanos
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Servicios;
