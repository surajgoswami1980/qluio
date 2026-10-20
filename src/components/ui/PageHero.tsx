"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import Aurora from "@/components/ui/Aurora";
import Badge from "@/components/ui/Badge";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Shared hero for inner pages. */
export default function PageHero({ badge, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <Aurora />
      <div className="container-max relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Badge dot>{badge}</Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease }}
          className="text-gradient mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 text-pretty sm:text-lg"
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
