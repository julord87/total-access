// app/layout.tsx
"use client";

import { useEffect } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

// Cargar las fuentes
const nanumMyeongjoRegular = localFont({
  src: "./fonts/NanumMyeongjo-Regular.ttf",
  variable: "--nanum-regular",
  weight: "400",
});
const nanumMyeongjoBold = localFont({
  src: "./fonts/NanumMyeongjo-Bold.ttf",
  variable: "--nanum-bold",
  weight: "700",
});
const nanumMyeongjoExtraBold = localFont({
  src: "./fonts/NanumMyeongjo-ExtraBold.ttf",
  variable: "--nanum-extrabold",
  weight: "800",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageStore();

  useEffect(() => {
    // Configurar el atributo de idioma en el elemento <html> según el idioma del store
    document.documentElement.lang = language === "EN" ? "en" : language === "ZH" ? "zh" : "es";
  }, [language]);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body
        className={`${nanumMyeongjoRegular.variable} ${nanumMyeongjoBold.variable} ${nanumMyeongjoExtraBold.variable} antialiased`}
      >
        <div className="lg:flex h-screen">
          {/* Contenedor izquierdo para el contenido */}
          <div className="lg:flex-1 lg:pb-10 lg:m-4">{children}</div>

          {/* Contenedor derecho para la imagen de fondo */}
          <div className="relative flex-1">
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/bg.png')" }}
            ></div>
          </div>
        </div>
      </body>
    </html>
  );
}
