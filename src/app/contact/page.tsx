import type { Metadata } from "next";
import {
  ArrowUpRight,
  BrainCircuit,
  Clock,
  Code2,
  GraduationCap,
  LayoutGrid,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  MessagesSquare,
  Phone,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { contactInfo, myClasses, type ContactDetail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell Synteriq Technologies about your software idea, AI initiative, or platform. Inquiries for custom software, AI, SaaS, cloud, integrations, mobile, and MyClasses.",
};

const inquiryBlocks: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: MessagesSquare, title: "General business", description: "Partnerships, company questions, or anything that doesn't fit below." },
  { icon: Code2, title: "Software development", description: "Custom platforms, web applications, and modernizing existing systems." },
  { icon: BrainCircuit, title: "AI & automation", description: "LLM-powered assistants, intelligent automation, and data pipelines." },
  { icon: LayoutGrid, title: "SaaS product development", description: "Multi-tenant products with billing, onboarding, and analytics." },
  { icon: GraduationCap, title: "MyClasses", description: "Questions about our MyClasses product and how it could work for you." },
  { icon: Lightbulb, title: "Project consultations", description: "Not sure where to start? Talk through your idea and shape a plan." },
];

const nextSteps = [
  { icon: MessageSquare, title: "Inquiry", description: "You share your goals, context, and the problem you want to solve." },
  { icon: Users, title: "Discussion", description: "We review it and follow up to understand your needs and answer questions." },
  { icon: Rocket, title: "Next steps", description: "If it's a good fit, we outline scope, approach, and how we could begin." },
];

const projectTypes = [
  "Greenfield products built from scratch",
  "Modernizing or rescuing an existing platform",
  "Adding AI and automation to current workflows",
  "SaaS products with multi-tenant architecture",
  "API design and third-party integrations",
  "Cloud migration, DevOps, and scaling",
];

function ContactRow({ icon: Icon, label, detail, href }: { icon: LucideIcon; label: string; detail: ContactDetail; href?: string }) {
  const value = detail.isPlaceholder ? null : detail.value;
  return (
    <li className="flex items-start gap-4 p-5">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-300">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{label}</p>
        {value ? (
          href ? (
            <a href={href} className="mt-1 block break-words text-[15px] text-white hover:text-accent-300">{value}</a>
          ) : (
            <p className="mt-1 break-words text-[15px] text-white">{value}</p>
          )
        ) : (
          <p className="mt-1.5 inline-flex items-center gap-2 rounded-md border border-dashed border-amber-400/30 px-2 py-0.5 text-xs text-amber-200/80">
            Not configured yet
          </p>
        )}
      </div>
    </li>
  );
}

export default function ContactPage() {
  const { email, phone, address, hours } = contactInfo;
  return (
    <>
      <PageHero
        badge="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-brand">intelligent.</span>
          </>
        }
        subtitle="Have a software idea, an AI initiative, or an existing platform you want to improve? Tell us about your goals, and let's explore how Synteriq Technologies can help."
      />

      {/* Form + details */}
      <section className="pb-20 sm:pb-28">
        <div className="container-max grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:order-2 lg:col-span-7">
            <ContactForm />
          </Reveal>

          <div className="space-y-6 lg:order-1 lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="glass overflow-hidden rounded-3xl">
                <div className="border-b border-white/[0.06] p-6">
                  <h2 className="font-semibold text-white">Reach us directly</h2>
                  <p className="mt-1 text-sm text-slate-400">Prefer email or phone? Use the details below.</p>
                </div>
                <ul className="divide-y divide-white/[0.06]">
                  <ContactRow icon={Mail} label="Email" detail={email} href={`mailto:${email.value}`} />
                  <ContactRow icon={Phone} label="Phone" detail={phone} href={`tel:${phone.value.replace(/\s/g, "")}`} />
                  <ContactRow icon={MapPin} label="Office" detail={address} />
                  <ContactRow icon={Clock} label="Working hours" detail={hours} />
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-6">
                <h2 className="font-semibold text-white">What can we help with?</h2>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {inquiryBlocks.map((b) => {
                    const Icon = b.icon;
                    return (
                      <li key={b.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <Icon className="h-4 w-4 text-accent-400" />
                        <p className="mt-3 text-sm font-medium text-white">{b.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">{b.description}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container-max">
          <SectionHeading
            badge="What happens next?"
            title="A simple three-step process"
            subtitle="No pressure and no obligation. Just a clear way to find out whether we're the right fit."
          />
          <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <Reveal delay={i * 0.08} className="h-full">
                    <div className="glass h-full rounded-2xl p-7">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary-500/25 to-accent-500/10 text-accent-300">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-sm text-slate-600">0{i + 1}</span>
                      </div>
                      <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Project types */}
      <section className="section relative">
        <div className="container-max grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            centered={false}
            badge="Where we help"
            title="The kinds of projects we take on"
            subtitle="If your project looks like one of these, we'd like to hear about it."
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projectTypes.map((type, i) => (
              <li key={type}>
                <Reveal delay={i * 0.04} className="h-full">
                  <div className="glass flex h-full items-start gap-3 rounded-2xl p-5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    <span className="text-sm text-slate-200">{type}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MyClasses CTA */}
      <section className="pb-24 sm:pb-32">
        <div className="container-max">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl">
              <div aria-hidden="true" className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-500/20 blur-[90px]" />
              <div className="relative flex flex-col gap-8 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-5">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white">Exploring {myClasses.name}?</h2>
                    <p className="mt-2 max-w-md text-slate-400">
                      See our SaaS product for learning and institute management, built and run by Synteriq.
                    </p>
                  </div>
                </div>
                <ButtonLink href={myClasses.url} external size="lg" className="flex-shrink-0">
                  Visit {myClasses.name}
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
