// Estadisticas
"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "100+",
    title: "Proyectos completados con exito",
  },
  {
    count: "10",
    title: "Clientes satisfechos en diferentes sectores",
  },
  {
    count: "4",
    title: "Años de experiencia colectiva en el desarrollo de software",
  },
  {
    count: "3",
    title: "Soluciones personalizadas lanzadas en los ultimos meses",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h1" color="orange" className="mb-6 font-medium">
          Nuestras Estadisticas
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
         
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full lg:w-9/12"
        >
          En Rancheritos Tech, estamos comprometidos con la innovación y la calidad en el desarrollo de software.
          Estos son algunos de nuestros logros que destacan nuestra trayectoria y experiencia en la industria.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
