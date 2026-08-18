"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/20 mb-6">
              🎓 Trusted by 100+ Schools Across India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              School Management
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Edunova is India&apos;s most comprehensive school management platform.
            Automate admissions, attendance, fees, exams, and more — all in one
            place. Built for CBSE, ICSE, and State Board schools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/pricing">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Play className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-gray-400 mt-6"
          >
            30-day free trial • No credit card required • Setup in minutes
          </motion.p>
        </div>

        {/* Dashboard Preview Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl">
            <div className="bg-gray-900/80 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary-900/50 rounded-lg p-4 border border-primary-700/30">
                    <p className="text-2xl font-bold text-white">2,450</p>
                    <p className="text-xs text-gray-400">Total Students</p>
                  </div>
                  <div className="bg-accent-900/50 rounded-lg p-4 border border-accent-700/30">
                    <p className="text-2xl font-bold text-white">94.2%</p>
                    <p className="text-xs text-gray-400">Attendance Today</p>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4 border border-green-700/30">
                    <p className="text-2xl font-bold text-white">₹12.4L</p>
                    <p className="text-xs text-gray-400">Fees Collected</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  📊 Live Dashboard Preview — Real-time school analytics at your fingertips
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
