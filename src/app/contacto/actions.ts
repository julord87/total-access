"use server";

export async function printTextAction(previousState: any, formData: FormData) {
  const nombre = String(formData.get("nombre"));
  const email = String(formData.get("email"));
  const consulta = String(formData.get("consulta"));

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

  return { errors };
}
