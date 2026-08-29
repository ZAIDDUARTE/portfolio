"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  sectionId?: string;
};

const navLinks: NavLink[] = [
  { href: "/#work", label: "Work", sectionId: "work" },
  { href: "/#experience", label: "Experience", sectionId: "experience" },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: siteConfig.cv, label: "CV", external: true },
  { href: "/connect", label: "Connect" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isConnectPage = pathname === "/connect";
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navLinks
      .map((link) => link.sectionId)
      .filter(Boolean) as string[];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHomePage]);

  if (isConnectPage) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-canvas/90 backdrop-blur-sm">
        <div className="section-pad mx-auto flex h-14 max-w-[1400px] items-center justify-between md:h-16">
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.18em] text-ink transition-opacity hover:opacity-60"
            aria-label={`${siteConfig.name} home`}
          >
            ZD
          </Link>
          <a
            href={siteConfig.url}
            className="text-xs tracking-[0.08em] text-muted transition-opacity hover:opacity-60 md:text-sm"
          >
            zaidduartee.com
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-canvas/90 backdrop-blur-sm">
      <div className="section-pad mx-auto flex h-14 max-w-[1400px] items-center justify-between md:h-16">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.18em] text-ink transition-opacity hover:opacity-60"
          aria-label={`${siteConfig.name} home`}
        >
          ZD
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              isHomePage &&
              link.sectionId &&
              activeSection === link.sectionId;

            const className = `nav-link text-sm text-ink transition-opacity hover:opacity-80 ${
              isActive ? "nav-link-active" : ""
            }`;

            return link.external ? (
              <a
                key={link.label}
                href={link.href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-border-subtle bg-canvas md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="section-pad flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    className="tap-active flex min-h-12 items-center text-base text-ink"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="tap-active flex min-h-12 items-center text-base text-ink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
