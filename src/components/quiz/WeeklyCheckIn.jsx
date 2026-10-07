import React from "react";
import { T } from "../../data/translations";

export function WeeklyCheckIn({ lang, onStart }) {
  const t = T[lang] || T.en;

  return (
    <button
      type="button"
      onClick={onStart}
      className="btn w-full mb-6 text-left rounded-2xl p-4 flex items-center gap-4 border transition-transform hover:scale-[1.01]"
      style={{
        background:
          "linear-gradient(135deg, rgba(232,163,61,0.12), rgba(31,122,108,0.10))",
        borderColor: "rgba(232,163,61,0.3)",
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--marigold)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 11l3 3L22 4M2 12a10 10 0 1010-10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex-1">
        <div
          className={
            "font-display font-bold text-sm " + (lang === "te" ? "font-te" : "")
          }
        >
          {t.weeklyCheck}
        </div>
        <div
          className={
            "text-xs text-[var(--muted)] " + (lang === "te" ? "font-te" : "")
          }
        >
          {t.weeklyCheckSub}
        </div>
      </div>

      <span
        className="badge text-xs font-bold px-3 py-2 rounded-full text-white flex-shrink-0"
        style={{ background: "var(--marigold-deep)" }}
      >
        {t.startQuiz}
      </span>
    </button>
  );
}

export default WeeklyCheckIn;
