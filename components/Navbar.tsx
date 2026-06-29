"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SmoothLink } from "./SmoothLink";

const NAV_LINKS = [
  { label: "Как это работает", href: "#workflow" },
  { label: "Преимущества", href: "#features" },
  { label: "Шаги", href: "#steps" },
  { label: "Для кого", href: "#roles" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto w-full max-w-3xl"
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full border border-bone-50/15 bg-ink-800/90 px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:px-4",
            scrolled &&
              "border-bone-50/20 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]",
          )}
        >
        <Link href="#" className="flex items-center gap-2 cursor-pointer">
          <LogoMark />
          <span className="text-base font-bold tracking-tight">
            СТРОЙ<span className="text-signal">БОТ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <SmoothLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-bone-400 transition-colors duration-200 hover:text-bone-50 cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </SmoothLink>
          ))}
        </nav>

        <SmoothLink
          href="#cta"
          className="group inline-flex items-center gap-1.5 rounded-full bg-signal px-3.5 py-2 text-xs font-bold text-ink-900 transition-all duration-200 hover:bg-signal-400 cursor-pointer sm:px-4 sm:text-sm"
        >
          <span className="hidden sm:inline">Открыть бота</span>
          <span className="sm:hidden">В бота</span>
          <ArrowIcon />
        </SmoothLink>
        </div>
      </motion.header>
    </div>
  );
}

function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="#FACC15" />
      <path
        d="M8 8h12v3H8V8zm0 5h8v3H8v-3zm0 5h12v3H8v-3z"
        fill="#0A0A0A"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
