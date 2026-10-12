"use client";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { PreviewCard } from "@/components/ui/PreviewCard";
import styles from "./FeatureTabs.module.css";

/**
 * Abas (A): rótulos de grupo com linha entre eles + painel com a lista de abas
 * à esquerda (ativa escura, inativas cinza) e a mídia à direita.
 * Troca sozinha a cada `intervalMs` só quando está na tela; para de vez quando a pessoa interage.
 * Teclado: setas movem entre abas (ativação automática), Home/End vão às pontas.
 */
export function FeatureTabs() {
  const data = site.tabs;
  const [g, setG] = useState(0);
  const [t, setT] = useState(0);
  const [auto, setAuto] = useState(true);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const groupRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const groups = data.groups;
  const tabs = groups[g]?.tabs ?? [];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => {
      if (t < tabs.length - 1) setT(t + 1);
      else {
        setG((g + 1) % groups.length);
        setT(0);
      }
    }, data.intervalMs);
    return () => window.clearTimeout(id);
  }, [auto, visible, t, g, tabs.length, groups.length, data.intervalMs]);

  const stop = useCallback(() => setAuto(false), []);

  const onTabKey = (e: KeyboardEvent, i: number) => {
    const n = tabs.length;
    const map: Record<string, number> = { ArrowDown: (i + 1) % n, ArrowRight: (i + 1) % n, ArrowUp: (i - 1 + n) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    stop();
    setT(map[e.key]);
    tabRefs.current[map[e.key]]?.focus();
  };
  const onGroupKey = (e: KeyboardEvent, i: number) => {
    const n = groups.length;
    const map: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    stop();
    setG(map[e.key]);
    setT(0);
    groupRefs.current[map[e.key]]?.focus();
  };

  if (!data.enabled) return null;
  const active = tabs[t];
  const panelId = `${data.id}-panel`;

  return (
    <section ref={rootRef} id={data.id} data-section="tabs" className={`section ${styles.section}`} aria-labelledby={data.title ? `${data.id}-title` : undefined} aria-label={data.title ? undefined : groups.map((x) => x.name).join(", ")}>
      <div className="wide">
        {data.title ? (
          <header className={styles.head}>
            {data.label ? <p className="t-label">{data.label}</p> : null}
            <h2 id={`${data.id}-title`} className="t-display">{data.title}</h2>
          </header>
        ) : null}

        {groups.length > 1 ? (
          <div className={styles.groups} role="tablist" aria-label="Grupos">
            {groups.map((grp, i) => (
              <button
                key={grp.name}
                ref={(el) => { groupRefs.current[i] = el; }}
                role="tab"
                type="button"
                aria-selected={i === g}
                aria-controls={panelId}
                tabIndex={i === g ? 0 : -1}
                className={[styles.group, i === g ? styles.groupOn : ""].join(" ")}
                onClick={() => { stop(); setG(i); setT(0); }}
                onKeyDown={(e) => onGroupKey(e, i)}
              >
                {grp.name}
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.panel} id={panelId}>
          <div className={styles.listWrap}>
            <div className={styles.list} role="tablist" aria-orientation="vertical" aria-label={groups[g]?.name}>
              {tabs.map((tab, i) => (
                <div key={tab.title} className={styles.tabItem}>
                  <button
                    ref={(el) => { tabRefs.current[i] = el; }}
                    role="tab"
                    type="button"
                    id={`${data.id}-tab-${i}`}
                    aria-selected={i === t}
                    aria-controls={`${data.id}-tabpanel`}
                    tabIndex={i === t ? 0 : -1}
                    className={[styles.tab, i === t ? styles.tabOn : ""].join(" ")}
                    onClick={() => { stop(); setT(i); }}
                    onKeyDown={(e) => onTabKey(e, i)}
                  >
                    {tab.title}
                  </button>
                  {i === t ? <p className={`t-small ${styles.tabText}`}>{tab.text}</p> : null}
                </div>
              ))}
            </div>
            <button type="button" className={styles.pause} onClick={() => setAuto((a) => !a)} aria-label={auto ? data.pauseLabel : data.playLabel}>
              <Icon name={auto ? "pause" : "play"} size={12} />
            </button>
          </div>
          <div className={styles.stage} role="tabpanel" id={`${data.id}-tabpanel`} aria-labelledby={`${data.id}-tab-${t}`}>
            {active ? (
              <div key={`${g}-${t}`} className={styles.fade}>
                {active.preview ? (
                  <div className={styles.previewWrap}><PreviewCard preview={active.preview} /></div>
                ) : (
                  <Media media={active.media} className={styles.media} sizes="(max-width: 1023px) 100vw, 60vw" />
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
