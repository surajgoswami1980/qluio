"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturesGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <SectionHeading
          badge="Comprehensive Modules"
          title="Everything Your School Needs"
          subtitle="From admissions to alumni, manage every aspect of your institution with our 10+ integrated modules."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4 group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
                  <Icon className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
