// src/components/sections/Services.tsx
"use client";

import { motion } from "framer-motion";
import Carousel from "../ui/Carrousel";

export default function Services() {
  return (
    <section id="services" className="py-16">
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-semibold text-white tracking-wide mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
      <Carousel />
    </section>
  );
}
