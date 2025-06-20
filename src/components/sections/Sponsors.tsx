// src/components/sections/Sponsors.tsx
"use client";

import { motion } from "framer-motion";
import Slider from "../ui/Slider";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16">
      <div className="h-24" />
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-semibold text-white tracking-wide mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Sponsors
      </motion.h2>

      <Slider
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
          "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
          "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        ]}
        gap={120}
      />
      <div className="h-20" />
    </section>
  );
}
