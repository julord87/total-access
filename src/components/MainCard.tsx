import Header from "./Header";

const MainCard = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full main-card bg-gray-900 p-6 md:m-4">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="flex flex-col justify-end flex-grow p-6 lg:p-16">
        <h2 className="text-lg lg:text-xl text-white py-3">*Quiénes somos ?</h2>
        <h1 className="text-4xl lg:text-7xl text-white leading-tight">Total Access n' Logistics</h1>
      </div>

      {/* Footer */}
      <footer className="mt-4 text-xs lg:text-sm font-color opacity-45 pl-6 lg:pl-12 pb-5">
        <p>&copy; 2024 Total Access n Logistics. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default MainCard;
