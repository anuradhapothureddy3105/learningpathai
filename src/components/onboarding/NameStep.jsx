import React from "react";
import { T } from "../../data/translations";

export function NameStep({ lang, name, setName }) {
  const t = T[lang] || T.en;

  return (
    <div className="max-w-xl">
      <label
        htmlFor="student-name-input"
        className={
          "block text-sm font-semibold mb-3 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.obNameQ}
      </label>
      <input
        id="student-name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t.obNamePlaceholder}
        className="w-full border border-black/10 rounded-xl px-4 py-3.5 text-base bg-white focus:border-[var(--teal)]"
        autoFocus
      />
    </div>
  );
}

export default NameStep;
