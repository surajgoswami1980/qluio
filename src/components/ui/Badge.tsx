import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Shows a softly pulsing status dot. */
  dot?: boolean;
}

export default function Badge({ className, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn("eyebrow", className)} {...props}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent-400" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
        </span>
      )}
      {children}
    </span>
  );
}
