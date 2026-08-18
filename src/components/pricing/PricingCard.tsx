"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { type PricingPlan } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  index: number;
}

export default function PricingCard({ plan, isAnnual, index }: PricingCardProps) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const period = isAnnual ? "/year" : "/month";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative rounded-3xl p-8 border transition-all duration-300",
        plan.popular
          ? "bg-gradient-to-b from-primary-900 to-primary-950 border-primary-700 text-white scale-105 shadow-2xl"
          : "bg-white border-gray-200 hover:border-primary-200 hover:shadow-lg"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="popular">Most Popular</Badge>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={cn(
            "text-xl font-bold mb-2",
            plan.popular ? "text-white" : "text-gray-900"
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            "text-sm",
            plan.popular ? "text-gray-300" : "text-gray-600"
          )}
        >
          {plan.description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span
            className={cn(
              "text-4xl font-bold",
              plan.popular ? "text-white" : "text-gray-900"
            )}
          >
            {formatCurrency(price)}
          </span>
          <span
            className={cn(
              "text-sm mb-1",
              plan.popular ? "text-gray-300" : "text-gray-500"
            )}
          >
            {period}
          </span>
        </div>
        <p
          className={cn(
            "text-sm mt-2 font-medium",
            plan.popular ? "text-blue-300" : "text-primary-700"
          )}
        >
          {plan.studentLimit}
        </p>
      </div>

      <Link href="/demo" className="block mb-8">
        <Button
          variant={plan.popular ? "secondary" : "primary"}
          className="w-full"
        >
          {plan.popular ? "Start Free Trial" : "Get Started"}
        </Button>
      </Link>

      <div className="space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <Check
              className={cn(
                "w-4 h-4 mt-0.5 flex-shrink-0",
                plan.popular ? "text-green-400" : "text-green-600"
              )}
            />
            <span
              className={cn(
                "text-sm",
                plan.popular ? "text-gray-200" : "text-gray-700"
              )}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
