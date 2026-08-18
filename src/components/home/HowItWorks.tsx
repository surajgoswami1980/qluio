"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Choose Plan",
    description:
      "Create your account in 2 minutes. Pick the plan that fits your school size. Start with a 30-day free trial — no credit card needed.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure Your School",
    description:
      "Set up classes, sections, subjects, and fee structures. Import student data via Excel. Our team helps with onboarding if needed.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live & Grow",
    description:
      "Your school is digital! Teachers, students, and parents get their portals. Start managing everything from one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto">
        <SectionHeading
          badge="Simple Setup"
          title="Up and Running in 3 Steps"
          subtitle="No technical expertise required. Get your school digitized in under a week."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-200 to-accent-200" />
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-900 to-accent-700 mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-xs font-bold text-primary-900 shadow-md border border-gray-100">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
