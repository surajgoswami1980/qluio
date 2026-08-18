"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingPlans, addons } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingCard from "@/components/pricing/PricingCard";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTASection from "@/components/home/CTASection";
import { Package } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-800/50 via-transparent to-transparent" />
        <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your school. All plans include core
              modules. Upgrade or downgrade anytime.
            </p>
            <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding -mt-4">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-start">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                isAnnual={isAnnual}
                index={index}
              />
            ))}
          </div>

          {/* Revenue Share Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500">
              💡 <strong>Note:</strong> A 1.5% platform commission applies on fee
              payments processed through our Razorpay gateway (in addition to
              Razorpay&apos;s standard 2% fee). Offline payments have zero commission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <SectionHeading
            badge="Add-ons"
            title="Enhance Your Plan"
            subtitle="Add extra capabilities to any plan as your needs grow."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-5 h-5 text-primary-700" />
                  <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                    {addon.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {addon.name}
                </h3>
                <p className="text-2xl font-bold text-primary-900 mb-2">
                  {addon.price}
                </p>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <FeatureComparison />

      {/* FAQ */}
      <PricingFAQ />

      {/* CTA */}
      <CTASection />
    </>
  );
}
