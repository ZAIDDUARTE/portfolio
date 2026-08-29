"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  maxOffset?: number;
  radius?: number;
};

export function Magnetic({
  children,
  className = "",
  maxOffset = 6,
  radius = 36,
}: MagneticProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;

    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const apply = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      if (
        Math.abs(currentX - targetX) < 0.05 &&
        Math.abs(currentY - targetY) < 0.05
      ) {
        currentX = targetX;
        currentY = targetY;
      }

      inner.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(apply);
    };

    frame = requestAnimationFrame(apply);

    const onMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < radius) {
        const pull = 1 - distance / radius;
        targetX = (deltaX / rect.width) * maxOffset * pull * 2;
        targetY = (deltaY / rect.height) * maxOffset * pull * 2;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    container.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      inner.style.transform = "";
    };
  }, [maxOffset, radius]);

  return (
    <span ref={containerRef} className={`inline-flex ${className}`}>
      <span
        ref={innerRef}
        className="inline-flex items-center will-change-transform motion-reduce:transform-none"
      >
        {children}
      </span>
    </span>
  );
}
