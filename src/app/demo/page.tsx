"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Monitor,
  Users,
  CheckCircle2,
  Play,
  Headphones,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const demoHighlights = [
  {
    icon: Monitor,
    title: "Live Product Walkthrough",
    description: "See every module in action with real school data.",
  },
  {
    icon: Users,
    title: "Personalized for Your School",
    description: "We customize the demo based on your school's size and needs.",
  },
  {
    icon: Headphones,
    title: "Q&A Session",
    description: "Ask anything — pricing, setup, migration, integrations.",
  },
  {
    icon: Clock,
    title: "30-Minute Session",
    description: "Concise yet comprehensive. Respect for your time.",
  },
];

const whatYouSee = [
  "Admin Dashboard with real-time analytics",
  "Student enrollment & profile management",
  "Automated fee collection via Razorpay",
  "Digital attendance with parent notifications",
  "Exam management & report card generation",
  "Transport tracking with GPS",
  "Parent & Teacher mobile app experience",
  "Custom report card formats (CBSE/ICSE)",
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    role: "",
    students: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: `Demo Request from ${formData.name} - ${formData.schoolName}`,
          from_name: "Edunova Website - Demo",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          school_name: formData.schoolName,
          role: formData.role,
          students: formData.students,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <Play className="w-4 h-4 mr-2" />
              Free Demo Session
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              See Edunova in Action
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Book a personalized demo and discover how Edunova can
              transform your school&apos;s operations in just 30 minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* What to expect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What to Expect in Your Demo
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {demoHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                      >
                        <Icon className="w-6 h-6 text-primary-700 mb-2" />
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What you'll see */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  You&apos;ll See
                </h3>
                <div className="space-y-3">
                  {whatYouSee.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
                <p className="text-sm text-primary-700 font-medium mb-3">
                  After the demo, schools typically:
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary-900">85%</p>
                    <p className="text-xs text-gray-600">Start free trial</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-900">3 days</p>
                    <p className="text-xs text-gray-600">Avg. setup time</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-900">92%</p>
                    <p className="text-xs text-gray-600">Convert to paid</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="bg-green-50 rounded-2xl p-12 text-center border border-green-100">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Demo Scheduled!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our team will confirm the time slot via email and phone
                    within 4 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    Check your inbox for a calendar invite.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg sticky top-24"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Schedule Your Free Demo
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Input
                      id="demo-name"
                      name="name"
                      label="Full Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="demo-email"
                      name="email"
                      type="email"
                      label="Work Email"
                      placeholder="you@school.edu"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Input
                      id="demo-phone"
                      name="phone"
                      type="tel"
                      label="Phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="demo-school"
                      name="schoolName"
                      label="School Name"
                      placeholder="School name"
                      value={formData.schoolName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="demo-role"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Role
                      </label>
                      <select
                        id="demo-role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select role</option>
                        <option value="principal">Principal</option>
                        <option value="director">Director / Owner</option>
                        <option value="admin">Administrator</option>
                        <option value="teacher">Teacher</option>
                        <option value="it">IT Coordinator</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="demo-students"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Number of Students
                      </label>
                      <select
                        id="demo-students"
                        name="students"
                        value={formData.students}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select range</option>
                        <option value="under-300">Under 300</option>
                        <option value="300-1000">300 - 1,000</option>
                        <option value="1000-3000">1,000 - 3,000</option>
                        <option value="3000+">3,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Input
                      id="demo-date"
                      name="preferredDate"
                      type="date"
                      label="Preferred Date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                    />
                    <div>
                      <label
                        htmlFor="demo-time"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Preferred Time
                      </label>
                      <select
                        id="demo-time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="12pm">12:00 PM</option>
                        <option value="2pm">2:00 PM</option>
                        <option value="3pm">3:00 PM</option>
                        <option value="4pm">4:00 PM</option>
                        <option value="5pm">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="demo-message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Anything specific you&apos;d like to see? (Optional)
                    </label>
                    <textarea
                      id="demo-message"
                      name="message"
                      rows={3}
                      placeholder="E.g., Fee management workflow, report cards for CBSE..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Demo
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Free • No commitment • 30 minutes
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
