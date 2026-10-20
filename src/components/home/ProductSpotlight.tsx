import { ArrowUpRight, BookOpen, GraduationCap, LayoutDashboard, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { myClasses } from "@/lib/site";

const tiles = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Learners" },
  { icon: BookOpen, label: "Classes" },
];

/** MyClasses product feature. The visual is illustrative and shows no real data. */
export default function ProductSpotlight({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <section className="section relative">
      <div className="container-max">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/20 blur-[100px]"
            />
            <div className="relative grid grid-cols-1 items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
              <div>
                <Badge>From our portfolio</Badge>
                <Heading className="text-gradient mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {myClasses.name}
                </Heading>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
                  {myClasses.summary} It reflects the same engineering standards
                  we bring to client work.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={myClasses.url} external size="lg">
                    Visit {myClasses.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/products" variant="secondary" size="lg">
                    View products
                  </ButtonLink>
                </div>
              </div>

              {/* illustrative visual */}
              <div aria-hidden="true" className="relative">
                <div className="glass-strong rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{myClasses.name}</p>
                      <p className="text-xs text-slate-500">myclasses.in</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {tiles.map((t) => {
                      const Icon = t.icon;
                      return (
                        <div key={t.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                          <Icon className="h-4 w-4 text-accent-300" />
                          <p className="mt-3 text-xs text-slate-300">{t.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 space-y-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="h-2 w-3/4 rounded-full bg-white/10" />
                    <div className="h-2 w-1/2 rounded-full bg-white/[0.07]" />
                    <div className="h-2 w-2/3 rounded-full bg-white/[0.07]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
