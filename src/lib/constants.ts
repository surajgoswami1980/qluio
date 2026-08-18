import {
  Users,
  GraduationCap,
  ClipboardCheck,
  CreditCard,
  Calendar,
  FileText,
  BookOpen,
  Bell,
  Bus,
  Library,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export const features: Feature[] = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Complete student lifecycle management from admission to alumni tracking.",
    details: [
      "Admission & enrollment management",
      "Student profiles with photo & documents",
      "Class & section allocation",
      "Promotion & transfer management",
      "Alumni tracking & communication",
    ],
  },
  {
    icon: GraduationCap,
    title: "Teacher & Staff Management",
    description:
      "Streamline HR operations for teaching and non-teaching staff.",
    details: [
      "Staff profiles & document management",
      "Leave management & approval workflows",
      "Payroll integration ready",
      "Performance tracking",
      "Department & designation management",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Management",
    description:
      "Digital attendance for students and staff with real-time tracking.",
    details: [
      "Biometric & app-based attendance",
      "Subject-wise attendance tracking",
      "Auto SMS/notification to parents",
      "Attendance reports & analytics",
      "Late arrival tracking",
    ],
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description:
      "Automated fee collection with online payment via Razorpay integration.",
    details: [
      "Custom fee structures per class",
      "Online payment via Razorpay",
      "Auto receipt generation",
      "Due date reminders & late fees",
      "Scholarship & discount management",
    ],
  },
  {
    icon: Calendar,
    title: "Timetable & Scheduling",
    description:
      "Smart timetable generation with conflict detection and substitution management.",
    details: [
      "Auto timetable generation",
      "Teacher workload balancing",
      "Substitution management",
      "Exam schedule planning",
      "Room allocation & management",
    ],
  },
  {
    icon: FileText,
    title: "Exam & Report Cards",
    description:
      "Complete examination management from scheduling to report card generation.",
    details: [
      "Multiple exam pattern support (CBSE, ICSE, State)",
      "Online & offline exam management",
      "Auto report card generation",
      "Grade & marks customization",
      "Board-wise result format",
    ],
  },
  {
    icon: BookOpen,
    title: "Homework & Assignments",
    description:
      "Digital homework distribution and submission tracking for teachers and students.",
    details: [
      "Subject-wise homework assignment",
      "File upload & submission",
      "Deadline tracking",
      "Parent notification on assignment",
      "Completion analytics",
    ],
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Multi-channel communication via Push, Email, and SMS notifications.",
    details: [
      "Push notifications (mobile & web)",
      "Bulk SMS campaigns",
      "Email notifications",
      "Event-triggered auto alerts",
      "Custom notification templates",
    ],
  },
  {
    icon: Bus,
    title: "Transport Management",
    description:
      "GPS tracking, route planning, and fleet management for school buses.",
    details: [
      "Route planning & optimization",
      "GPS live tracking",
      "Student pickup/drop management",
      "Driver & vehicle management",
      "Transport fee integration",
    ],
  },
  {
    icon: Library,
    title: "Library Management",
    description:
      "Complete digital library system with book tracking and fine management.",
    details: [
      "Book cataloging & search",
      "Issue & return tracking",
      "Fine calculation & management",
      "Digital library integration",
      "Reading analytics & reports",
    ],
  },
];

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  studentLimit: string;
  popular: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for small schools getting started with digital management",
    monthlyPrice: 4999,
    annualPrice: 49999,
    studentLimit: "Up to 300 students",
    popular: false,
    features: [
      "Student Management",
      "Teacher Management",
      "Attendance (Student)",
      "Fee Management with Online Payment",
      "Timetable Management",
      "Exam & Report Cards",
      "Push Notifications",
      "Email Support",
      "Basic Reports & Analytics",
      "Mobile App Access",
    ],
  },
  {
    name: "Growth",
    description: "Ideal for growing schools that need comprehensive features",
    monthlyPrice: 9999,
    annualPrice: 99999,
    studentLimit: "Up to 1,000 students",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Staff Attendance & Leave Management",
      "Homework & Assignments",
      "Transport Management",
      "Library Management",
      "SMS Notifications (500 free/month)",
      "Parent & Student Portals",
      "Advanced Reports & Analytics",
      "Priority Email & Chat Support",
      "Custom Report Card Formats",
      "30-Day Free Trial",
    ],
  },
  {
    name: "Enterprise",
    description: "For large institutions and school chains needing full power",
    monthlyPrice: 19999,
    annualPrice: 199999,
    studentLimit: "Unlimited students",
    popular: false,
    features: [
      "Everything in Growth, plus:",
      "Multi-branch Management",
      "Custom Branding & White Label",
      "API Access & Integrations",
      "Dedicated Account Manager",
      "On-premise Deployment Option",
      "Custom Module Development",
      "SLA Guarantee (99.9% uptime)",
      "Phone, Email & Chat Support",
      "Data Migration Assistance",
      "Training & Onboarding Sessions",
    ],
  },
];

