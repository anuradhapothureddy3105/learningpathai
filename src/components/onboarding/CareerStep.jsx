import React from "react";
import { T } from "../../data/translations";
import { PATHS } from "../../data/paths";
import ExplorePaths from "../explore/ExplorePaths";

export function CareerStep({ lang, pathKey, onSelectPath }) {
  const t = T[lang] || T.en;

  return (
    <div>
      <label
        className={
          "block text-sm font-semibold mb-1 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.obCareerQ}
      </label>
      <p
        className={
          "text-xs text-[var(--muted)] mb-4 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.obCareerSub}
      </p>

      {pathKey && PATHS[pathKey] && (
        <div className="flex items-center gap-2 mb-4 bg-[var(--teal)]/10 border border-[var(--teal)]/25 rounded-xl px-4 py-2.5 fade-in">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12l5 5L20 6"
              stroke="var(--teal-deep)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={
              "text-xs font-semibold text-[var(--teal-deep)] " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.obPathConfirmed}:{" "}
            {lang === "te" ? PATHS[pathKey].title_te : PATHS[pathKey].title_en} —{" "}
            {lang === "te"
              ? "తదుపరి దశకు వెళ్తోంది…"
              : "taking you to the next step…"}
          </span>
        </div>
      )}

      <ExplorePaths
        lang={lang}
        embedded={true}
        selectedKey={pathKey}
        onChoose={onSelectPath}
        onBack={() => {}}
        setLang={() => {}}
      />
    </div>
  );
}

export default CareerStep;
