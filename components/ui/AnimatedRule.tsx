"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedRuleProps = {
  className?: string;
};

export function AnimatedRule({ className = "bg-border" }: AnimatedRuleProps) {
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
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`rule-expand h-px ${visible ? "rule-expand-visible" : ""} ${className}`}
    />
  );
}
