import {
  Code2,
  BrainCircuit,
  LayoutGrid,
  Cloud,
  Plug,
  Smartphone,
  ShieldCheck,
  GitBranch,
  LineChart,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

/** URL-safe anchor id for a service, e.g. "AI & Automation" → "ai-automation". */
export function serviceSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Core services offered by Synteriq Technologies. */
export const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Design and engineering of bespoke platforms built around your business logic, not a rigid template.",
    details: [
      "Product discovery & technical architecture",
      "Full-stack web application engineering",
      "Legacy system modernization",
      "Scalable, maintainable codebases",
      "Long-term support & iteration",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Practical AI and workflow automation that removes repetitive work and surfaces better decisions.",
    details: [
      "LLM-powered assistants & copilots",
      "Document & data extraction pipelines",
      "Intelligent process automation",
      "Model integration & evaluation",
      "Human-in-the-loop guardrails",
    ],
  },
  {
    icon: LayoutGrid,
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS engineering — from multi-tenant foundations to billing, onboarding, and analytics.",
    details: [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "Role-based access & admin tooling",
      "Usage analytics & dashboards",
      "Release and feature-flag workflows",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable cloud foundations with automated delivery, observability, and cost-aware scaling.",
    details: [
      "Cloud architecture & migration",
      "CI/CD pipelines & infrastructure as code",
      "Containerization & orchestration",
      "Monitoring, logging & alerting",
      "Performance & cost optimization",
    ],
  },
  {
    icon: Plug,
    title: "API & System Integration",
    description:
      "Connect the tools and data silos your business depends on into one coherent, dependable flow.",
    details: [
      "REST & GraphQL API design",
      "Third-party & payment integrations",
      "Event-driven & messaging architectures",
      "Data synchronization & webhooks",
      "Secure authentication & API gateways",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Cross-platform and native mobile apps that stay fast, accessible, and consistent with your web experience.",
    details: [
      "iOS & Android delivery",
      "Cross-platform engineering",
      "Offline-first & sync strategies",
      "Push notifications & deep linking",
      "App store release support",
    ],
  },
];

export interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Cross-cutting engineering principles / why work with Synteriq. */
export const capabilities: Capability[] = [
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Secure defaults, input validation, and least-privilege access are built in from the first commit.",
  },
  {
    icon: Workflow,
    title: "Clear Delivery Process",
    description:
      "Transparent milestones, frequent demos, and documentation so you always know where a project stands.",
  },
  {
    icon: GitBranch,
    title: "Maintainable Engineering",
    description:
      "Tested, reviewed, and documented code that your team can own and extend long after launch.",
  },
  {
    icon: LineChart,
    title: "Built to Scale",
    description:
      "Architectures that start lean and grow with demand without a costly rewrite down the line.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

/** How Synteriq works with a client, from first conversation to launch. */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Scope",
    description:
      "We start by understanding your goals, constraints, and users, then shape a clear scope and technical approach.",
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "We design the experience and engineer it in short, reviewable increments, with regular demos so you stay in control.",
  },
  {
    step: "03",
    title: "Launch & Evolve",
    description:
      "We ship to production, monitor real usage, and keep iterating — adding capabilities as your needs grow.",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What kinds of projects does Synteriq take on?",
    answer:
      "We work on custom software platforms, AI and automation initiatives, SaaS products, cloud and DevOps engagements, system integrations, and mobile applications. If your project spans several of these areas, we can bring them together into one delivery plan.",
  },
  {
    question: "Can you join an existing project or team?",
    answer:
      "Yes. We can take ownership of a greenfield build, improve and modernize an existing platform, or work alongside your in-house team to accelerate delivery.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "Most engagements begin with a short discovery conversation about your goals and constraints. From there we define scope, a technical approach, and a delivery plan before any build work begins.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We select the stack based on the problem rather than forcing one toolset. In practice that spans modern web frameworks, cloud platforms, data pipelines, and AI/LLM integrations, chosen for maintainability and fit.",
  },
  {
    question: "How is MyClasses related to Synteriq?",
    answer:
      "MyClasses is a SaaS product built and operated by Synteriq Technologies. It reflects the same engineering practices we bring to client work and is part of our product portfolio.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Use the Contact page to tell us about your goals and the type of project you have in mind. Share as much context as you can, and we'll follow up to explore how we can help.",
  },
];

/** Inquiry types for the contact form dropdown. */
export const inquiryTypes = [
  "Custom Software Development",
  "AI and Automation",
  "SaaS Product Development",
  "Web Application Development",
  "Cloud and DevOps",
  "API and System Integration",
  "Mobile Application Development",
  "MyClasses",
  "Other",
];

/** Configurable budget ranges for the contact form (optional field). */
export const budgetRanges = [
  "Not sure yet",
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

/** Configurable project timelines for the contact form (optional field). */
export const timelineOptions = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "6+ months",
  "Just exploring",
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
