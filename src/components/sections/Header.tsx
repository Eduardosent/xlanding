"use client";

import "@/i18n/i18n"; // Inicializa i18next
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const navKeys = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "sponsors", href: "#sponsors" },
  { key: "contact", href: "#footer" },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Header() {
  const { t, i18n } = useTranslation();

  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState(i18n.language || "en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
      setLang(storedLang);
    } else {
      setLang(i18n.language);
    }
    setReady(true);
  }, [i18n]);

  useEffect(() => {
    if (ready) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  }, [lang, i18n, ready]);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else if (currentScrollY < lastScrollY) {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!ready) return null;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur bg-[#830FC1FF]/60 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
        <div className="text-white text-xl font-bold">MyLogos</div>

        <nav className="hidden md:flex gap-6 items-center">
          {navKeys.map(({ key, href }) => (
            <a
              key={href}
              href={href}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              {t(`header.${key}`)}
            </a>
          ))}

          <div className="flex items-center gap-2 ml-6">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-sm font-semibold px-2 py-1 rounded ${
                  lang === code ? "text-white bg-white/20" : "text-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
