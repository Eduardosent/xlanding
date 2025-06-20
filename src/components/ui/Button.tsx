'use client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  bg?: string;
  textColor?: string;
  borderRadius?: string;
  border?: string;
  className?: string;
  hoverScale?: number;
  iconRight?: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean; // <-- nueva prop
};

export default function Button({
  children,
  href,
  variant = 'primary',
  bg,
  textColor,
  borderRadius = 'rounded-lg',
  border,
  className,
  hoverScale = 1.05,
  iconRight,
  onClick,
  fullWidth = false, // valor por defecto false (tamaño mínimo)
}: ButtonProps) {
  const baseStyles = {
    primary: 'bg-white text-blue-900 font-semibold',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  };

  const Comp = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: hoverScale }} whileTap={{ scale: 0.95 }}>
      <Comp
        href={href}
        onClick={onClick}
        className={cn(
          'flex items-center justify-center px-8 py-4 transition-all',
          baseStyles[variant],
          bg && `bg-[${bg}]`,
          textColor && `text-[${textColor}]`,
          borderRadius,
          border && `border-[${border}]`,
          fullWidth ? 'w-full' : 'w-auto',  // <--- aquí controla el ancho
          className
        )}
      >
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </Comp>
    </motion.div>
  );
}
