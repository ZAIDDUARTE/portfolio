"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ClipRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Editorial band reveal for major imagery only — clip-path opens from the
 * horizontal centre line. Falls back to a static frame under reduced motion.
 */
export function ClipReveal({ children, className = "" }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // The observed wrapper stays unclipped: a target carrying its own clip-path
  // never reports an intersection, so the reveal would never trigger.
  return (
    <div ref={ref} className={className}>
      <div className={`clip-reveal ${visible ? "clip-reveal-visible" : ""}`}>
        {children}
      </div>
    </div>
  );
}
