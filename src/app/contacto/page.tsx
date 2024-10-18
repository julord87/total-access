"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { printTextAction } from "./actions";
import { AiOutlineAlert } from "react-icons/ai";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export default function Contacto() {
  const [state, formAction] = useFormState(printTextAction, {
    errors: { nombre: undefined, email: undefined, consulta: undefined },
  });
  const [result, serResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = () => {
    setLoading(true);
    fetch('/api/emails', {
      method: 'POST',
    })
    .then((response) => response.json())
    .then((data) => serResult(data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }


  return (
    <div className="flex flex-col justify-between h-screen md:h-full w-full main-card bg-gray-900 p-6 md:m-4">
      {/* Header */}
      <Header />

      <div className="sm:p-16">
        <h1 className="text-6xl lg:text-7xl text-white leading-tight mb-5">
          Contacto*
        </h1>

        {/* Contenido principal */}
        <form action={formAction}>
          <div className="flex flex-col">
            {/* Nombre */}
            <label htmlFor="nombre" className="font-color">
              Nombre
            </label>
            <input
              className={`bg-gray-300 w-1/2 p-2 rounded ${
                state.errors.nombre ? "border-red-500" : ""
              }`}
              id="nombre"
              name="nombre"
              placeholder="Escriba su nombre"
            />
            {state.errors.nombre && (
              <span className="text-red-700 flex items-center text-xs mt-1">
                <AiOutlineAlert className="mr-2 text-xs" />
                {state.errors.nombre}
              </span>
            )}

            {/* Email */}
            <label htmlFor="email" className="font-color mt-6">
              Email
            </label>
            <input
              className={`bg-gray-300 w-1/2 p-2 rounded ${
                state.errors.email ? "border-red-500" : ""
              }`}
              id="email"
              name="email"
              placeholder="Escriba su correo electrónico"
              type="email"
            />
            {state.errors.email && (
              <span className="text-red-700 flex items-center text-xs mt-1">
                <AiOutlineAlert className="mr-2 text-xs" />
                {state.errors.email}
              </span>
            )}

            {/* Consulta */}
            <label htmlFor="consulta" className="font-color mt-6">
              Consulta
            </label>
            <textarea
              className={`bg-gray-300 p-2 rounded ${
                state.errors.consulta ? "border-red-500" : ""
              }`}
              id="consulta"
              name="consulta"
              rows={4}
              placeholder="Escriba su consulta"
            />
            {state.errors.consulta && (
              <span className="text-red-700 flex items-center text-xs mt-1">
                <AiOutlineAlert className="mr-2 text-xs" />
                {state.errors.consulta}
              </span>
            )}
          </div>

          <button
            disabled={loading}
            onClick={sendEmail}
            type="submit"
            className="text-2xl font-color bg-gray-200 shadow-lg rounded p-2 mt-10 w-1/2"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
