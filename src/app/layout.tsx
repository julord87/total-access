// app/layout.tsx
"use client";

import { useEffect } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import localFont from "next/font/local";
import "./globals.css";

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
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    // Configurar el atributo de idioma en el elemento <html> según el idioma del store
    document.documentElement.lang = language === "EN" ? "en" : language === "ZH" ? "zh" : "es";
  }, [language]);

  return (
    <html lang={language.toLowerCase()}>
      <body
        className={`${nanumMyeongjoRegular.variable} ${nanumMyeongjoBold.variable} ${nanumMyeongjoExtraBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
