'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FooterBgWaves({ 
  color = '#000000', 
  intensity = 10,  // Nueva prop para controlar intensidad
  children, 
}: { 
  color?: string, 
  intensity?: number, 
  children?: ReactNode 
}) {
  // Para que la wave no se vaya a valores raros, limitamos intensidad entre 10 y 50 (ajustable)
  const i = Math.min(Math.max(intensity, 10), 50)

  // Se usan i para variar la curva arriba y abajo de la onda
  // Base 80 es la "altura" fija
  // Restamos o sumamos i para controlar la amplitud
  const d1 = `M0,80 C150,${80 - i} 450,${80 + i} 600,80 S1050,${80 - i} 1200,80 L1200,100 L0,100 Z`
  const d2 = `M0,80 C150,${80 + i} 450,${80 - i} 600,80 S1050,${80 + i} 1200,80 L1200,100 L0,100 Z`

  return (
    <div className="relative w-full" style={{ backgroundColor: color }}>
      {/* Onda animada con Framer Motion */}
      <div className="absolute top-0 left-0 w-full h-[100px] -translate-y-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            fill={color}
            initial={{ d: d1 }}
            animate={{ d: [d2, d1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* Contenido del footer */}
      {children}
    </div>
  )
}
