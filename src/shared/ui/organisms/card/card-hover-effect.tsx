"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/shared/utils/utils";

export interface HoverEffectItem {
  title: string;
  description: string;
  hoverDetail?: string;
  link?: string;
  icon?: React.ReactNode;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverEffectItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Matte/pastel rainbow colors
  const rainbowColors = [
    "#f9a8d4", // Pink
    "#fdba74", // Orange
    "#fde047", // Yellow
    "#86efac", // Green
    "#93c5fd", // Blue
    "#c4b5fd", // Purple
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={idx}
          className="relative group block p-1 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Static colored spotlight */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-2xl overflow-hidden z-0"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8
                }}
              >
                <div
                  className="absolute inset-0 w-full h-full opacity-80 transition-colors duration-500"
                  style={{
                    backgroundColor: rainbowColors[idx % rainbowColors.length]
                  }}
                />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Card */}
          <Card hovered={hoveredIndex === idx}>
            <CardTitle icon={item.icon}>{item.title}</CardTitle>
            <CardDescription hovered={hoveredIndex === idx} hoverDetail={item.hoverDetail}>
              {item.description}
            </CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  hovered,
}: {
  className?: string;
  children: React.ReactNode;
  hovered?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] relative z-20 transition-all duration-300",
        hovered ? "border-transparent" : "group-hover:border-slate-700",
        className,
      )}
    >
      <div className="relative z-50 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  icon,
}: {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3 mt-4">
      {icon && (
        <div className="text-neutral-400 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      )}
      <h4
        className={cn(
          "text-zinc-100 font-bold tracking-wide",
          className,
        )}
      >
        {children}
      </h4>
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
  hovered,
  hoverDetail,
}: {
  className?: string;
  children: React.ReactNode;
  hovered?: boolean;
  hoverDetail?: string;
}) => {
  return (
    <div className="relative min-h-[3.5rem] mt-4">
      {/* Default description */}
      <p
        className={cn(
          "text-zinc-400 tracking-wide leading-relaxed text-sm transition-all duration-300 absolute inset-0",
          hovered && hoverDetail
            ? "opacity-0 translate-y-2 pointer-events-none"
            : "opacity-100 translate-y-0",
          className,
        )}
      >
        {children}
      </p>

      {/* Hover reveal detail */}
      {hoverDetail && (
        <p
          className={cn(
            "text-white text-sm leading-relaxed tracking-wide transition-all duration-300 absolute inset-0",
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none",
          )}
        >
          {hoverDetail}
        </p>
      )}
    </div>
  );
};
