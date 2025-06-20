"use client";

import { motion } from "framer-motion";
import FooterBgWaves from "@/app/templates/footer/FooterBgWaves";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Footer() {
  return (
    <footer className="relative text-white">
      <FooterBgWaves
        color="rgba(255, 255, 255, 0.1)"
        children={
          <motion.div
            className="relative z-10 pt-20 pb-16 px-6 sm:px-10 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
              {[
                {
                  title: "Mi Empresa",
                  content: (
                    <p className="text-white/80">
                      Transformando ideas en productos digitales con impacto global.
                    </p>
                  )
                },
                {
                  title: "Navegación",
                  links: ["Inicio", "Servicios", "Equipo", "Contacto"],
                  prefix: "#"
                },
                {
                  title: "Recursos",
                  links: ["Blog", "Ayuda", "Términos", "Privacidad"],
                  prefix: "#"
                },
                {
                  title: "Síguenos",
                  icons: [
                    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", color: "hover:text-blue-500" },
                    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", color: "hover:text-sky-400" },
                    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", color: "hover:text-blue-400" },
                    { icon: <Github className="h-5 w-5" />, href: "https://github.com", color: "hover:text-gray-400" }
                  ]
                }
              ].map((section, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <h3 className="text-white font-semibold mb-3">{section.title}</h3>
                  {section.content}
                  {section.links && (
                    <ul className="space-y-2">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                          <a href={`${section.prefix}${link.toLowerCase()}`} className="hover:underline text-white/80">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.icons && (
                    <div className="flex space-x-4">
                      {section.icons.map((item, idx) => (
                        <motion.a
                          key={idx}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={item.color}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.icon}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div className="my-10 border-t border-white/10" variants={fadeInUp}></motion.div>

            <motion.p
              className="text-center text-white/60 text-sm"
              variants={fadeInUp}
            >
              © 2025 Mi Empresa. Todos los derechos reservados.
            </motion.p>
          </motion.div>
        }
      />
    </footer>
  );
}
