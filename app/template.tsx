"use client";

import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.classList.remove("page-enter");
    void node.offsetWidth;
    node.classList.add("page-enter");
  }, [children]);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
