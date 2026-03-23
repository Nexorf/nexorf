export interface Point {
  idx: number;
  position: [number, number, number];
  color: string;
}

// Genera puntos en un anillo interior con colores dados
export function generatePointsInner(
  count: number,
  colors: string[]
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 6 + Math.random() * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 4;
    points.push({
      idx: i,
      position: [x, y, z],
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  return points;
}

// Genera puntos en la nube exterior dispersa
export function generatePointsOuter(
  count: number,
  colors: string[]
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 10 + Math.random() * 5;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 10;
    points.push({
      idx: i + count,
      position: [x, y, z],
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  return points;
}
