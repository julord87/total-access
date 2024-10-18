import { sendEmail } from "@/app/utils/email.utils";

export async function POST(request: Request) {
  const { nombre, email, consulta } = await request.json();

  const sender = {
    name: "Total access & logistics",
    address: "no-reply@example.com", // Dirección del remitente
  };

  // Reemplaza EMAIL_USER con la variable de entorno que has definido
  const emailUser = process.env.EMAIL_USER;

  // Verificar que emailUser esté definido
  if (!emailUser) {
    console.error("EMAIL_USER no está definido en el archivo .env");
    return new Response(JSON.stringify({
      message: "El servidor no está configurado correctamente.",
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const receipents = [
    {
      name: "Soporte", // Puedes ajustar el nombre si lo deseas
      address: emailUser, // Aquí se envía la consulta a EMAIL_USER
    },
  ];

  try {
    // Enviar el correo de la consulta
    const result = await sendEmail({
      sender,
      receipents, // Aquí se utiliza el destinatario correcto
      subject: "Consulta recibida",
      message: `Hola,\n\nHemos recibido una nueva consulta de ${nombre} (${email}):\n${consulta}\n\nGracias por contactarnos.`,
    });

    // Enviar la respuesta automática al remitente
    await sendEmail({
      sender,
      receipents: [ // Aquí también se corrige el nombre
        {
          name: nombre, // Nombre del remitente
          address: email, // Dirección de correo del remitente
        },
      ],
      subject: "Confirmación de consulta",
      message: `Hola ${nombre},\n\nGracias por tu consulta. Nos pondremos en contacto contigo pronto.\n\nSaludos,\nEl equipo.`,
    });

    return new Response(JSON.stringify({
      accepted: result.accepted,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error); // Log para depuración
    return new Response(JSON.stringify({
      message: "Unable to send email this time",
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
