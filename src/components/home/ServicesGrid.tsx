import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, serviceSlug } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

// Bento layout: first and last cards span two columns on large screens.
const spans = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

export default function ServicesGrid() {
  return (
    <section className="section relative">
      <div className="container-max">
        <SectionHeading
          badge="What we do"
          title="Engineering across the full software stack"
          subtitle="From a first prototype to a production platform, we deliver the capabilities modern organizations rely on."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const wide = spans[index] === "lg:col-span-2";
            return (
              <Reveal key={service.title} delay={index * 0.05} className={cn(spans[index], "sm:col-span-1")}>
                <SpotlightCard>
                  <Link
                    href={`/services#${serviceSlug(service.title)}`}
                    className="flex h-full flex-col p-7 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary-500/25 to-accent-500/10 text-accent-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                    {wide && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {service.details.slice(0, 3).map((d) => (
                          <li
                            key={d}
                            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
