"use client";

import { useState } from "react";
import { Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";
import EventContentCard from "@/components/event-content-card";

// Datos para cada tarjeta en cada pestaña
const EVENT_CONTENT = [
  {
    title: <h1 className="text-orange-500 mb-6 font-semibold text-2xl">APLICACIONES MÓVILES</h1>,
    des: "Desarrollamos aplicaciones móviles a medida para Android e iOS, garantizando rendimiento y una experiencia de usuario intuitiva.",
    panel: "Tecnología móvil a medida",
    img: "/image/1.jpg",
  },
  {
    title: <h1 className="text-orange-500 mb-6 font-semibold text-2xl">APLICACIONES WEB</h1>,
    des: "Creamos aplicaciones web dinámicas y seguras, adaptadas a las necesidades de tu negocio, con diseños modernos y funcionales.",
    panel: "Presencia digital inteligente",
    img: "/image/2.jpg",
  },
  {
    title: <h1 className="text-orange-500 mb-6 font-semibold text-2xl">BASES DE DATOS</h1>,
    des: "Ofrecemos soluciones robustas para la gestión de bases de datos, asegurando la integridad, escalabilidad y seguridad de tus datos.",
    panel: "Gestión de datos segura y eficiente",
    img: "/image/3.jpg",
  },
  {
    title: <h1 className="text-orange-500 mb-6 font-semibold text-2xl">OPTIMIZACIÓN Y MANTENIMIENTO DE SOFTWARE</h1>,
    des: "Mejoramos y mantenemos el software de tu empresa, asegurando su rendimiento, seguridad y actualización constante.",
    panel: "Mejora continua para tu tecnología",
    img: "/image/4.jpg",
  },
];

export function EventContent() {
  const [activeTab, setActiveTab] = useState("Day1");

  // Objeto que enlaza cada pestaña con su contenido correspondiente
  const tabContent = {
    Day1: EVENT_CONTENT[0],
    Day2: EVENT_CONTENT[1],
    Day3: EVENT_CONTENT[2],
    Day4: EVENT_CONTENT[3],
  };

  return (
    <section className="py-8 px-8 lg:py-20" id="accountSection">
      <Typography variant="h3" className="text-center mb-6 font-semibold text-3xl" color="orange">
        PRODUCTOS Y SERVICIOS
      </Typography>
      <br />
      <Tabs value={activeTab} onChange={(e) => setActiveTab(e)}>
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Day1" onClick={() => setActiveTab("Day1")} className="font-medium">1</Tab>
            <Tab value="Day2" onClick={() => setActiveTab("Day2")} className="font-medium">2</Tab>
            <Tab value="Day3" onClick={() => setActiveTab("Day3")} className="font-medium">3</Tab>
            <Tab value="Day4" onClick={() => setActiveTab("Day4")} className="font-medium">4</Tab>
          </TabsHeader>
        </div>
      </Tabs>
        {/* Renderizar el contenido basado en la pestaña activa */}
        {tabContent[activeTab] && <EventContentCard {...tabContent[activeTab]} />}
    </section>
  );
}

export default EventContent;
