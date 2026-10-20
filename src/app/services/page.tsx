import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { services, serviceSlug } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import WhyUs from "@/components/home/WhyUs";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, AI and automation, SaaS product development, cloud and DevOps, API integration, and mobile apps from Synteriq Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our services"
        title={
          <>
            Software, AI, and cloud,{" "}
            <span className="text-brand">engineered end to end</span>
          </>
        }
        subtitle="Whether you're validating a new idea or scaling an established platform, Synteriq brings the engineering capabilities to move it forward."
      >
        {/* quick jump nav */}
        <nav aria-label="Services" className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
          {services.map((s) => (
            <a
              key={s.title}
              href={`#${serviceSlug(s.title)}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="pb-8">
        <div className="container-max space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title}>
                <article
                  id={serviceSlug(service.title)}
                  className="glass scroll-mt-28 overflow-hidden rounded-3xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary-500/25 to-accent-500/10 text-accent-300">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-sm text-slate-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="mt-7 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        {service.description}
                      </p>
                      <ButtonLink href="/contact" variant="secondary" className="mt-8">
                        Discuss this service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </ButtonLink>
                    </div>

                    <div className="border-t border-white/[0.06] bg-white/[0.015] p-8 sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12">
                      <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                        What&apos;s included
                      </h3>
                      <ul className="mt-6 space-y-4">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/15">
                              <Check className="h-3 w-3 text-accent-300" />
                            </span>
                            <span className="text-[15px] text-slate-200">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <WhyUs />
      <CTASection />
    </>
  );
}
