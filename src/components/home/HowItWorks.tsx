import { processSteps } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <section className="section relative">
      <div className="container-max">
        <SectionHeading
          badge="Our process"
          title="A clear path from idea to launch"
          subtitle="Transparent milestones and frequent demos mean you always know where your project stands."
        />

        <div className="relative mt-16">
          {/* connector line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent md:block"
          />
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {processSteps.map((item, index) => (
              <li key={item.title} className="relative">
                <Reveal delay={index * 0.1}>
                  <span className="glass-strong relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl font-mono text-sm font-medium text-accent-300">
                    {item.step}
                  </span>
                  <div className="glass mt-6 rounded-2xl p-7">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
