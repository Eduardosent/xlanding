'use client';

import React from 'react';
import Image from 'next/image';

type SliderProps = {
  images: string[];
  speed?: number;        // segundos para una vuelta completa (default 20)
  height?: number;       // altura de las imágenes en px (default 64)
  direction?: 'left' | 'right';  // dirección del scroll (default 'left')
  gap?: number;          // espacio entre imágenes en px (default 16)
};

export default function Slider({
  images,
  speed = 20,
  height = 64,
  direction = 'left',
  gap = 16,
}: SliderProps) {
  const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right';

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <div
        className="inline-block"
        style={{
          whiteSpace: 'nowrap',
          animation: `${animationName} ${speed}s linear infinite`,
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            style={{
              height: `${height}px`,
              minWidth: '80px',
              marginLeft: `${gap / 2}px`,
              marginRight: `${gap / 2}px`,
              position: 'relative',
            }}
          >
            <Image
              src={src}
              alt={`slider-image-${i}`}
              fill
              style={{
                objectFit: 'contain',
              }}
              sizes={`${height}px`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
