import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds a hover lift + glowing border. */
  interactive?: boolean;
}

/** Frosted glass card used across the site. */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass relative rounded-2xl",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = "Card";

export default Card;
