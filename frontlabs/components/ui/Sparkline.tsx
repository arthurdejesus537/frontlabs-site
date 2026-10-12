/** Mini gráfico de área (B: cards de número). Valores relativos; desenho em SVG puro. */
export function Sparkline({ values, className }: { values: number[]; className?: string }) {
  const w = 120;
  const h = 48;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const pts = values.map((v, i) => [(i / (values.length - 1)) * w, h - 4 - ((v - min) / (max - min || 1)) * (h - 8)]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} aria-hidden="true" preserveAspectRatio="none">
      <path d={`${line} L${w} ${h} L0 ${h} Z`} fill="currentColor" opacity="0.18" />
      <path d={line} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" pathLength={1} />
    </svg>
  );
}
