import React from "react";
import { T } from "../../data/translations";

export function QuizResult({ lang, passed, remedialText, onContinue }) {
  const t = T[lang] || T.en;

  if (passed) {
    return (
      <div className="py-4 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(31,122,108,0.12)" }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12l5 5L20 6"
              stroke="var(--teal)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          className={
            "font-display font-bold text-xl mb-2 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {t.quizResultPassTitle}
        </h3>
        <p
          className={
            "text-sm text-[var(--muted)] mb-7 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {t.quizResultPassSub}
        </p>
        <button
          type="button"
          onClick={() => onContinue(true, null)}
          className="btn w-full py-3.5 rounded-xl font-bold text-white"
          style={{ background: "var(--teal)" }}
        >
          {t.continueDash}
        </button>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ background: "rgba(232,163,61,0.14)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 8v5m0 3h.01"
            stroke="var(--marigold-deep)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="var(--marigold-deep)"
            strokeWidth="1.8"
          />
        </svg>
      </div>
      <h3
        className={
          "font-display font-bold text-xl mb-2 text-center " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.quizResultFailTitle}
      </h3>
      <p
        className={
          "text-sm text-[var(--muted)] mb-4 text-center " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.quizResultFailSub}
      </p>
      <div className="bg-black/[0.03] rounded-xl p-4 mb-6">
        <p
          className={
            "text-sm leading-relaxed " + (lang === "te" ? "font-te" : "")
          }
        >
          {remedialText}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onContinue(false, remedialText)}
        className="btn w-full py-3.5 rounded-xl font-bold text-white"
        style={{ background: "var(--teal)" }}
      >
        {t.continueDash}
      </button>
    </div>
  );
}

export default QuizResult;
