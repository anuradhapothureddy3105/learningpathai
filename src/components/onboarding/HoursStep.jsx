import React from "react";
import { T } from "../../data/translations";
import { MIN_STUDY_HOURS, MAX_STUDY_HOURS } from "../../utils/constants";

export function HoursStep({ lang, hours, setHours }) {
  const t = T[lang] || T.en;

  return (
    <div className="max-w-xl">
      <label
        htmlFor="hours-slider"
        className={
          "block text-sm font-semibold mb-1 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.obHoursQ}
      </label>
      <p
        className={
          "text-xs text-[var(--muted)] mb-5 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.obHoursSub}
      </p>

      <div className="bg-white border border-black/10 rounded-xl p-5">
        <div className="text-center mb-4">
          <span
            className="font-display font-extrabold text-4xl"
            style={{ color: "var(--marigold-deep)" }}
          >
            {hours}
          </span>
          <span className="text-sm text-[var(--muted)] ml-2">{t.weekHours}</span>
        </div>
        <input
          id="hours-slider"
          type="range"
          min={MIN_STUDY_HOURS}
          max={MAX_STUDY_HOURS}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="form-range w-full accent-[var(--teal)]"
        />
        <div className="flex justify-between text-xs text-[var(--muted)] mt-1">
          <span>{MIN_STUDY_HOURS}</span>
          <span>{MAX_STUDY_HOURS}</span>
        </div>
      </div>
    </div>
  );
}

export default HoursStep;
