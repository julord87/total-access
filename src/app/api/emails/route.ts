import { sendEmail } from "@/app/utils/email.utils";

export async function POST(request: Request) {
  const sender = {
    name: "Prueba",
    address: "no-reply@example.com",
  };

  const receipents = [
    {
      name: "Prueba",
      address: "no-reply@example.com",
    },
  ];

  try {
    const result = await sendEmail({
      sender,
      receipents,
      subject: "Prueba",
      message: "Juli capo",
    });

    return new Response(JSON.stringify({
      accepted: result.accepted,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    console.error('Error al enviar el correo:', error);  // Imprimir el error
    return new Response(JSON.stringify({
      message: `Unable to send email: ${error.message}`,
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
