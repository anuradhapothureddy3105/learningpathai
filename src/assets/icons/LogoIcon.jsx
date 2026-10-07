import React from "react";

export function LogoIcon({ size = 18, color = "white", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M3 13l7-9 5 3 6-4-3 9-6 4-3-2-6 3z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="17" cy="7" r="1.6" fill={color} />
    </svg>
  );
}

export default LogoIcon;
