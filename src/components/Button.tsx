import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-manrope font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-shock-blue text-white hover:bg-shock-blue-dark active:scale-[0.98] hover:scale-[1.02]",
    secondary:
      "border border-white/30 text-white hover:border-white hover:bg-white/5 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}