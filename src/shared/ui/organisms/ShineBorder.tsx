"use client";

import { cn } from "@/shared/utils/utils";
import { CSSProperties } from "react";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  shineColor?: string | string[];
  duration?: number;
  borderWidth?: number;
}

/**
 * ShineBorder — Magic UI
 * Animación de borde brillante que rota alrededor del contenedor.
 */
export function ShineBorder({
  children,
  className,
  shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  duration = 14,
  borderWidth = 1,
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor.join(", ") : shineColor;

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden",
        className
      )}
      style={
        {
          "--shine-duration": `${duration}s`,
          "--shine-colors": colors,
          "--border-width": `${borderWidth}px`,
        } as CSSProperties
      }
    >
      {/* Borde animado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          padding: borderWidth,
          background: `conic-gradient(from var(--angle, 0deg), transparent 60%, ${colors})`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: `shine-border-rotate ${duration}s linear infinite`,
        }}
      />
      {children}

      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes shine-border-rotate {
          to { --angle: 360deg; }
        }
      `}</style>
    </div>
  );
}
