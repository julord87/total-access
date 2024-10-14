import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Cargar la fuente Regular
const nanumMyeongjoRegular = localFont({
  src: "./fonts/NanumMyeongjo-Regular.ttf",
  variable: "--nanum-regular",
  weight: "400",  // Regular
});

// Cargar la fuente Bold
const nanumMyeongjoBold = localFont({
  src: "./fonts/NanumMyeongjo-Bold.ttf",
  variable: "--nanum-bold",
  weight: "700",  // Bold
});

// Cargar la fuente ExtraBold
const nanumMyeongjoExtraBold = localFont({
  src: "./fonts/NanumMyeongjo-ExtraBold.ttf",
  variable: "--nanum-extrabold",
  weight: "800",  // ExtraBold
});

export const metadata: Metadata = {
  title: "Total Access - Soluciones migratiorias",
  description: "Soluciones migratorias y de aduana en Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nanumMyeongjoRegular.variable} ${nanumMyeongjoBold.variable} ${nanumMyeongjoExtraBold.variable} antialiased`}
      >
        <div className="md:flex h-screen">
          {/* Contenedor izquierdo para el contenido */}
          <div className="md:flex-1 md:pb-8">
            {children}
          </div>
          
          {/* Contenedor derecho para la imagen de fondo */}
          <div className="relative flex-1">
            <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg.png')" }}></div>
          </div>
        </div>
      </body>
    </html>
  );
}
