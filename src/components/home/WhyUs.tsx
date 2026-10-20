import { capabilities } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function WhyUs() {
  return (
    <section className="section relative">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                centered={false}
                badge="How we build"
                title="Engineering you can rely on"
                subtitle="Our approach stays the same whether we're starting fresh or improving a platform you already run."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:col-span-7">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="bg-navy">
                  <div className="h-full bg-white/[0.02] p-7 transition-colors duration-300 hover:bg-white/[0.04] sm:p-8">
                    <Icon className="h-5 w-5 text-accent-400" />
                    <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
