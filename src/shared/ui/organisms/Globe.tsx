"use client";

import { useEffect, useRef } from "react";
import createGlobe, { COBEOptions } from "cobe";
import { useTheme } from "next-themes";
import { cn } from "@/shared/utils/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [-0.1807, -78.4678], size: 0.1 }, // Quito Ecuador
    { location: [40.7128, -74.006], size: 0.05 },
    { location: [51.5074, -0.1278], size: 0.05 },
    { location: [35.6762, 139.6503], size: 0.05 },
    { location: [-33.8688, 151.2093], size: 0.05 },
    { location: [48.8566, 2.3522], size: 0.05 },
    { location: [37.7749, -122.4194], size: 0.05 },
  ],
};

interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

export function Globe({ className, config }: GlobeProps) {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const isDark = resolvedTheme === "dark";

    const options: COBEOptions = {
      ...GLOBE_CONFIG,
      ...config,
      dark: isDark ? 1 : 0,
      baseColor: isDark ? [0.1, 0.1, 0.15] : [0.95, 0.95, 1],
      glowColor: isDark ? [0.15, 0.15, 0.2] : [0.9, 0.9, 0.95],
      width: canvasRef.current.offsetWidth * 2,
      height: canvasRef.current.offsetWidth * 2,
      onRender: (state) => {
        phiRef.current += 0.003;
        state.phi = phiRef.current;
        state.width = canvasRef.current!.offsetWidth * 2;
        state.height = canvasRef.current!.offsetWidth * 2;
      },
    };

    globeRef.current = createGlobe(canvasRef.current, options);

    return () => {
      globeRef.current?.destroy();
    };
  }, [resolvedTheme, config]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("size-full", className)}
      style={{ contain: "layout paint size" }}
    />
  );
}
