'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroBgLights from '@/app/templates/hero/HeroBgLights';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 py-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            maskImage: 'linear-gradient(180deg, rgba(255,255,255,0.9), transparent)',
          }}
        />
      </div>

      <HeroBgLights />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
          >
            🚀 Lanzamos tu negocio en linea
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Transforma tu negocio con{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
            >
              tecnología inteligente
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xl text-white/80 max-w-2xl mx-auto"
          >
            Soluciones diseñadas para impulsar tu productividad y aumentar tus ingresos. Más de 5,000 empresas ya confían en nosotros.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
   <Button
          href="#contacto"
          variant="primary"
          iconRight={<ArrowRight className="h-5 w-5" />}
        >
          Comenzar ahora
        </Button>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                variant="outline"
                className="text-white w-full hover:bg-white/20"
              >
                <a href="#demo">Ver demo</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-4xl h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg text-white/50">[Tu dashboard/hero image aquí]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
