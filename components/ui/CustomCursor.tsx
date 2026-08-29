"use client";

import { useEffect, useRef } from "react";
import { hasFinePointer, lerp, prefersReducedMotion } from "@/lib/motion";

/**
 * Cursor presets. An element opts in with `data-cursor="view"` and may override
 * the rendered text with `data-cursor-label="VIEW 01"`.
 */
const CURSOR_LABELS: Record<string, string> = {
  view: "VIEW",
  explore: "EXPLORE",
  about: "ABOUT",
  open: "OPEN",
  talk: "TALK",
  save: "SAVE",
  visit: "VISIT",
  back: "BACK",
  play: "PLAY",
  next: "NEXT",
};

type CursorState = { key: string; label: string } | null;

function resolveCursorState(target: EventTarget | null): CursorState {
  if (!(target instanceof Element)) return null;

  const host = target.closest("[data-cursor]");
  if (!host) return null;

  const preset = host.getAttribute("data-cursor");
  if (!preset || !(preset in CURSOR_LABELS)) return null;

  const label = host.getAttribute("data-cursor-label") ?? CURSOR_LABELS[preset];
  return { key: `${preset}:${label}`, label };
}

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const expanded = expandedRef.current;
    const label = labelRef.current;
    const root = rootRef.current;
    if (!dot || !ring || !expanded || !label || !root) return;

    document.documentElement.classList.add("custom-cursor-active");

    const pointer = { x: 0, y: 0 };
    const trailing = { x: 0, y: 0 };
    let activeKey: string | null = null;
    let visible = false;
    let frame = 0;

    const setState = (state: CursorState) => {
      const nextKey = state?.key ?? null;
      if (activeKey === nextKey) return;
      activeKey = nextKey;

      const isExpanded = Boolean(state);
      dot.style.opacity = isExpanded ? "0" : "1";
      ring.style.opacity = isExpanded ? "0" : "1";
      expanded.style.opacity = isExpanded ? "1" : "0";
      expanded.style.transform = isExpanded
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0.82)";

      if (state) label.textContent = state.label;
    };

    const render = () => {
      trailing.x = lerp(trailing.x, pointer.x, 0.14);
      trailing.y = lerp(trailing.y, pointer.y, 0.14);

      dot.style.transform = `translate(${pointer.x}px, ${pointer.y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${trailing.x}px, ${trailing.y}px) translate(-50%, -50%)`;
      expanded.style.left = `${pointer.x}px`;
      expanded.style.top = `${pointer.y}px`;
      root.style.opacity = visible ? "1" : "0";

      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      visible = true;
      setState(resolveCursorState(event.target));
    };

    const onOver = (event: MouseEvent) => setState(resolveCursorState(event.target));

    const onLeave = () => {
      visible = false;
      setState(null);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="custom-cursor pointer-events-none fixed inset-0 z-[9999] opacity-0"
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="custom-cursor-dot absolute left-0 top-0 h-[7px] w-[7px] rounded-full bg-accent will-change-transform"
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring absolute left-0 top-0 h-8 w-8 rounded-full border border-accent/35 will-change-transform"
      />
      <div
        ref={expandedRef}
        className="custom-cursor-expanded absolute flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 scale-[0.82] flex-col items-center justify-center rounded-full bg-ink text-light opacity-0 will-change-transform"
      >
        <span
          ref={labelRef}
          className="whitespace-nowrap text-[9px] font-medium tracking-[0.16em]"
        />
        <span className="mt-1 text-[11px] leading-none">↗</span>
      </div>
    </div>
  );
}
