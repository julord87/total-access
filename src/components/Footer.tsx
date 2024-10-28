"use client";

import React from "react";

interface FooterProps {
  language: string;
}

export const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-4 text-xs lg:text-sm font-color opacity-45 pl-6 lg:pl-12 pb-5">
      <p>
        {language === "EN"
          ? `© ${currentYear} Total Access & Logistics. All rights reserved.`
          : language === "CH"
          ? `© ${currentYear} Total Access & Logistics. 版权所有。`
          : `© ${currentYear} Total Access & Logistics. Todos los derechos reservados.`}
      </p>
    </footer>
  );
};
