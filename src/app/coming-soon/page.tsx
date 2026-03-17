"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Carga dinámica del componente 3D para evitar SSR issues con WebGL
const ParticleRing = dynamic(
  () => import("@/shared/ui/organisms/ParticleRing").then((m) => m.ParticleRing),
  { ssr: false }
);

export default function ComingSoonPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo 3D con partículas */}
      <ParticleRing />

      {/* Overlay con texto centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm border border-black/20 bg-black/10 text-black dark:border-white/20 dark:bg-white/10 dark:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            En Desarrollo
          </motion.div>

          {/* Título */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-black dark:text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Próximamente
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-md mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Estamos trabajando en ello para ofrecerte la mejor experiencia.
          </motion.p>

          {/* Botón volver */}
          <motion.div
            className="mt-10 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
                bg-white text-black hover:bg-gray-100 hover:scale-105 active:scale-95
                dark:bg-white dark:text-black dark:hover:bg-gray-200
                shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Instrucción de interactividad */}
      <motion.p
        className="absolute bottom-8 left-0 right-0 text-center text-xs tracking-widest uppercase text-black/40 dark:text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Arrastra y haz zoom para explorar
      </motion.p>
    </div>
  );
}
