"use client";

import { useId, useRef, useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Info, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { inquiryTypes, budgetRanges, timelineOptions } from "@/lib/constants";
import { CONTACT_FORM_ENDPOINT, company } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  budget: string;
  timeline: string;
  details: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  inquiryType: "",
  budget: "",
  timeline: "",
  details: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_DETAILS = 20;
const MAX_DETAILS = 4000;

// Order used to focus the first invalid field.
const FIELD_ORDER: (keyof FormState)[] = ["fullName", "email", "inquiryType", "details", "consent"];

function validate(state: FormState): Errors {
  const next: Errors = {};
  if (!state.fullName.trim()) next.fullName = "Please enter your full name.";
  if (!state.email.trim()) next.email = "Please enter your business email.";
  else if (!EMAIL_RE.test(state.email.trim())) next.email = "Please enter a valid email address, like name@company.com.";
  if (!state.inquiryType) next.inquiryType = "Please choose an inquiry type.";
  const details = state.details.trim();
  if (!details) next.details = "Please tell us a little about your project.";
  else if (details.length < MIN_DETAILS) next.details = `A few more details help us respond well (at least ${MIN_DETAILS} characters).`;
  if (!state.consent) next.consent = "Please confirm we may contact you about this inquiry.";
  return next;
}

function Label({ htmlFor, children, required, hint }: { htmlFor: string; children: string; required?: boolean; hint?: string }) {
  return (
    <label htmlFor={htmlFor} className="flex items-baseline justify-between text-sm font-medium text-slate-200">
      <span>
        {children}
        {required && <span className="ml-0.5 text-accent-400" aria-hidden="true">*</span>}
      </span>
      {hint && <span className="text-xs font-normal text-slate-500">{hint}</span>}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="text-sm text-red-300">{message}</p>;
}

export default function ContactForm() {
  const uid = useId();
  const fid = (k: keyof FormState) => `${uid}-${k}`;
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  // Guards against double submits even before React re-renders the disabled button.
  const inFlight = useRef(false);

  const deliveryEnabled = Boolean(CONTACT_FORM_ENDPOINT);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    if (status === "error" || status === "not-configured") setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;

    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const first = FIELD_ORDER.find((k) => found[k]);
      if (first) document.getElementById(fid(first))?.focus();
      return; // entered values are kept as-is
    }
    setErrors({});

    // Honest behaviour: never claim delivery when no service is connected.
    if (!deliveryEnabled) {
      setStatus("not-configured");
      return;
    }

    inFlight.current = true;
    setStatus("submitting");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT as string, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          phone: form.phone.trim(),
          inquiryType: form.inquiryType,
          budget: form.budget,
          timeline: form.timeline,
          details: form.details.trim(),
          consent: form.consent,
          source: "synteriq-website-contact",
        }),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error"); // values preserved so the user can retry
    } finally {
      inFlight.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="glass-strong rounded-3xl p-8 text-center sm:p-12" role="status" aria-live="polite">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10">
          <CheckCircle2 className="h-7 w-7 text-emerald-300" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-white">Inquiry sent</h3>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          Thanks for reaching out. We&apos;ll review your message and reply to the
          email address you provided.
        </p>
        <Button variant="secondary" className="mt-8" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";
  const detailsLength = form.details.length;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${uid}-title`}
      className="glass-strong relative rounded-3xl p-6 sm:p-8 lg:p-10"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />

      <h2 id={`${uid}-title`} className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Tell us about your project
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Fields marked <span className="text-accent-400">*</span> are required.
      </p>

      {!deliveryEnabled && (
        <div className="mt-6 flex gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-4 text-sm leading-relaxed text-amber-100/90">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
          <p>
            <strong className="font-medium text-amber-200">Online delivery isn&apos;t connected yet.</strong>{" "}
            You can fill in and check the form, but it can&apos;t send inquiries
            until a form service is set up.
          </p>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          id={fid("fullName")}
          label="Full name"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          value={form.fullName}
          error={errors.fullName}
          onChange={(e) => update("fullName", e.target.value)}
        />
        <Input
          id={fid("email")}
          type="email"
          inputMode="email"
          label="Business email"
          required
          autoComplete="email"
          placeholder="name@company.com"
          value={form.email}
          error={errors.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <Input
          id={fid("company")}
          label="Company name"
          hint="Optional"
          autoComplete="organization"
          placeholder="Company Inc."
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
        <Input
          id={fid("phone")}
          type="tel"
          inputMode="tel"
          label="Phone number"
          hint="Optional"
          autoComplete="tel"
          placeholder="Include country code"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={fid("inquiryType")} required>Inquiry type</Label>
        <select
          id={fid("inquiryType")}
          required
          value={form.inquiryType}
          aria-invalid={errors.inquiryType ? "true" : undefined}
          aria-describedby={errors.inquiryType ? `${fid("inquiryType")}-error` : undefined}
          onChange={(e) => update("inquiryType", e.target.value)}
          className={cn("field appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10", !form.inquiryType && "text-slate-500")}
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")" }}
        >
          <option value="">Select an inquiry type</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <FieldError id={`${fid("inquiryType")}-error`} message={errors.inquiryType} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {([
          { key: "budget", label: "Project budget", placeholder: "Select a range", options: budgetRanges },
          { key: "timeline", label: "Project timeline", placeholder: "Select a timeline", options: timelineOptions },
        ] as const).map((s) => (
          <div key={s.key} className="space-y-2">
            <Label htmlFor={fid(s.key)} hint="Optional">{s.label}</Label>
            <select
              id={fid(s.key)}
              value={form[s.key]}
              onChange={(e) => update(s.key, e.target.value)}
              className={cn("field appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10", !form[s.key] && "text-slate-500")}
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")" }}
            >
              <option value="">{s.placeholder}</option>
              {s.options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={fid("details")} required>Project details</Label>
        <textarea
          id={fid("details")}
          rows={6}
          required
          maxLength={MAX_DETAILS}
          placeholder="What are you trying to build or improve? Share your goals, context, and any constraints."
          value={form.details}
          aria-invalid={errors.details ? "true" : undefined}
          aria-describedby={`${fid("details")}-count${errors.details ? ` ${fid("details")}-error` : ""}`}
          onChange={(e) => update("details", e.target.value)}
          className="field min-h-[140px] resize-y"
        />
        <div className="flex items-start justify-between gap-4">
          <FieldError id={`${fid("details")}-error`} message={errors.details} />
          <p id={`${fid("details")}-count`} className="ml-auto text-xs tabular-nums text-slate-500">
            {detailsLength}/{MAX_DETAILS}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label
          htmlFor={fid("consent")}
          className={cn(
            "flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-sm leading-relaxed transition-colors",
            errors.consent ? "border-red-400/50 bg-red-500/[0.04]" : "border-white/[0.08] bg-white/[0.02] hover:border-white/15"
          )}
        >
          <input
            id={fid("consent")}
            type="checkbox"
            checked={form.consent}
            aria-invalid={errors.consent ? "true" : undefined}
            aria-describedby={errors.consent ? `${fid("consent")}-error` : undefined}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer rounded"
          />
          <span className="text-slate-300">
            I agree that {company.name} may store the details I&apos;ve shared and
            contact me about this inquiry.
            <span className="ml-0.5 text-accent-400" aria-hidden="true">*</span>
          </span>
        </label>
        <FieldError id={`${fid("consent")}-error`} message={errors.consent} />
      </div>

      {/* live region for submission outcomes */}
      <div aria-live="assertive" className="empty:hidden">
        {status === "not-configured" && (
          <div role="alert" className="mt-6 flex gap-3 rounded-2xl border border-amber-400/25 bg-amber-400/[0.07] p-4 text-sm leading-relaxed text-amber-100">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
            <p>
              Your details look good, but <strong className="font-medium">this inquiry was not sent</strong>.
              Online delivery hasn&apos;t been connected yet. Your entries are still here, so nothing is lost.
            </p>
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="mt-6 flex gap-3 rounded-2xl border border-red-400/25 bg-red-500/[0.07] p-4 text-sm leading-relaxed text-red-100">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-300" />
            <p>
              We couldn&apos;t send your inquiry. Please check your connection and try
              again. Your entries have been kept.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={submitting} aria-disabled={submitting} className="w-full sm:w-auto">
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="text-xs text-slate-500">We only use your details to respond to this inquiry.</p>
      </div>
    </form>
  );
}
