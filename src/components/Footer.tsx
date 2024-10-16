import React from "react";

export const Footer = () => {
  return (
    <footer className=" text-centermt-4 text-xs lg:text-sm font-color opacity-45 pl-6 lg:pl-12 pb-5">
      <p>
        {`© ${new Date().getFullYear()} Total Access n Logistics. Todos los derechos reservados.`}
      </p>
    </footer>
  );
};
