import { cn } from "@/lib/utils";

/**
 * Decorative background: soft blurred colour fields + fading grid.
 * Purely visual, hidden from assistive tech.
 */
export default function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary-600/25 blur-[120px]" />
      <div className="absolute -top-10 right-[-10%] h-[380px] w-[480px] animate-float-slow rounded-full bg-accent-500/15 blur-[110px]" />
      <div className="absolute top-40 left-[-10%] h-[340px] w-[420px] animate-float rounded-full bg-indigo-500/10 blur-[110px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy" />
    </div>
  );
}
