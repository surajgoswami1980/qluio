import type { Metadata } from "next";
import { Compass, Lightbulb, Target, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { capabilities, services } from "@/lib/constants";
import CTASection from "@/components/home/CTASection";
import { company, myClasses } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Synteriq Technologies is an engineering partner for enterprise software, AI solutions, SaaS products, and cloud platforms.",
};

const focus = [
  {
    icon: Compass,
    text: "Problem-first thinking over off-the-shelf templates",
  },
  {
    icon: Users,
    text: "Close collaboration with the teams we build for",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About us"
        title={
          <>
            Software partners for <span className="text-brand">ambitious organizations</span>
          </>
        }
        subtitle={`${company.name} helps teams design, build, and operate the software and AI systems that move their business forward.`}
      />

      {/* Mission & vision */}
      <section className="pb-20 sm:pb-28">
        <div className="container-max grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8 sm:p-10 lg:p-12">
              <span className="eyebrow">
                <Target className="h-3.5 w-3.5 text-accent-400" /> Our mission
              </span>
              <h2 className="text-gradient mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Turn complex problems into dependable software
              </h2>
              <p className="mt-6 leading-relaxed text-slate-400">
                Many organizations know the outcome they want but not the path to
                get there. We close that gap by turning goals into clear technical
                plans and shipping software that holds up in the real world.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                We care about engineering that lasts: systems that are secure,
                maintainable, and ready to grow, so what you invest in keeps paying
                off well after launch.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-600/25 blur-[90px]" />
              <div className="relative">
                <span className="eyebrow">
                  <Lightbulb className="h-3.5 w-3.5 text-accent-400" /> Our vision
                </span>
                <blockquote className="mt-6 text-xl font-medium leading-relaxed tracking-tight text-white sm:text-2xl">
                  &ldquo;To be the engineering partner organizations trust to build
                  intelligent software, combining thoughtful design, modern AI, and
                  solid engineering into products people rely on.&rdquo;
                </blockquote>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {focus.map((f) => {
                    const Icon = f.icon;
                    return (
                      <li key={f.text} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                        <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                        <span className="text-sm text-slate-300">{f.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we cover */}
      <section className="section relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container-max">
          <SectionHeading
            badge="What we cover"
            title="One partner across the stack"
            subtitle={`Client engagements across six disciplines, plus our own products such as ${myClasses.name}.`}
          />
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="glass flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm text-slate-200">
                  <Icon className="h-4 w-4 text-accent-400" />
                  {s.title}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="section relative">
        <div className="container-max">
          <SectionHeading
            badge="What we stand for"
            title="Principles that guide our work"
            subtitle="These hold true across every engagement, whatever the stack or industry."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.06}>
                  <div className="glass h-full rounded-2xl p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary-500/25 to-accent-500/10 text-accent-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-semibold text-white">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
