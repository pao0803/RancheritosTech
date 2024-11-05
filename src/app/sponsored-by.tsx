//nuestros clientes
"use client";

import Image from "next/image";
import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SponsoredBy() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de imágenes visibles a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    { src: "/image/megatron.jpg", alt: "Megatron" },
    { src: "/image/canacorp.jpg", alt: "canacorp" },
    { src: "/image/logo.jpeg", alt: "krux" },
    
    
    // Agrega más imágenes según lo necesites
  ];

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
      <Typography variant="h1" color="orange" className="mb-6 font-semibold text-3xl">
  NUESTROS CLIENTES
</Typography>
        <Slider {...settings} className="w-full">
          {images.map((image, index) => (
            <div key={index} className="px-4">
              <Image
                width={256}
                height={256}
                src={image.src}
                alt={image.alt}
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SponsoredBy;
