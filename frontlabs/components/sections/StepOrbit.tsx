"use client";
import { useEffect, useRef } from "react";
import type { StepOrbitContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import styles from "./StepOrbit.module.css";

const wrap = (value: number, length: number) => ((value % length) + length) % length;
const fill = (t: string, n: number, total: number, title: string) =>
  t.replace("{n}", String(n)).replace("{total}", String(total)).replace("{title}", title);
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Órbita de etapas (DESIGN §6.11): cards em retrato num arco 3D raso, com reflexo embaixo,
 * girando sem fim. Um conjunto pequeno de cards é reciclado conforme a posição contínua
 * (nunca uma lista infinita). Arrastar, setas do teclado, botões e pontos movem a órbita;
 * sozinha ela deriva bem devagar. Reduced-motion: parada, e as mudanças são instantâneas.
 */
export function StepOrbit({ data }: { data: StepOrbitContent }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = sectionRef.current;
    const stage = stageRef.current;
    const orbit = orbitRef.current;
    if (!gallery || !stage || !orbit) return;

    const items = data.items;
    const total = items.length;
    const $ = <T extends Element>(sel: string) => gallery.querySelector<T>(sel)!;
    const currentNumber = $<HTMLElement>("[data-current-number]");
    const currentTitle = $<HTMLElement>("[data-current-title]");
    const currentText = $<HTMLElement>("[data-current-text]");
    const announcement = $<HTMLElement>("[data-announcement]");
    const playback = $<HTMLButtonElement>("[data-playback]");
    const dots = [...gallery.querySelectorAll<HTMLButtonElement>("[data-dot]")];

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let position = 0;
    let target: number | null = null;
    let active = -1;
    let spacing = 190;
    let paused = reducedMotion.matches;
    let dragging = false;
    let hovering = false;
    let focused = false;
    let lastX = 0;
    let resumeAt = 0;
    let previousTime = 0;
    let raf = 0;
    let cards: HTMLElement[] = [];

    /* o fundo de cada card: foto borrada ou o gradiente Horizonte */
    const paintFace = (face: HTMLElement, bg: string) => {
      const value = bg === "horizon" ? "var(--bg-horizonte-4x5)" : `url("${bg}") center / cover`;
      if (face.dataset.bg !== bg) { face.dataset.bg = bg; face.style.background = value; }
    };

    const makeCard = () => {
      const card = document.createElement("article");
      card.className = styles.card;
      card.setAttribute("aria-roledescription", "slide");
      card.innerHTML = `
        <h3 class="${styles.cardLabel}"></h3>
        <div class="${styles.face}"><span class="${styles.faceNumber}"></span><span class="${styles.faceTitle}"></span></div>
        <div class="${styles.reflection}" aria-hidden="true"><div class="${styles.face}"><span class="${styles.faceNumber}"></span><span class="${styles.faceTitle}"></span></div></div>`;
      return card;
    };

    const fillCard = (card: HTMLElement, slot: number) => {
      if (card.dataset.slot === String(slot)) return;
      card.dataset.slot = String(slot);
      const index = wrap(slot, total);
      const item = items[index];
      card.setAttribute("aria-label", fill(data.slideLabel, index + 1, total, item.title));
      card.querySelector(`.${styles.cardLabel}`)!.textContent = item.label;
      card.querySelectorAll<HTMLElement>(`.${styles.face}`).forEach((face) => {
        paintFace(face, item.bg);
        face.querySelector(`.${styles.faceNumber}`)!.textContent = pad(index + 1);
        face.querySelector(`.${styles.faceTitle}`)!.textContent = item.title;
      });
    };

    const setActive = (index: number) => {
      if (index === active) return;
      active = index;
      currentNumber.textContent = pad(index + 1);
      currentTitle.textContent = items[index].title;
      currentText.textContent = items[index].text;
      dots.forEach((dot, i) => (i === index ? dot.setAttribute("aria-current", "true") : dot.removeAttribute("aria-current")));
    };

    const render = () => {
      const center = Math.round(position);
      const radius = Math.floor(cards.length / 2);
      const half = stage.clientWidth / 2;
      cards.forEach((card, index) => {
        const slot = center + wrap(index - center + radius, cards.length) - radius;
        fillCard(card, slot);
        card.setAttribute("aria-hidden", String(slot !== center));
        const x = (slot - position) * spacing;
        if (Math.abs(x) > half + spacing) { card.style.visibility = "hidden"; return; }
        card.style.visibility = "visible";
        const curve = x / Math.max(half, 500);
        const depth = curve * curve * 125;
        card.style.transform = `translateX(-50%) translate3d(${x}px, ${-curve * curve * 19}px, ${depth}px) rotateY(${-curve * 17}deg) rotateZ(${curve * 2.2}deg)`;
      });
      setActive(wrap(center, total));
    };

    const resize = () => {
      const w = stage.clientWidth;
      const width = Math.min(168, Math.max(135, w * 0.122));
      spacing = width + Math.min(40, w * 0.027);
      orbit.style.setProperty("--card-width", `${width}px`);
      const size = (Math.ceil(w / (2 * spacing)) + 3) * 2 + 1;
      if (size !== cards.length) {
        orbit.replaceChildren();
        cards = Array.from({ length: size }, () => orbit.appendChild(makeCard()));
      }
      render();
    };

    const goTo = (value: number) => {
      target = value;
      resumeAt = performance.now() + 4500;
      const index = wrap(Math.round(value), total);
      announcement.textContent = fill(data.slideLabel, index + 1, total, items[index].title);
      if (reducedMotion.matches) { position = target; target = null; render(); }
    };
    const step = (dir: number) => goTo(Math.round(target ?? position) + dir);

    const updatePlayback = () => {
      const state = paused ? data.play : data.pause;
      playback.querySelector("[data-playback-label]")!.textContent = state.label;
      playback.setAttribute("aria-label", state.aria);
      playback.dataset.paused = String(paused);
    };

    const tick = (time: number) => {
      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;
      if (!document.hidden) {
        if (target !== null && !dragging) {
          position += (target - position) * (1 - Math.exp(-elapsed / 145));
          if (Math.abs(target - position) < 0.0005) { position = target; target = null; }
          render();
        } else if (!paused && !dragging && !hovering && !focused && time > resumeAt) {
          position += elapsed * 0.000105;
          render();
        }
      }
      raf = requestAnimationFrame(tick);
    };

    /* arrastar */
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true; target = null; lastX = e.clientX;
      stage.classList.add(styles.isDragging);
      stage.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging || !stage.hasPointerCapture(e.pointerId)) return;
      position -= (e.clientX - lastX) / spacing;
      lastX = e.clientX;
      render();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove(styles.isDragging);
      goTo(Math.round(position));
    };
    const onEnter = (e: PointerEvent) => { if (e.pointerType === "mouse") hovering = true; };
    const onLeave = () => { hovering = false; };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      step(e.key === "ArrowLeft" ? -1 : 1);
    };
    const onFocusIn = () => { focused = true; };
    const onFocusOut = (e: FocusEvent) => { focused = gallery.contains(e.relatedTarget as Node | null); };
    const onMotion = () => { paused = reducedMotion.matches; updatePlayback(); };

    const prev = $<HTMLButtonElement>("[data-prev]");
    const next = $<HTMLButtonElement>("[data-next]");
    const onPrev = () => step(-1);
    const onNext = () => step(1);
    const onToggle = () => { paused = !paused; updatePlayback(); };
    const dotHandlers = dots.map((dot, index) => {
      const h = () => goTo(position + (wrap(index - position + total / 2, total) - total / 2));
      dot.addEventListener("click", h);
      return h;
    });

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);
    stage.addEventListener("lostpointercapture", onUp);
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);
    stage.addEventListener("keydown", onKey);
    gallery.addEventListener("focusin", onFocusIn);
    gallery.addEventListener("focusout", onFocusOut);
    prev.addEventListener("click", onPrev);
    next.addEventListener("click", onNext);
    playback.addEventListener("click", onToggle);
    reducedMotion.addEventListener("change", onMotion);
    const ro = new ResizeObserver(resize);
    ro.observe(stage);

    resize();
    updatePlayback();
    raf = requestAnimationFrame((t) => { previousTime = t; tick(t); });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
      stage.removeEventListener("lostpointercapture", onUp);
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("keydown", onKey);
      gallery.removeEventListener("focusin", onFocusIn);
      gallery.removeEventListener("focusout", onFocusOut);
      prev.removeEventListener("click", onPrev);
      next.removeEventListener("click", onNext);
      playback.removeEventListener("click", onToggle);
      reducedMotion.removeEventListener("change", onMotion);
      dots.forEach((dot, i) => dot.removeEventListener("click", dotHandlers[i]));
    };
  }, [data]);

  if (!data.enabled) return null;
  const first = data.items[0];
  return (
    <section id={data.id} data-section="step-orbit" className={styles.wrap} aria-labelledby={`${data.id}-title`}>
      <div ref={sectionRef} className={styles.frame} aria-roledescription="carousel">
        <div className={styles.floor} aria-hidden="true" />
        <header className={styles.heading}>
          <p className={`t-label ${styles.label}`}>{data.label}</p>
          <h2 id={`${data.id}-title`} className={styles.title}>{data.title}</h2>
        </header>

        <div ref={stageRef} className={styles.stage} tabIndex={0} aria-label={data.stageLabel}>
          <div ref={orbitRef} className={styles.orbit} />
        </div>

        <footer className={styles.info}>
          <p className={styles.counter}>
            <span data-current-number className={styles.counterNow}>01</span>
            <span className={styles.counterDivider}>/</span>
            <span>{String(data.items.length).padStart(2, "0")}</span>
          </p>
          <div className={styles.selection}>
            <button type="button" className={styles.arrow} data-prev aria-label={data.prevLabel}>
              <Icon name="chevron-left" size={18} />
            </button>
            <p data-current-title className={styles.currentTitle}>{first.title}</p>
            <button type="button" className={styles.arrow} data-next aria-label={data.nextLabel}>
              <Icon name="chevron" size={18} />
            </button>
          </div>
          <p data-current-text className={styles.currentText}>{first.text}</p>
          <div className={styles.dots} role="group" aria-label={data.dotsLabel}>
            {data.items.map((item, i) => (
              <button key={item.title} type="button" data-dot className={styles.dot} aria-label={fill(data.dotLabel, i + 1, data.items.length, item.title)} aria-current={i === 0 ? "true" : undefined}>
                <span className={styles.dotMark} />
              </button>
            ))}
          </div>
          <p className={`t-label ${styles.hint}`}>
            {data.hint} <span aria-hidden="true">·</span>{" "}
            <button type="button" className={styles.playback} data-playback aria-label={data.pause.aria}>
              <span data-playback-label>{data.pause.label}</span>
            </button>
          </p>
          <span className="sr-only" data-announcement aria-live="polite" />
        </footer>
      </div>
    </section>
  );
}
