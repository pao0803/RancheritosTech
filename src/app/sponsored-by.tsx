// Nuestros Clientes
"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h1" color="orange" className="mb-6 font-medium">
          Nuestros Clientes 
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Aquí mostramos la imagen deseada */}
          <Image
            width={256}
            height={256}
            src="/image/megatron.jpg" // Ruta correcta a la imagen
            alt="Megatron"
            className="w-40"
          />
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
