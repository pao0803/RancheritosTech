import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Inicio", "Quienes somos", "Mision y vision", "Productos"];

export function Footer() {
  const [formData, setFormData] = useState({
    nombre: "", // Cambié name a nombre
    apellidos: "", // Añadí apellidos
    correo: "", // Añadí correo
    telefono: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://backend-integradora.vercel.app/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Envía los datos del formulario en formato JSON
      });

      if (response.ok) {
        console.log("Formulario enviado exitosamente");
        // Puedes mostrar un mensaje de éxito o resetear el formulario
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <footer className="p-8 bg-gray-100 text-gray-700" id="formulario">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Información del footer y links */}
          <div>
            <Typography variant="h6" color="gray">
              Contáctanos
            </Typography>
            <ul className="my-4">
              {LINKS.map((link) => (
                <li key={link} className="my-1">
                  <a href="#" className="text-orange-500 hover:text-blue-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <Typography color="gray" className="text-sm">
              &copy; {CURRENT_YEAR} Rancheritos Tech. Todos los derechos reservados.
            </Typography>
          </div>

          {/* Formulario de contacto */}
          <div>
            <Typography variant="h1" color="orange" className="text-center mb-6 font-semibold text-3xl">
              CONTÁCTANOS
            </Typography>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <Input
                type="text"
                label="Nombre"
                name="nombre" // Cambié name a nombre
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                type="text"
                label="Apellidos"
                name="apellidos" // Añadí campo apellidos
                value={formData.apellidos}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                type="email"
                label="Correo"
                name="correo" // Añadí campo correo
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                type="tel"
                label="Teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Textarea
                label="Mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Button type="submit" color="orange" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
