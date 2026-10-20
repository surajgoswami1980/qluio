"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Cloud, Code2, Database, Plug, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Aurora from "@/components/ui/Aurora";
import { company } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const pipeline = [
  { icon: Database, label: "Data" },
  { icon: BrainCircuit, label: "AI" },
  { icon: Plug, label: "APIs" },
  { icon: Cloud, label: "Cloud" },
];

function CodeLine({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="w-4 select-none text-right text-slate-600">{n}</span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}

/** Decorative product visual — illustrative only, no real data. */
function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto mt-20 max-w-5xl">
      <div className="absolute -inset-x-10 -top-10 bottom-0 rounded-[40px] bg-gradient-to-b from-primary-600/20 via-accent-500/5 to-transparent blur-3xl" />

      <div className="glass-strong relative overflow-hidden rounded-2xl sm:rounded-3xl">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-500">
            synteriq / platform
          </span>
        </div>

        <div className="grid md:grid-cols-5">
          {/* code */}
          <div className="border-white/[0.06] p-5 font-mono text-[12px] leading-6 text-slate-400 sm:p-6 sm:text-[13px] md:col-span-3 md:border-r">
            <CodeLine n={1}><span className="text-accent-300">const</span> assistant = <span className="text-primary-300">createAgent</span>({"{"}</CodeLine>
            <CodeLine n={2}>{"  "}model: <span className="text-emerald-300">&quot;your-llm&quot;</span>,</CodeLine>
            <CodeLine n={3}>{"  "}tools: [search, crm, billing],</CodeLine>
            <CodeLine n={4}>{"  "}guardrails: <span className="text-accent-300">true</span>,</CodeLine>
            <CodeLine n={5}>{"}"});</CodeLine>
            <CodeLine n={6}> </CodeLine>
            <CodeLine n={7}><span className="text-accent-300">await</span> pipeline.<span className="text-primary-300">deploy</span>({"{"} env: <span className="text-emerald-300">&quot;production&quot;</span> {"}"});</CodeLine>
            <div className="mt-3 flex items-center gap-2 text-[12px] text-emerald-300/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              build passing · tests green
            </div>
          </div>

          {/* pipeline */}
          <div className="hidden flex-col justify-center gap-3 p-6 md:col-span-2 md:flex">
            {pipeline.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/30 to-accent-500/20 text-accent-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-200">{step.label}</span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-soft" style={{ animationDelay: `${i * 0.4}s` }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="glass absolute -left-4 top-1/3 hidden animate-float items-center gap-2.5 rounded-xl px-3.5 py-2.5 lg:flex">
        <Code2 className="h-4 w-4 text-primary-300" />
        <span className="text-xs text-slate-200">Custom software</span>
      </div>
      <div className="glass absolute -right-4 bottom-10 hidden animate-float-slow items-center gap-2.5 rounded-xl px-3.5 py-2.5 lg:flex">
        <Sparkles className="h-4 w-4 text-accent-300" />
        <span className="text-xs text-slate-200">AI built in</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <Aurora />
      <div className="container-max relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Badge dot>Enterprise software · AI · SaaS · Cloud</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
            className="mt-7 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Intelligent software.</span>
            <br />
            <span className="text-brand">Built for what&apos;s next.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-400 text-pretty sm:text-lg"
          >
            {company.name} designs and engineers enterprise platforms, AI
            solutions, and SaaS products that help organizations ship faster,
            automate the repetitive, and operate smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="/contact" size="lg">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore services
            </ButtonLink>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
