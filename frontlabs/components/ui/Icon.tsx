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
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z",
  image: "M4 5h16v14H4zM4 16l5-5 4 4 2-2 5 5M15 9.5a.5.5 0 101 0 .5.5 0 00-1 0",
  heart: "M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  layers: "M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4",
  rocket: "M12 15l-3-3c1.5-4.5 4.5-7.5 10-8-.5 5.5-3.5 8.5-8 10zM9 12l-4 1 2-4M12 15l-1 4 4-2M6 18l2-2",
  wrench: "M14.5 6.5a4 4 0 015 5L18 13l-7 7a2 2 0 01-3-3l7-7 1.5-1.5z",
  pin: "M12 21s-6-5.5-6-11a6 6 0 0112 0c0 5.5-6 11-6 11zM12 8a2 2 0 100 4 2 2 0 000-4z",
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