export interface Addon {
  name: string;
  price: string;
  type: string;
  description: string;
}

export const addons: Addon[] = [
  {
    name: "SMS Pack",
    price: "₹1,500",
    type: "10,000 SMS",
    description: "Bulk SMS credits for notifications and alerts",
  },
  {
    name: "Custom Branding",
    price: "₹2,999",
    type: "One-time",
    description: "Your logo, colors, and domain for the platform",
  },
  {
    name: "Dedicated Support",
    price: "₹4,999/month",
    type: "Monthly",
    description: "Priority support with dedicated account manager",
  },
  {
    name: "Onboarding & Setup",
    price: "₹9,999",
    type: "One-time",
    description: "Complete setup, data migration, and staff training",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  school: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Principal",
    school: "Delhi Public School, Noida",
    content:
      "Edunova ERP has completely transformed how we manage our school. The fee collection automation alone saved us 20 hours per week. The parent portal keeps families engaged and informed.",
    rating: 5,
  },
  {
    name: "Mrs. Priya Sharma",
    role: "Director",
    school: "St. Mary's Convent School, Jaipur",
    content:
      "We evaluated 5 different ERP systems before choosing Edunova. The ease of use and Indian education board support (CBSE patterns) made it a clear winner. Our teachers adapted within a week.",
    rating: 5,
  },
  {
    name: "Mr. Arun Patel",
    role: "Administrator",
    school: "Greenfield International School, Pune",
    content:
      "The transport module with GPS tracking gave parents peace of mind, and the automated attendance notifications reduced absenteeism by 30%. Best investment we made for our school.",
    rating: 5,
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 30-day free trial on our Growth plan. No credit card required. You get full access to all Growth features to evaluate the platform with your school data.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most schools are up and running within 2-3 days. Our onboarding team helps with data migration, configuration, and staff training. Complex setups with legacy data may take up to a week.",
  },
  {
    question: "Can we switch plans later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you only pay the prorated difference. Downgrades take effect at the next billing cycle.",
  },
  {
    question: "Is our data secure?",
    answer:
      "We use bank-grade encryption (AES-256) for all data. Our servers are hosted on AWS India (Mumbai region) with daily backups, and we are compliant with Indian data protection regulations.",
  },
  {
    question: "What about the 1.5% platform fee on payments?",
    answer:
      "The 1.5% platform commission applies only to fee payments processed through our integrated Razorpay gateway. This is in addition to Razorpay's standard 2% transaction fee. Schools can also accept offline payments with no commission.",
  },
  {
    question: "Do you support multiple branches?",
    answer:
      "Yes! Our Enterprise plan supports multi-branch management with centralized or decentralized control. Each branch can have its own configuration while sharing a unified dashboard.",
  },
  {
    question: "What boards and exam patterns do you support?",
    answer:
      "We support CBSE, ICSE, and all major State Board exam patterns. Report cards can be customized to match your board's format. We also support custom grading systems.",
  },
  {
    question: "Is training provided for our staff?",
    answer:
      "Yes, we provide online training sessions for all plans. The Enterprise plan includes on-site training. We also have a comprehensive knowledge base and video tutorials.",
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const stats = [
  { value: "100+", label: "Schools Trust Us" },
  { value: "50,000+", label: "Students Managed" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "24/7", label: "Support Available" },
];
