import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="section relative">
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary-700/40 via-navy-800 to-accent-700/25" />
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/40 blur-[90px]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-gradient text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Have a software idea or AI initiative in mind?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 text-pretty sm:text-lg">
                Tell us about your goals and the problem you want to solve.
                We&apos;ll explore how to turn it into a real, working product.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" size="lg">
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" size="lg">
                  Explore services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
