"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconCloud } from "@/shared/ui/organisms/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="py-24 px-4"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestro Stack Tecnológico
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-900" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trabajamos con las tecnologías más modernas y confiables del ecosistema
            de desarrollo de software para garantizar soluciones de calidad.
          </p>
        </motion.div>

        {/* Icon Cloud */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-2xl h-[500px]">
            <IconCloud iconSlugs={slugs} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
