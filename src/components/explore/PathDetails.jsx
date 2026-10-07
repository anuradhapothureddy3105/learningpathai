import React from "react";
import { T } from "../../data/translations";
import { PATHS } from "../../data/paths";
import { BRANCH_THEME } from "../../data/branchThemes";

export function PathDetails({ lang, pathKey, onClose, onChoose }) {
  const t = T[lang] || T.en;
  if (!pathKey) return null;

  const path = PATHS[pathKey];
  if (!path) return null;

  const theme = BRANCH_THEME[path.branch] || BRANCH_THEME.core;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 px-0 sm:px-5"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 max-h-[88vh] overflow-y-auto scrollbar-none fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">{theme.icon}</span>
          <span
            className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
            style={{ background: theme.color + "22", color: theme.deep }}
          >
            {lang === "te" ? theme.te : theme.en} ·{" "}
            {path.degree === "btech" ? "BTech" : "MTech"}
          </span>
        </div>

        <h3
          className={
            "font-display font-bold text-2xl mb-1.5 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {lang === "te" ? path.title_te : path.title_en}
        </h3>

        <p
          className={
            "text-sm text-[var(--muted)] leading-relaxed mb-5 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {lang === "te" ? path.desc_te : path.desc_en}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-black/[0.03] rounded-xl p-3">
            <div
              className={
                "text-[10px] font-bold uppercase tracking-wide text-[var(--muted)] mb-1 " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {t.timelineLabel}
            </div>
            <div
              className={
                "text-sm font-semibold " + (lang === "te" ? "font-te" : "")
              }
            >
              {lang === "te" ? path.timeline_te : path.timeline_en}
            </div>
          </div>
          <div className="bg-black/[0.03] rounded-xl p-3">
            <div
              className={
                "text-[10px] font-bold uppercase tracking-wide text-[var(--muted)] mb-1 " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {t.salaryLabel}
            </div>
            <div
              className={
                "text-sm font-semibold " + (lang === "te" ? "font-te" : "")
              }
            >
              {lang === "te" ? path.salary_te : path.salary_en}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div
            className={
              "text-[10px] font-bold uppercase tracking-wide text-[var(--muted)] mb-2 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.rolesLabel}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {path.roles.map((r, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: theme.color + "18", color: theme.deep }}
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div
            className={
              "text-[10px] font-bold uppercase tracking-wide text-[var(--muted)] mb-2 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.skillsLabel}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {path.skills.map((s, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/5 text-[var(--ink)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div
            className={
              "text-[10px] font-bold uppercase tracking-wide text-[var(--muted)] mb-2 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.recruitersLabel}
          </div>
          <div
            className={
              "text-sm text-[var(--muted)] " + (lang === "te" ? "font-te" : "")
            }
          >
            {path.recruiters.join(" · ")}
          </div>
        </div>

        <div className="mb-6">
          <div
            className={
              "text-[10px] font-bold uppercase tracking-wide text-[var(--muted)] mb-2 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.yourPath}
          </div>
          <div className="flex flex-col gap-1.5">
            {path.nodes.map((n, i) => (
              <div key={n.id} className="flex items-center gap-2.5 text-sm">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                  style={{ background: theme.color + "22", color: theme.deep }}
                >
                  {i + 1}
                </span>
                <span className={lang === "te" ? "font-te" : ""}>
                  {lang === "te" ? n.title_te : n.title_en}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => onChoose(pathKey)}
            className="btn py-3 rounded-xl font-bold text-white text-sm"
            style={{ background: theme.deep }}
          >
            {t.choosePath}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn py-2 rounded-xl font-semibold text-sm text-[var(--muted)] border-0 shadow-none"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PathDetails;
