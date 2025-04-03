import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", type = "button", ...props },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" && props.onKeyDown) {
        props.onKeyDown(e);
      }
    };

    return (
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Variant styles
          variant === "primary" && "bg-primary-600 text-white hover:bg-primary-700",
          variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200",
          variant === "outline" && "border border-gray-200 bg-white hover:bg-gray-50 hover:text-primary-600",
          variant === "ghost" && "hover:bg-gray-100 hover:text-primary-600",
          // Size styles
          size === "default" && "h-10 px-4 py-2 text-sm",
          size === "sm" && "h-8 px-3 text-xs",
          size === "lg" && "h-12 px-6 text-base",
          className
        )}
        ref={ref}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };