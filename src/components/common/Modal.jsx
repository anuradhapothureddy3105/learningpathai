import React, { useEffect } from "react";

export function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-md",
  className = "",
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-0 sm:px-5"
      onClick={onClose}
    >
      <div
        className={`bg-white w-full sm:${maxWidth} rounded-t-3xl sm:rounded-3xl p-6 fade-in scrollbar-none max-h-[90vh] overflow-y-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
