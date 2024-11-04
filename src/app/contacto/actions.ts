// src/app/contacto/actions.ts

"use server";
import nodemailer from "nodemailer";

export async function printTextAction(formData: FormData) {
  const nombre = formData.get("nombre")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const consulta = formData.get("consulta")?.toString() || "";

  const errors: { nombre?: string; email?: string; consulta?: string } = {};

  if (!nombre) {
    errors.nombre = "El nombre es requerido.";
  } else if (nombre.length < 3) {
    errors.nombre = "El nombre debe tener al menos 3 caracteres.";
  }

  if (!email) {
    errors.email = "El correo es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Escriba un correo válido.";
  }

  if (!consulta) {
    errors.consulta = "La consulta es requerida.";
  } else if (consulta.length < 10) {
    errors.consulta = "La consulta debe tener al menos 10 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587, // Cambia a 587
    secure: false, // Usa STARTTLS en lugar de SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const mailOptions = {
    from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nConsulta: ${consulta}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error enviando correo:", error);
    return { errors: { global: "Hubo un problema enviando el mensaje. Inténtalo nuevamente." } };
  }
}
