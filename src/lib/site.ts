/**
 * Centralized site & contact configuration for Synteriq Technologies.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  HOW TO CONFIGURE THIS FILE
 * ──────────────────────────────────────────────────────────────────────────
 *  1. CONTACT DETAILS
 *     Every value flagged with `isPlaceholder: true` is NOT real. Replace the
 *     `value` with your verified business detail and set `isPlaceholder: false`.
 *     While `isPlaceholder` is true, the UI will visually mark it as
 *     "to be configured" and will NOT present it as a real, confirmed detail.
 *
 *  2. CONTACT FORM DELIVERY (frontend-only project — no backend)
 *     `CONTACT_FORM_ENDPOINT` is `null` by default. While it is null, the
 *     contact form validates input and shows an honest message explaining that
 *     inquiry delivery has not been connected yet. To enable real delivery,
 *     point it at a form-handling service endpoint (e.g. Formspree, Web3Forms,
 *     Basin, or your own API) that accepts a JSON POST.
 *
 *     SECURITY: Do NOT paste SMTP passwords, private API secrets, or signing
 *     keys here. This file ships to the browser. Only use endpoints/keys that
 *     are explicitly designed to be public (e.g. a Formspree form URL).
 * ──────────────────────────────────────────────────────────────────────────
 */

export const company = {
  name: "Synteriq Technologies",
  shortName: "Synteriq",
  tagline: "Intelligent Software. Built for What's Next.",
  description:
    "Synteriq Technologies builds enterprise software, AI solutions, SaaS products, and cloud platforms — engineered to help organizations ship faster and operate smarter.",
  url: "https://synteriq.com",
};

/** Flagship product in the Synteriq portfolio. */
export const myClasses = {
  name: "MyClasses",
  url: "https://myclasses.in",
  summary:
    "A SaaS learning and institute-management platform built and operated by Synteriq Technologies.",
};

/**
 * Contact form delivery endpoint.
 *
 * null  → delivery NOT configured. Form validates and shows an honest notice.
 * string → a JSON-accepting POST endpoint (e.g. "https://formspree.io/f/xxxx").
 *
 * This value may be supplied at build time via NEXT_PUBLIC_CONTACT_ENDPOINT
 * without editing code.
 */
export const CONTACT_FORM_ENDPOINT: string | null =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || null;

export interface ContactDetail {
  /** True while the value is an unverified placeholder you must replace. */
  isPlaceholder: boolean;
  value: string;
}

/**
 * General organisation contact details.
 * ⚠️ All values below are PLACEHOLDERS. Replace with verified details and set
 *    isPlaceholder: false. See the header of this file for instructions.
 */
export const contactInfo: {
  email: ContactDetail;
  phone: ContactDetail;
  address: ContactDetail;
  hours: ContactDetail;
} = {
  email: { isPlaceholder: true, value: "hello@synteriq.example" },
  phone: { isPlaceholder: true, value: "+00 000 000 0000" },
  address: { isPlaceholder: true, value: "Add your registered office address" },
  hours: { isPlaceholder: true, value: "Add your working hours" },
};

export interface SocialLink {
  name: string;
  /** null → link not configured yet; the UI will hide it. */
  href: string | null;
  icon: "linkedin" | "twitter" | "github";
}

/** Social profiles. Set href to a real URL to make the icon appear. */
export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: null, icon: "linkedin" },
  { name: "X (Twitter)", href: null, icon: "twitter" },
  { name: "GitHub", href: null, icon: "github" },
];
