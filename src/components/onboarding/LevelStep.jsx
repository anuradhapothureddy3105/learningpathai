import React from "react";
import { T } from "../../data/translations";

export function LevelStep({ lang, level, setLevel }) {
  const t = T[lang] || T.en;

  const levels = [
    { key: "beginner", label: t.levelBeginner },
    { key: "intermediate", label: t.levelIntermediate },
    { key: "advanced", label: t.levelAdvanced },
  ];

  return (
    <div className="max-w-xl">
      <label
        className={
          "block text-sm font-semibold mb-3 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.obLevelQ}
      </label>
      <div className="flex flex-col gap-3">
        {levels.map((l) => {
          const isSelected = level === l.key;
          return (
            <button
              key={l.key}
              type="button"
              onClick={() => setLevel(l.key)}
              className={
                "text-left p-4 rounded-xl border-2 transition-all " +
                (isSelected
                  ? "border-[var(--teal)] bg-[var(--teal)]/5"
                  : "border-black/10 bg-white hover:border-black/20")
              }
            >
              <span
                className={
                  "font-semibold text-sm " + (lang === "te" ? "font-te" : "")
                }
              >
                {l.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LevelStep;
