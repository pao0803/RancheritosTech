// Preguntas Frecuentes

"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. ¿Qué tipo de servicios ofrece su empresa?",
    desc: "En Rancheritos Tech, ofrecemos desarrollo de software a medida, aplicaciones móviles, sitios web, integración de sistemas y consultoría tecnológica, todo enfocado en soluciones innovadoras y personalizadas.",
  },
  {
    title: "2. ¿Cuál es su proceso de desarrollo de software?",
    desc: "Seguimos un proceso ágil que incluye análisis de requerimientos, diseño, desarrollo, pruebas y lanzamiento, asegurando que el software cumpla con las expectativas del cliente en cada etapa.",
  },
  {
    title: "3.  ¿Qué lenguajes de programación y tecnologías utilizan?",
    desc: "Utilizamos tecnologías modernas como JavaScript, Python, Java, Angular, React, Node.js, y más, seleccionando las mejores herramientas según las necesidades del proyecto.",
  },
  {
    title: "4. ¿Cómo garantizan la calidad del software?",
    desc: "Implementamos pruebas automatizadas y manuales en cada fase del desarrollo, asegurando funcionalidad, rendimiento y seguridad óptimos antes de la entrega.",
  },
  {
    title: "5. ¿Cuál es el costo de desarrollar una aplicación o página web?",
    desc: "El costo varía según la complejidad y los requerimientos específicos del proyecto. Ofrecemos soluciones personalizadas con un enfoque en la relación costo-beneficio para nuestros clientes.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="orange" className="mb-6 font-semibold text-3xl">
            PREGUNTAS FRECUENTES 
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5"
          >
           En Rancheritos Tech, sabemos que puedes tener dudas sobre nuestros servicios y procesos. Aquí encontrarás respuestas a las preguntas más comunes que recibimos, para que puedas conocer mejor cómo trabajamos y qué podemos ofrecerte.
          Si no encuentras lo que buscas, no dudes en contactarnos; estamos aquí para ayudarte.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
