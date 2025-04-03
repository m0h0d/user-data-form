import React from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField = ({
  label,
  htmlFor,
  error,
  children,
  className,
}: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-500" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
};