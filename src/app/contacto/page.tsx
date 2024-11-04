"use client";

import React, { useState } from "react";
import { printTextAction } from "./actions";
import { AiOutlineAlert } from "react-icons/ai";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

interface FormErrors {
  nombre?: string;
  email?: string;
  consulta?: string;
  global?: string;
}

export default function Contacto() {
  const { language, setLanguage } = useLanguageStore();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false); // Para manejar la carga
  const placeholders = {
    nombre: language === "EN" ? "Enter your name" : language === "ZH" ? "输入您的姓名" : "Escriba su nombre",
    email: language === "EN" ? "Enter your email" : language === "ZH" ? "输入您的电子邮件" : "Escriba su correo electrónico",
    consulta: language === "EN" ? "Enter your query" : language === "ZH" ? "输入您的查询" : "Escriba su consulta",
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setLoading(true);
    const response = await printTextAction(new FormData(event.currentTarget));
    
    if (response.errors) {
      setErrors(response.errors);
    } else {
      setSuccessMessage("Mensaje enviado con éxito");
      setErrors({});
      setTimeout(() => {
        window.location.reload(); // Recargar la página
      }, 3500);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-between h-screen lg:h-full w-full main-card bg-gray-900 p-6 lg:m-4">
      <Header language={language} setLanguage={setLanguage} />

      <div className="lg:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight mb-5">
          {language === "EN" ? "Contact" : language === "ZH" ? "联系" : "Contacto"}
        </h1>

        <form onSubmit={handleSubmit}>
          {errors.global && (
            <span className="text-red-700 flex items-center text-xs mt-1">
              <AiOutlineAlert className="mr-2 text-xs" />
              {errors.global}
            </span>
          )}
          <div className="flex flex-col">
            <label htmlFor="nombre" className="font-color">
              {language === "EN" ? "Name" : language === "ZH" ? "姓名" : "Nombre"}
            </label>
            <input
              className={`bg-gray-300 w-1/2 p-2 rounded ${errors.nombre ? "border-red-500" : ""}`}
              id="nombre"
              name="nombre"
              placeholder={placeholders.nombre}
            />
            {errors.nombre && (
              <span className="text-red-700 flex items-center text-xs mt-1">
                <AiOutlineAlert className="mr-2 text-xs" />
                {errors.nombre}
              </span>
            )}

            <label htmlFor="email" className="font-color mt-6">
              {language === "EN" ? "Email" : language === "ZH" ? "电子邮件" : "Email"}
            </label>
            <input
              className={`bg-gray-300 w-1/2 p-2 rounded ${errors.email ? "border-red-500" : ""}`}
              id="email"
              name="email"
              placeholder={placeholders.email}
              type="email"
            />
            {errors.email && (
              <span className="text-red-700 flex items-center text-xs mt-1">
                <AiOutlineAlert className="mr-2 text-xs" />
                {errors.email}
              </span>
            )}

            <label htmlFor="consulta" className="font-color mt-6">
              {language === "EN" ? "Query" : language === "ZH" ? "查询" : "Consulta"}
            </label>
            <textarea
              className={`bg-gray-300 p-2 rounded ${errors.consulta ? "border-red-500" : ""}`}
              id="consulta"
              name="consulta"
              rows={4}
              placeholder={placeholders.consulta}
            />
            {errors.consulta && (
              <span className="text-red-700 flex items-center text-xs mt-1">
                <AiOutlineAlert className="mr-2 text-xs" />
                {errors.consulta}
              </span>
            )}
          </div>

          <button 
            type="submit" 
            className={`text-2xl font-color bg-gray-200 shadow-lg rounded p-2 mt-10 w-1/2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`} 
            disabled={loading} // Deshabilitar el botón si está en carga
          >
            {loading ? "Enviando..." : (language === "EN" ? "Send" : language === "ZH" ? "发送" : "Enviar")}
          </button>

          {successMessage && (
            <p className="text-green-500 text-lg mt-4">{successMessage}</p>
          )}
        </form>
      </div>

      <Footer language={language} />
    </div>
  );
}
