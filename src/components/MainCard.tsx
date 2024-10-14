import Link from "next/link";
import Header from "./Header";
import { Footer } from "./Footer";

const MainCard = () => {
  return (
    <div className="flex flex-col justify-between h-screen md:h-full w-full main-card bg-gray-900 p-6 md:m-4">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight">Total Access n' Logistics</h1>
        <Link href={"/nuestra_firma"} className="text-lg lg:text-xl text-white py-3 mt-2">*Quiénes somos ?</Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainCard;
