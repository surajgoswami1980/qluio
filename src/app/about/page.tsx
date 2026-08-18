"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Heart,
  Globe,
  Award,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

const teamMembers = [
  {
    name: "Suraj Goswami",
    role: "Founder & CEO",
    description: "5+ years in EdTech & Software Development. Previously at Chegg and Appsquadz Technologies.",
  },
  {
    name: "Ankit Verma",
    role: "Lead Developer",
    description: "Full-stack engineer specializing in scalable SaaS architecture and cloud infrastructure.",
  },
  {
    name: "Neha Sharma",
    role: "Product & Design",
    description: "Creates intuitive user experiences that teachers and administrators love to use daily.",
  },
  {
    name: "Rohit Mehra",
    role: "Customer Success",
    description: "Ensures smooth onboarding and maximum value for every school partner.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Bank-grade encryption, daily backups, and compliance with Indian data protection laws.",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description:
      "99.9% uptime guaranteed. Our infrastructure handles peak loads during admission season.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every feature is built based on real feedback from school administrators and teachers.",
  },
  {
    icon: Globe,
    title: "Made for India",
    description:
      "Designed specifically for Indian schools — supporting CBSE, ICSE, and all State Boards.",
  },
];

const milestones = [
  { year: "2020", event: "Suraj Goswami begins career in EdTech at Chegg, building scalable solutions for millions of students" },
  { year: "2022", event: "Joined Appsquadz Technologies, leading development of enterprise-grade education platforms" },
  { year: "2025", event: "Founded MS Technology Limited in Panipat, Haryana — launched Edunova with a vision to digitize Indian schools" },
  { year: "2025", event: "Built the complete Edunova platform — Student, Teacher, Parent portals with fee management & Razorpay integration" },
  { year: "2026", event: "Launched Edunova to market — onboarding first schools across Haryana and Delhi NCR" },
];

export default function AboutPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                School Management
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We&apos;re on a mission to make world-class school management
              accessible to every educational institution in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary-700" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Empowering Schools with Technology
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                India has over 1.5 million schools, and most still rely on
                paper-based systems for day-to-day management. We believe
                technology should simplify school operations, not complicate
                them.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Edunova was born from a simple observation: school
                administrators spend 60% of their time on tasks that could be
                automated. We&apos;re here to give them that time back.
              </p>
              <p className="text-lg text-gray-600">
                Our platform is built by a team that deeply understands the
                Indian education system — the boards, the fee structures, the
                parent expectations, and the reporting requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-primary-700" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 text-lg italic leading-relaxed">
                &ldquo;To become India&apos;s most trusted school management
                platform, enabling 10,000+ institutions to deliver world-class
                education administration by 2027.&rdquo;
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-2xl font-bold text-primary-900">5+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-2xl font-bold text-primary-900">10+</p>
                  <p className="text-sm text-gray-600">Modules Built</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-2xl font-bold text-primary-900">4</p>
                  <p className="text-sm text-gray-600">User Portals</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-2xl font-bold text-primary-900">2025</p>
                  <p className="text-sm text-gray-600">Founded</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="These principles guide everything we build and every decision we make."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-max mx-auto max-w-3xl">
          <SectionHeading
            badge="Our Journey"
            title="From Developer to Founder"
            subtitle="The journey of building Edunova — from idea to product."
          />

          <div className="mt-12 space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary-900 to-accent-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {milestone.year}
                  </span>
                </div>
                <div className="pt-3">
                  <p className="text-gray-800 font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto">
          <SectionHeading
            badge="Our Team"
            title="The People Behind Edunova"
            subtitle="A focused team combining EdTech expertise with engineering excellence."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-700 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <SectionHeading
            title="Why Schools Trust Us"
            subtitle="Built with the highest standards of security and reliability."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "AES-256 Encryption" },
              { icon: Award, label: "ISO 27001 Compliant" },
              { icon: Globe, label: "AWS India (Mumbai)" },
              { icon: Users, label: "50,000+ Active Users" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-primary-700" />
                  <span className="text-sm font-medium text-gray-800">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
