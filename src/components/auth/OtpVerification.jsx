import React from "react";
import { T } from "../../data/translations";

export function OtpVerification({ lang, phone, otp, setOtp, onVerify }) {
  const t = T[lang] || T.en;

  const handleOtpChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(cleaned);
  };

  return (
    <div>
      <h2
        className={
          "font-display font-bold text-2xl mb-1.5 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.otpLabel}
      </h2>
      <p className="text-sm text-[var(--muted)] mb-1">
        {t.otpSub} <span className="font-semibold text-[var(--ink)]">+91 {phone}</span>
      </p>
      <p className="text-xs text-[var(--muted)] mb-6 italic">{t.otpHint}</p>

      <input
        type="text"
        inputMode="numeric"
        value={otp}
        onChange={handleOtpChange}
        placeholder="••••••"
        maxLength={6}
        className="form-control w-full text-center tracking-[0.5em] text-xl font-bold border border-black/10 rounded-xl px-3 py-3.5 mb-6 focus:border-[var(--teal)] bg-white"
        autoFocus
      />

      <button
        type="button"
        disabled={otp.length !== 6}
        onClick={onVerify}
        className="btn w-full py-3.5 rounded-xl font-bold text-white disabled:opacity-40 transition-opacity"
        style={{ background: "var(--teal)" }}
      >
        {t.verify}
      </button>
    </div>
  );
}

export default OtpVerification;
