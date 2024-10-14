import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const NuestraFirma = () => {
  return (
    <div className="flex flex-col justify-between h-screen md:h-full w-full main-card bg-gray-900 p-6 md:m-4">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight">
          Somos una consultora /
        </h1>
        <p className="text-lg lg:text-xl font-color my-3 justify-normal">
          dedicada a la asesoría jurídica en materia de movilidad. Orientados a
          la atención al cliente, desde el 2007 ofrecemos asesoramiento integral
          sobre normativa migratoria internacional, relocation e impuestos y
          seguridad social. Nuestra fortaleza radica en la diversidad de
          profesionales que componen nuestro Equipo: perfiles especializados en
          cada materia, para asegurar un abordaje amplio y personalizado a su
          propia necesidad. Gracias a la constante capacitación y formación de
          nuestros miembros, logramos ofrecerte una experiencia de servicio bajo
          los más altos estándares de calidad.
        </p>
        <Link
          href="https://wa.me/5491138248813?text=Hola%21%20Quisiera%20realizar%20una%20consulta%20sobre%20sus%20servicios."
          className="mt-2 block text-white italic py-2 lg:inline hover:opacity-75 text-sm"
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

export default NuestraFirma;
