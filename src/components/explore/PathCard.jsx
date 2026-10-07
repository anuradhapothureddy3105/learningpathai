import React from "react";
import { T } from "../../data/translations";
import { BRANCH_THEME } from "../../data/branchThemes";

export function PathCard({
  lang,
  pathKey,
  path,
  selected = false,
  onSelect,
  onDetails,
}) {
  const t = T[lang] || T.en;
  const theme = BRANCH_THEME[path.branch] || BRANCH_THEME.core;

  return (
    <div
      className={
        "card card-hover shadow-sm bg-white rounded-2xl border-2 p-4 flex flex-col h-100 " +
        (selected ? "border-[var(--teal)]" : "border-black/10")
      }
    >
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-lg">{theme.icon}</span>
        <span
          className="badge rounded-pill text-[10px] font-bold uppercase tracking-wide px-2 py-1"
          style={{ background: theme.color + "22", color: theme.deep }}
        >
          {lang === "te" ? theme.te : theme.en}
        </span>
        <span
          className="badge ml-auto text-[9px] font-bold uppercase tracking-wide px-1.5 py-1 rounded bg-black/5 text-[var(--muted)]"
          style={{ marginLeft: "auto" }}
        >
          {path.degree === "btech" ? "BTech" : "MTech"}
        </span>
      </div>

      <h3
        className={
          "font-display font-bold text-[15px] leading-snug mb-1 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {lang === "te" ? path.title_te : path.title_en}
      </h3>

      <p
        className={
          "text-xs text-[var(--muted)] leading-relaxed mb-3 flex-1 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {lang === "te" ? path.tagline_te : path.tagline_en}
      </p>

      <div className="flex items-center gap-2 mb-3 text-[11px] text-[var(--muted)]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 7v5l3 3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        <span>{lang === "te" ? path.timeline_te : path.timeline_en}</span>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onDetails(pathKey)}
          className="btn flex-1 text-xs font-semibold py-2 rounded-lg border border-black/10 hover:bg-black/[0.03]"
        >
          {t.viewDetails}
        </button>
        <button
          type="button"
          onClick={() => onSelect(pathKey)}
          className="btn flex-1 text-xs font-bold py-2 rounded-lg text-white"
          style={{ background: selected ? "var(--teal)" : theme.deep }}
        >
          {selected ? "✓ " + t.statusDone : t.choosePath}
        </button>
      </div>
    </div>
  );
}

export default PathCard;
