"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(centered && "mx-auto max-w-3xl text-center", className)}
    >
      {badge && <span className="eyebrow">{badge}</span>}
      <h2
        className={cn(
          "text-gradient text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl",
          badge && "mt-5"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-slate-400 text-pretty sm:text-lg",
            centered ? "mx-auto max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
