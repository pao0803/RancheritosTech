//inicio
"use client";
import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import fondo from "/public/image/fondo.jpg";

function Hero() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/image/fondo1.jpg')" }}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2"></Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            RANCHERITOS TECH
          </Typography>
          <Typography variant="lead" color="white" className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl">
            &quot;DESARROLLANDO EL FUTURO CON LA ESENCIA DE LO NUESTRO&quot;
          </Typography>
          <div className="flex items-center gap-4">
            <Button variant="gradient" color="white">
              ¿QUIÉNES SOMOS?
            </Button>
            <IconButton className="rounded-full bg-white p-6">
              <PlayIcon className="h-4 w-4 text-gray-900" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

