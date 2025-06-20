'use client';

import { motion } from 'framer-motion';

export default function HeroBgGlow() {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[700px] h-[700px] bg-fuchsia-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"
      animate={{
        opacity: [0.1, 1, 0.1, 1, 0.1],  // opacidad que sube y baja rápido para parpadeo
        scale: [1, 1.2, 1, 1.2, 1],      // escala también hace "pulse"
      }}
      transition={{
        duration: 3,        // duración total del ciclo
        repeat: Infinity,   // repetir infinitamente
        ease: 'easeInOut',  // suavizado para que no sea brusco del todo pero sí notorio
      }}
    />
  );
}
