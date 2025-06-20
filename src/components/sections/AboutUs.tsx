"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Texto */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Sobre Nosotros</h2>
          <p className="text-gray-700 leading-relaxed">
            En <strong>Mi Emprendimiento Digital</strong> diseñamos y desarrollamos
            productos digitales de alto impacto: desde páginas web responsivas y
            aplicaciones móviles hasta soluciones SaaS personalizadas que llevan
            tu negocio al siguiente nivel.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Desarrollo web moderno y veloz</li>
            <li>Apps móviles multiplataforma para iOS y Android</li>
            <li>Consultoría UX/UI y estrategia digital</li>
          </ul>
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
          >
            Hablemos de tu proyecto
          </a>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[360px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.openai.com/thumbnails/58769e0ca60a614856c2eb15274ecd97.jpeg"
              alt="Equipo desarrollando productos digitales"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

