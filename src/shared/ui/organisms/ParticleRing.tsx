"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { generatePointsInner, generatePointsOuter, Point } from "./ParticleUtils";

// ─── Colores por tema ──────────────────────────────────────────────────────────
const DARK_COLORS = [
  "#ffffff",
  "#e5e5e5",
  "#d4d4d4",
  "#a3a3a3",
  "#737373",
  "#f5f5f5",
];

const LIGHT_COLORS = [
  "#0a0a0a",
  "#171717",
  "#262626",
  "#404040",
  "#525252",
  "#737373",
];

// ─── Punto individual ──────────────────────────────────────────────────────────
function ParticlePoint({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.4}
        color={color}
      />
    </Sphere>
  );
}

// ─── Grupo de puntos con rotación ──────────────────────────────────────────────
function PointCircle({ points }: { points: Point[] }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {points.map((point) => (
        <ParticlePoint
          key={point.idx}
          position={point.position}
          color={point.color}
        />
      ))}
    </group>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────
export function ParticleRing() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;
  const bgColor = isDark ? "#000000" : "#ffffff";

  const points = useMemo(() => {
    const inner = generatePointsInner(200, colors);
    const outer = generatePointsOuter(400, colors);
    return [...inner, ...outer];
  }, [colors]);

  return (
    <Canvas
      camera={{ position: [10, -7.5, -5] }}
      style={{ height: "100vh", width: "100%", background: bgColor }}
    >
      <OrbitControls maxDistance={20} minDistance={10} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} />
      <pointLight position={[-30, 0, -30]} intensity={10.0} />
      <PointCircle points={points} />
    </Canvas>
  );
}
