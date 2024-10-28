"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: (
      <h1 className="text-orange-500">
        Apps Moviles
      </h1>
    ),
    des: "Desarrollamos aplicaciones móviles a medida para Android e iOS, garantizando rendimiento y una experiencia de usuario intuitiva.",
    name: "",
    position: "",
    panel: "Tecnología móvil a medida",
    img: "/image/1.jpg",
  },
  {
    title: (
      <h1 className="text-orange-500">
        Apps Web
      </h1>

    ),
    des: "Creamos aplicaciones web dinámicas y seguras, adaptadas a las necesidades de tu negocio, con diseños modernos y funcionales.",
    name: "",
    position: "",
    panel: "Presencia digital inteligente",
    img: "/image/2.jpg",
  },
  {
    title: (
      <h1 className="text-orange-500">
        Bases de Datos
      </h1>
    ),
    des: "Ofrecemos soluciones robustas para la gestión de bases de datos, asegurando la integridad, escalabilidad y seguridad de tus datos.",
    name: "",
    position: "",
    panel: "Gestión de datos segura y eficiente",
    img: "/image/3.jpg",
  },
  {
  title: (
    <h1 className="text-orange-500">
      Optimizacion y Mantenimiento de Software
    </h1>
  ),
    des: "Mejoramos y mantenemos el software de tu empresa, asegurando su rendimiento, seguridad y actualización constante.",
    name: "",
    position: "",
    panel: "Mejora continua para tu tecnología",
    img: "/image/avatar4.jpg",
  },
];

export function EventContent() {
  return (

    <section className="py-8 px-8 lg:py-20" id="accountSection">
      <Typography variant="h3" className="text-center" color="orange">
      Productos Y Servicios
      </Typography>
      <br />
      <Tabs value="Day1" className="mb-8" >
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Day1" className="font-medium">
              1
            </Tab>
            <Tab value="Day2" className="font-medium">
              2
            </Tab>
            <Tab value="Day3" className="font-medium">
              3
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
