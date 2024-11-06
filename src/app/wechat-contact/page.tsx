"use client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useLanguageStore } from "@/store/useLanguageStore";

const weChatId = "WeChatID";

const WechatContact = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex text-md flex-col justify-between h-screen lg:h-full w-full main-card bg-gray-900 p-2 lg:m-2">
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Contenido principal */}
      <div className="text-white p-6 mx-auto max-w-2xl text-center space-y-4 text-sm">
        <h1 className="text-2xl font-bold">
          {language === "ZH" ? "联系我" : language === "ES" ? "Contáctanos" : "Contact Us"}
        </h1>

        <p className="text-lg lg:text-md font-color my-3 justify-normal">
          {language === "ZH"
            ? "感谢您对我们的服务感兴趣！您可以通过以下方式添加我们为好友，并随时咨询我们的服务信息："
            : language === "ES"
            ? "¡Gracias por su interés en nuestros servicios! Puede agregarnos en WeChat usando las siguientes opciones para realizar consultas sobre nuestros servicios."
            : "Thank you for your interest in our services! You can add us on WeChat using the following options to inquire about our services."}
        </p>

        {/* Instrucciones para añadir por ID */}
        <div className="text-left">
          <h2 className="font-semibold">
            {language === "ZH" ? "1. 添加微信号" : language === "ES" ? "1. Agregar por ID de WeChat" : "1. Add via WeChat ID"}
          </h2>
          <p className="text-lg lg:text-md font-color my-3 justify-normal">
            {language === "ZH"
              ? `请在微信中搜索我们的微信号：${weChatId}，并发送好友请求。添加好友时，请注明您的需求，以便我们更好地为您服务。`
              : language === "ES"
              ? `Busque nuestro ID de WeChat: ${weChatId} en la aplicación y envíe una solicitud de amistad. Por favor, mencione su solicitud para brindarle una mejor asistencia.`
              : `Search for our WeChat ID: ${weChatId} in the WeChat app and send a friend request. Please mention your request for better assistance.`}
          </p>
        </div>

        {/* Instrucciones para escanear el código QR */}
        <div className="text-left">
          <h2 className="font-semibold">
            {language === "ZH" ? "2. 扫描二维码" : language === "ES" ? "2. Escanee el código QR" : "2. Scan QR Code"}
          </h2>
          <p className="text-lg lg:text-md font-color my-3 justify-normal">
            {language === "ZH"
              ? "您也可以通过扫描下方二维码直接添加我们。打开微信，点击右上角的“+”图标，选择“扫一扫”，并扫描下方的二维码。"
              : language === "ES"
              ? "También puede agregarnos escaneando el código QR a continuación. Abra WeChat, toque el ícono “+” en la esquina superior derecha, seleccione 'Escanear' y escanee el código QR."
              : "You can also add us by scanning the QR code below. Open WeChat, tap the “+” icon in the top right, select 'Scan', and scan the QR code below."}
          </p>
        </div>

        {/* Imagen del código QR */}
        <div className="flex justify-center py-2">
          <Image
            src={"/images/wechat-qr-code.png"}
            alt="WeChat QR Code"
            width={200}
            height={200}
            className="rounded shadow-lg"
          />
        </div>

        {/* Nota adicional */}
        <p className="text-sm font-color">
          {language === "ZH"
            ? "如果您有任何问题，请随时与我们联系。我们期待着为您提供帮助！"
            : language === "ES"
            ? "Si tiene alguna pregunta, no dude en contactarnos. ¡Estamos aquí para ayudar!"
            : "If you have any questions, feel free to contact us. We're here to help!"}
        </p>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default WechatContact;
