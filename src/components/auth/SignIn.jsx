import React from "react";
import { T } from "../../data/translations";

export function SignIn({ lang, phone, setPhone, onSendOtp }) {
  const t = T[lang] || T.en;

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(cleaned);
  };

  return (
    <div>
      <h2
        className={
          "font-display font-bold text-2xl mb-1.5 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.authTitle}
      </h2>
      <p
        className={
          "text-sm text-[var(--muted)] mb-6 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.authSub}
      </p>

      <label
        htmlFor="phone-input"
        className={
          "block text-xs font-semibold text-[var(--muted)] mb-1.5 " +
          (lang === "te" ? "font-te" : "")
        }
      >
        {t.phoneLabel}
      </label>

      <div className="flex items-center gap-2 border border-black/10 rounded-xl px-3 py-3 mb-6 focus-within:border-[var(--teal)] bg-white">
        <span className="text-sm text-[var(--muted)] font-medium">+91</span>
        <input
          id="phone-input"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder={t.phonePlaceholder}
          className="form-control border-0 shadow-none flex-1 text-sm bg-transparent p-0"
          autoFocus
        />
      </div>

      <button
        type="button"
        disabled={phone.length !== 10}
        onClick={onSendOtp}
        className="btn w-full py-3.5 rounded-xl font-bold text-white disabled:opacity-40 transition-opacity"
        style={{ background: "var(--teal)" }}
      >
        {t.sendOtp}
      </button>
    </div>
  );
}

export default SignIn;
