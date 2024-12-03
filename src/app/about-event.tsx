//mision y vision
"use client";
import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "MISIÓN",
    description:
      "Crear soluciones de software innovadoras y accesibles que impulsen el crecimiento y la eficiencia de nuestros clientes.",
    subTitle: "",
  },
  {
    title: "VISIÓN",
    description:
      "Ser reconocidos como una empresa líder en el desarrollo de soluciones tecnológicas innovadoras, impulsando el crecimiento de nuestros clientes a través de software eficiente y de alta calidad.",
    subTitle: "",
  },
];

export function AboutEvent() {
  return (
    <section
      className="container mx-auto flex flex-col items-center px-4 py-10"
      id="misionyvision"
    >
      <Typography
        variant="h3"
        className="text-center mb-6 font-semibold text-3xl"
        color="orange"
      >
        QUIENES SOMOS
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !"
      >
        Somos Rancheritos Tech, una empresa dedicada al desarrollo de software
        y a la implementación de tecnologías de información (TIC&apos;s) para
        grandes y medianas empresas.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="REDES"
            subTitle=""
            description="En Rancheritos Tech, creemos que las grandes ideas nacen de grandes conexiones. Fomentamos la creación de redes entre profesionales de la industria tecnológica, facilitando colaboraciones estratégicas, mentoría y eventos para fortalecer la comunidad tecnológica."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;



