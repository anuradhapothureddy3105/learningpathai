import React from "react";

export function Loading({ message = "" }) {
  return (
    <div className="py-10 text-center flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-[var(--marigold)]/30 border-t-[var(--marigold)] rounded-full animate-spin mb-4" />
      {message && (
        <p className="text-sm font-semibold text-[var(--muted)]">{message}</p>
      )}
    </div>
  );
}

export default Loading;
