import React from "react";

export function VoiceInput({ listening, supported, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={!supported}
      className={
        "btn w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors disabled:opacity-30 p-0 border-0 " +
        (listening ? "mic-active" : "")
      }
      style={{
        background: listening ? "var(--coral)" : "rgba(31,122,108,0.1)",
      }}
      title={listening ? "Stop listening" : "Speak your question"}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3z"
          stroke={listening ? "white" : "var(--teal)"}
          strokeWidth="1.8"
        />
        <path
          d="M19 11a7 7 0 01-14 0M12 18v3"
          stroke={listening ? "white" : "var(--teal)"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export default VoiceInput;
