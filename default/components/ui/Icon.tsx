/* Ícones de traço simples (desenhados aqui; nada copiado das referências). */
const paths: Record<string, string> = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  "arrow-up-right": "M7 17L17 7M9 7h8v8",
  chevron: "M9 6l6 6-6 6",
  "chevron-left": "M15 6l-6 6 6 6",
  "chevron-down": "M6 9l6 6 6-6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  play: "M8 5v14l11-7z",
  pause: "M8 5v14M16 5v14",
  check: "M5 12l5 5 9-11",
  plus: "M12 5v14M5 12h14",
  monitor: "M3 5h18v11H3zM8 20h8M12 16v4",
  act: "M13 3L5 14h6l-1 7 8-11h-6z",
  surface: "M4 18l5-6 4 4 7-9M14 7h6v6",
};

export function Icon({ name, size = 16, className }: { name: keyof typeof paths | string; size?: number; className?: string }) {
  if (name === "x") {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.3l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.9zm-1.1 16.2h1.7L7.4 4.7H5.5z" /></svg>;
  }
  if (name === "instagram") {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>;
  }
  if (name === "linkedin") {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M4.5 8.5h3v11h-3zM6 3.5a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM10 8.5h2.9V10c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.9v6.3h-3v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H10z" /></svg>;
  }
  if (name === "youtube") {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 001.6 12 31 31 0 002 15.8a3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8zM10 15V9l5.2 3z" /></svg>;
  }
  const d = paths[name] ?? paths.arrow;
  const filled = name === "play";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d={d} />
    </svg>
  );
}
