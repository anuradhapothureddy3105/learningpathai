import React from "react";
import { T } from "../../data/translations";

export function Progress({ lang, user, progress }) {
  const t = T[lang] || T.en;
  const { percentage = 0, doneCount = 0, totalCount = 0 } = progress || {};

  return (
    <div className="row g-3 mb-3">
      <div className="col-6">
        <div className="bg-white rounded-2xl border border-black/5 p-4 h-100">
          <div
            className={
              "text-xs font-semibold text-[var(--muted)] mb-1.5 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.progress}
          </div>
          <div className="flex items-end gap-2">
            <span
              className="font-display font-extrabold text-3xl"
              style={{ color: "var(--teal-deep)" }}
            >
              {percentage}%
            </span>
            <span
              className={
                "text-xs text-[var(--muted)] mb-1 " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {doneCount}/{totalCount} {t.nodesDone}
            </span>
          </div>
          <div
            className="progress mt-2.5"
            style={{
              height: "8px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${percentage}%`,
                background: "var(--teal)",
                transition: "width .5s ease",
              }}
              aria-valuenow={percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="bg-white rounded-2xl border border-black/5 p-4 h-100 flex flex-col justify-between">
          <div
            className={
              "text-xs font-semibold text-[var(--muted)] mb-1.5 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {user?.careerLabel}
          </div>
          <div className="badge d-inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded-full bg-black/5 w-fit">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="var(--teal)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={lang === "te" ? "font-te" : ""}>
              {t.offlineBadge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
