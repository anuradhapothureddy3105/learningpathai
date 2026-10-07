import React from "react";

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  style = {},
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all disabled:opacity-40 select-none";

  let variantStyles = "";
  let defaultStyle = { ...style };

  switch (variant) {
    case "primary":
      variantStyles = "rounded-xl text-white";
      defaultStyle = { background: "var(--teal)", ...defaultStyle };
      break;
    case "marigold":
      variantStyles = "rounded-xl text-[var(--night)]";
      defaultStyle = { background: "var(--marigold)", ...defaultStyle };
      break;
    case "outline":
      variantStyles = "rounded-xl border border-black/10 hover:bg-black/[0.03] text-[var(--ink)]";
      break;
    case "ghost":
      variantStyles = "rounded-xl text-[var(--muted)] hover:text-[var(--ink)]";
      break;
    case "pill":
      variantStyles = "rounded-full border border-black/10 bg-white/70 hover:bg-white text-[var(--ink)]";
      break;
    default:
      variantStyles = "rounded-xl";
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  }[size] || "px-4 py-2.5 text-sm";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${baseClasses} ${variantStyles} ${sizeClasses} ${className}`}
      style={defaultStyle}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
