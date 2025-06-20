"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    alt: "Desarrollo Web",
    title: "Desarrollo Web",
    description: "Sitios web modernos, responsivos y optimizados para tu negocio."
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    alt: "Aplicaciones Móviles",
    title: "Apps Móviles",
    description: "Interfaces móviles intuitivas para iOS y Android."
  }
];

const variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 100 : -100 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction < 0 ? 100 : -100 })
};

export default function Carousel() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const next = () => setIndex([(index + 1) % images.length, 1]);
  const prev = () => setIndex([(index - 1 + images.length) % images.length, -1]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          className="relative w-full h-96"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          <div className="absolute bottom-8 left-8 text-white drop-shadow-lg bg-white/10 rounded p-4 max-w-xs backdrop-blur-sm">
            <h3 className="text-2xl font-semibold">{images[index].title}</h3>
            <p className="mt-1 text-sm">{images[index].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botones */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 select-none"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 select-none"
      >
        →
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
