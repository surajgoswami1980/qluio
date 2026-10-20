import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/30 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-600 text-white shadow-glow hover:bg-primary-500 hover:shadow-[0_0_0_1px_rgba(59,118,246,0.6),0_10px_40px_-8px_rgba(37,99,235,0.7)]",
  secondary:
    "border border-white/12 bg-white/[0.04] text-white backdrop-blur-md hover:border-white/25 hover:bg-white/[0.08]",
  ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[15px] sm:h-13 sm:px-7",
};

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string
) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

/** A link styled as a button. Use instead of wrapping <Button> in <Link>. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  onClick,
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

export default Button;
