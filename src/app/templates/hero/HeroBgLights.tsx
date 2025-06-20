'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const starColors = [
  'rgba(255, 255, 255, 0.6)',
  'rgba(255, 200, 200, 0.5)',
  'rgba(200, 200, 255, 0.5)',
  'rgba(200, 255, 200, 0.5)',
  'rgba(255, 255, 180, 0.5)',
];

const starCount = 50;

export default function HeroBgLights() {
  const [stars, setStars] = useState<
    { id: number; color: string; size: number; x: number; y: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Genera estrellas con posiciones, tamaños, colores y delays aleatorios
    const generatedStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      color: starColors[i % starColors.length],
      size: 3 + Math.random() * 6,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5, // delay para el parpadeo
    }));
    setStars(generatedStars);
  }, []);

  if (stars.length === 0) return null;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    >
      {stars.map(({ id, color, size, x, y, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0.1, scale: 0.8 }}
          animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
          style={{
            position: 'absolute',
            top: `${y}%`,
            left: `${x}%`,
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
            filter: 'blur(2px)',
          }}
        />
      ))}
    </div>
  );
}
