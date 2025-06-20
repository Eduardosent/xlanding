'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const bigLightColors = [
  'rgba(255, 99, 71, 0.8)',     // tomato red
  'rgba(30, 144, 255, 0.8)',    // dodger blue
  'rgba(255, 215, 0, 0.8)',     // gold
  'rgba(147, 112, 219, 0.8)',   // medium purple
  'rgba(60, 179, 113, 0.8)',    // medium sea green
];

const bigLightCount = 10;

export default function HeroBgBigLights() {
  const [lights, setLights] = useState<
    { id: number; color: string; size: number; x: number; y: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generatedLights = Array.from({ length: bigLightCount }, (_, i) => ({
      id: i,
      color: bigLightColors[i % bigLightColors.length],
      size: 30 + Math.random() * 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
    }));
    setLights(generatedLights);
  }, []);

  if (lights.length === 0) return null;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    >
      {lights.map(({ id, color, size, x, y, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
          transition={{
            duration: 6,
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
            boxShadow: `0 0 ${size / 2}px ${color}`,
          }}
        />
      ))}
    </div>
  );
}
