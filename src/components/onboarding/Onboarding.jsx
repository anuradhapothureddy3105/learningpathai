import React, { useState } from "react";
import { T } from "../../data/translations";
import { Logo } from "../common/Header";
import { DEFAULT_STUDY_HOURS } from "../../utils/constants";
import NameStep from "./NameStep";
import CareerStep from "./CareerStep";
import LevelStep from "./LevelStep";
import HoursStep from "./HoursStep";

export function Onboarding({ lang, initialPathKey, onDone }) {
  const t = T[lang] || T.en;
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [pathKey, setPathKey] = useState(initialPathKey || null);
  const [level, setLevel] = useState(null);
  const [hours, setHours] = useState(DEFAULT_STUDY_HOURS);

  const steps = [
    { valid: name.trim().length > 0 },
    { valid: !!pathKey },
    { valid: !!level },
    { valid: true },
  ];

  const next = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onDone({ name, pathKey, level, hours });
    }
  };

  const choosePathAndAdvance = (k) => {
    setPathKey(k);
    setTimeout(() => setStep(2), 450);
  };

  return (
    <div className="min-h-screen bg-[var(--parchment)] px-5 py-8 sm:py-12">
      <div className={"mx-auto " + (step === 1 ? "max-w-4xl" : "max-w-xl")}>
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <span className="text-xs font-semibold text-[var(--muted)]">
            {t.obStep} {step + 1}/4
          </span>
        </div>

        <div
          className="progress mb-8"
          style={{
            height: "6px",
            borderRadius: "999px",
            background: "rgba(0,0,0,0.05)",
          }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${((step + 1) / 4) * 100}%`,
              background: "linear-gradient(90deg,var(--marigold),var(--teal))",
              transition: "width .5s ease",
            }}
            aria-valuenow={((step + 1) / 4) * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>

        <h2
          className={
            "font-display font-bold text-2xl mb-1 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {t.obTitle}
        </h2>
        <p
          className={
            "text-sm text-[var(--muted)] mb-8 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {t.obSub}
        </p>

        <div className="fade-in" key={step}>
          {step === 0 && <NameStep lang={lang} name={name} setName={setName} />}
          {step === 1 && (
            <CareerStep
              lang={lang}
              pathKey={pathKey}
              onSelectPath={choosePathAndAdvance}
            />
          )}
          {step === 2 && (
            <LevelStep lang={lang} level={level} setLevel={setLevel} />
          )}
          {step === 3 && (
            <HoursStep lang={lang} hours={hours} setHours={setHours} />
          )}
        </div>

        <div className={step === 1 ? "max-w-4xl" : "max-w-xl"}>
          <button
            type="button"
            disabled={!steps[step].valid}
            onClick={next}
            className="btn w-full mt-8 py-3.5 rounded-xl font-bold text-white disabled:opacity-40 transition-opacity"
            style={{ background: "var(--teal)" }}
          >
            {step === 3 ? t.finishBtn : t.continueBtn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
