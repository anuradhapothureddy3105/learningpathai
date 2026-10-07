import React from "react";

export function Card({
  children,
  className = "",
  hover = false,
  style = {},
  onClick,
  ...props
}) {
  const hoverClass = hover ? "card-hover cursor-pointer" : "";
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border border-black/5 shadow-sm p-4 ${hoverClass} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
