"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe } from "@/shared/ui/organisms/Globe";
import { ArrowDown } from "lucide-react";
import NexorfLogo from "@/shared/ui/molecules/NexorfLogo";

type HeroContentProps = {
  isVisible: boolean;
  onScrollToContact: () => void;
};

export default function HeroContent({ isVisible, onScrollToContact }: HeroContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax: el globo baja suavemente al hacer scroll
  const { scrollY } = useScroll();
  const globeY = useTransform(scrollY, [0, 600], [0, 120]);
  const globeOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Contenido principal ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-0"
        style={{ opacity: contentOpacity, y: contentY }}
        initial={{ opacity: 0, y: 32 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Logo flotante con sombra */}
        <motion.div
          className="mb-6 relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Sombra difusa que "proyecta" el logo sobre el globo */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 dark:bg-white/10 rounded-full blur-md" />
          <NexorfLogo
            size="extraLarge"
            className="drop-shadow-[0_16px_32px_rgba(0,0,0,0.30)] dark:drop-shadow-[0_16px_32px_rgba(255,255,255,0.12)] transition-colors duration-500"
          />
        </motion.div>

        {/* Texto "Nexorf" con gradiente */}
        <h1
          className="
            text-7xl md:text-8xl lg:text-9xl font-bold leading-none whitespace-pre-wrap
            bg-gradient-to-b from-black to-black/40 bg-clip-text text-transparent
            dark:from-white dark:to-white/20
            tracking-tight select-none
          "
        >
          Nexorf
        </h1>

        {/* Subtítulo */}
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-sm tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Ingeniería de Software Personalizada
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3 items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <button
            onClick={onScrollToContact}
            className="px-7 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Solicita una cotización
          </button>
          <Link
            href="/services"
            className="px-7 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
          >
            Ver servicios
          </Link>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* ── Globe ── debajo del texto, con parallax y fade en scroll */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] pointer-events-none"
        style={{ y: globeY, opacity: globeOpacity }}
      >
        <Globe className="w-full h-full" />
      </motion.div>

      {/* ── Fade-out inferior hacia la siguiente sección ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-black to-transparent z-20" />
    </section>
  );
}
