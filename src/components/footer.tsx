import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Inicio", "Quienes somos", "Mision y vision", "Productos"];

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Aquí puedes agregar la lógica para enviar los datos a un servidor o correo electrónico
    
  };

  return (
    <footer className="p-8 bg-gray-100 text-gray-700" id="formulario">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Información del footer y links */}
          <div>
            <Typography variant="h6" color="gray">
              Contactanos
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
                label="Nombre "
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                type="tel"
                label="Telefono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Textarea
                label="Mensaje"
                name="message"
                value={formData.message}
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
