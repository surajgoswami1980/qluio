"use client";

import { cn } from "@/lib/utils";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export default function PricingToggle({
  isAnnual,
  onToggle,
}: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          !isAnnual ? "text-primary-900" : "text-gray-500"
        )}
      >
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative w-14 h-7 rounded-full bg-gradient-to-r from-primary-900 to-accent-700 p-1 transition-all"
        aria-label="Toggle pricing period"
      >
        <div
          className={cn(
            "w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",
            isAnnual ? "translate-x-7" : "translate-x-0"
          )}
        />
      </button>
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          isAnnual ? "text-primary-900" : "text-gray-500"
        )}
      >
        Annual
        <span className="ml-1 text-xs text-green-600 font-semibold">
          (2 months free)
        </span>
      </span>
    </div>
  );
}
