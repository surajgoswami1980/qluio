import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, required, ...props }, ref) => {
    const errorId = error && id ? `${id}-error` : undefined;
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-slate-200">
            <span>
              {label}
              {required && (
                <span className="ml-0.5 text-accent-400" aria-hidden="true">
                  *
                </span>
              )}
            </span>
            {hint && <span className="text-xs font-normal text-slate-500">{hint}</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId}
          className={cn("field", className)}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
