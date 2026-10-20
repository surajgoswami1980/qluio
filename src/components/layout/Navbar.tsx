"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { company } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and with Escape.
  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border transition-all duration-300",
          scrolled || isOpen
            ? "glass-strong border-white/10"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="flex h-14 items-center justify-between pl-4 pr-2 sm:h-16 sm:pl-5 sm:pr-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg"
            aria-label={`${company.name} — home`}
          >
            <img src="/logo.svg" alt="" aria-hidden="true" width={32} height={32} className="h-8 w-8" />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Synteriq
              <span className="hidden font-normal text-slate-400 sm:inline"> Technologies</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors duration-200",
                      active ? "text-white" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href="/contact" size="sm">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-xl p-2.5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="hairline mx-4" />
              <ul className="space-y-1 p-3">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] transition-colors",
                          active
                            ? "bg-white/[0.07] text-white"
                            : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                        )}
                      >
                        {link.name}
                        {active && <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="px-3 pb-3">
                <ButtonLink href="/contact" className="w-full">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
