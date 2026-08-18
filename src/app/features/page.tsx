"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { CheckCircle2 } from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-800/50 via-transparent to-transparent" />
        <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 border border-white/20 mb-4">
              10+ Integrated Modules
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Modern Schools
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every module is designed for Indian educational institutions. From
              CBSE to State Board, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-12 lg:gap-16`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-900" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Placeholder */}
                  <div className="flex-1 w-full">
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100 min-h-[300px] flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="w-16 h-16 text-primary-300 mx-auto mb-4" />
                        <p className="text-sm text-primary-600 font-medium">
                          {feature.title} Module
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Interactive preview coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Portals Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <SectionHeading
            badge="Multi-Portal Access"
            title="Dedicated Portals for Everyone"
            subtitle="Each user gets a tailored experience designed for their role."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Admin Panel",
                description:
                  "Complete school management dashboard with analytics, reports, and configuration controls.",
                color: "from-blue-500 to-blue-700",
              },
              {
                title: "Teacher Portal",
                description:
                  "Manage attendance, assignments, grades, and communicate with parents effortlessly.",
                color: "from-green-500 to-green-700",
              },
              {
                title: "Student Portal",
                description:
                  "Access timetables, assignments, results, and learning resources in one place.",
                color: "from-purple-500 to-purple-700",
              },
              {
                title: "Parent Portal",
                description:
                  "Track child's attendance, fees, grades, and communicate with teachers directly.",
                color: "from-orange-500 to-orange-700",
              },
            ].map((portal, index) => (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${portal.color} flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-bold text-lg">
                    {portal.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {portal.title}
                </h3>
                <p className="text-sm text-gray-600">{portal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
