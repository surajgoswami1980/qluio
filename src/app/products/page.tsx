import type { Metadata } from "next";
import { ArrowRight, Boxes, GraduationCap, Sparkles } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Products built and operated by Synteriq Technologies, including MyClasses, a SaaS learning and institute-management platform.",
};

const highlights = [
  {
    icon: Boxes,
    title: "Institute & learning management",
    description: "Tools for managing classes, learners, and day-to-day operations in one place.",
  },
  {
    icon: Sparkles,
    title: "Built as modern SaaS",
    description: "Multi-tenant, cloud-hosted, and continuously improved, the way we build all SaaS products.",
  },
  {
    icon: GraduationCap,
    title: "Education-focused",
    description: "Designed around the real workflows of teaching institutes and the people who use them.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="Our products"
        title={
          <>
            Products we <span className="text-brand">build and operate</span>
          </>
        }
        subtitle="Alongside client engagements, Synteriq builds and runs its own SaaS products, a working example of the standards we bring to every project."
      />

      <div className="-mt-12">
        <ProductSpotlight />
      </div>

      <section className="pb-20 sm:pb-24">
        <div className="container-max grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="glass h-full rounded-2xl p-7">
                  <Icon className="h-5 w-5 text-accent-400" />
                  <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container-max text-center">
          <SectionHeading
            badge="Build with us"
            title="Want a product like this for your business?"
            subtitle="We partner with founders and teams to design, build, and operate SaaS products from the ground up."
          />
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact" size="lg">
              Discuss your product
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <PricingFAQ />
      <CTASection />
    </>
  );
}
