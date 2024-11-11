// app/[lang]/layout.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang || "es";
  const metadata: { [key: string]: Metadata } = {
    es: {
      title: "Total Access - Asesoría Jurídica en Movilidad y Normativa Migratoria",
      description:
        "Desde 2007, Total Access ofrece asesoramiento integral en normativa migratoria, relocation e impuestos en Argentina.",
      openGraph: {
        title: "Total Access - Asesoría Jurídica en Movilidad",
        description: "Especialistas en movilidad internacional y normativa migratoria.",
        images: [{ url: "/images/bg.png", width: 1200, height: 630, alt: "Imagen de asesores jurídicos" }],
        locale: "es_AR",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Total Access - Asesoría Jurídica en Movilidad",
        description: "Asesoría integral en normativa migratoria, relocation e impuestos.",
        images: ["/images/bg.png"],
      },
    },
    en: {
      title: "Total Access - Legal Advisory in Mobility and Migration Law",
      description:
        "Since 2007, Total Access has provided comprehensive advice on migration law, relocation, and taxes.",
      openGraph: {
        title: "Total Access - Legal Advisory",
        description: "Experts in international mobility and migration law.",
        images: [{ url: "/images/bg.png", width: 1200, height: 630, alt: "Legal advisory team" }],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Total Access - Legal Advisory in Mobility",
        description: "Comprehensive advisory on migration law, relocation, and taxes.",
        images: ["/images/bg.png"],
      },
    },
    zh: {
      title: "Total Access - 移民法律和迁徙法咨询",
      description:
        "自2007年以来，Total Access 提供全面的移民法、搬迁和税务咨询。",
      openGraph: {
        title: "Total Access - 移民咨询",
        description: "国际移民和迁徙法律的专家",
        images: [{ url: "/images/bg.png", width: 1200, height: 630, alt: "法律咨询团队" }],
        locale: "zh_CN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Total Access - 移民法律咨询",
        description: "全面的移民法、搬迁和税务建议。",
        images: ["/images/bg.png"],
      },
    },
  };

  return metadata[lang];
}

export default function LangLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { lang: string };
  }) {
    const lang = params.lang || "es";
  
    return (
      <html lang={lang}>
        <head>
          {/* Etiquetas alternas para SEO internacional */}
          <link rel="alternate" hrefLang="es" href="https://totalaccess.com.ar/es" />
          <link rel="alternate" hrefLang="en" href="https://totalaccess.com.ar/en" />
          <link rel="alternate" hrefLang="zh" href="https://totalaccess.com.ar/zh" />
          <link rel="alternate" hrefLang="x-default" href="https://totalaccess.com.ar" />
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }