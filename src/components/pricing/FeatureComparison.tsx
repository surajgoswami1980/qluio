"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Student Management", starter: true, growth: true, enterprise: true },
  { feature: "Teacher & Staff Management", starter: true, growth: true, enterprise: true },
  { feature: "Student Attendance", starter: true, growth: true, enterprise: true },
  { feature: "Staff Attendance", starter: false, growth: true, enterprise: true },
  { feature: "Fee Management & Online Payment", starter: true, growth: true, enterprise: true },
  { feature: "Timetable Management", starter: true, growth: true, enterprise: true },
  { feature: "Exam & Report Cards", starter: true, growth: true, enterprise: true },
  { feature: "Homework & Assignments", starter: false, growth: true, enterprise: true },
  { feature: "Transport Management", starter: false, growth: true, enterprise: true },
  { feature: "Library Management", starter: false, growth: true, enterprise: true },
  { feature: "Push Notifications", starter: true, growth: true, enterprise: true },
  { feature: "SMS Notifications", starter: false, growth: "500/month free", enterprise: "Unlimited" },
  { feature: "Parent & Student Portals", starter: false, growth: true, enterprise: true },
  { feature: "Multi-branch Management", starter: false, growth: false, enterprise: true },
  { feature: "Custom Branding", starter: false, growth: false, enterprise: true },
  { feature: "API Access", starter: false, growth: false, enterprise: true },
  { feature: "Dedicated Account Manager", starter: false, growth: false, enterprise: true },
  { feature: "Student Limit", starter: "300", growth: "1,000", enterprise: "Unlimited" },
  { feature: "Support", starter: "Email", growth: "Priority Email & Chat", enterprise: "Phone, Email & Chat" },
];

export default function FeatureComparison() {
  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-600 mx-auto" />;
    }
    if (value === false) {
      return <Minus className="w-5 h-5 text-gray-300 mx-auto" />;
    }
    return (
      <span className="text-sm text-gray-700 font-medium">{value}</span>
    );
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <SectionHeading
          title="Compare Plans"
          subtitle="See which plan is right for your school"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Feature
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-900">
                  Starter
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-primary-900">
                  Growth ⭐
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-900">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {renderCell(row.starter)}
                  </td>
                  <td className="px-6 py-3 text-center bg-primary-50/30">
                    {renderCell(row.growth)}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {renderCell(row.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
