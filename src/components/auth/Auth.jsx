import React, { useState } from "react";
import { T } from "../../data/translations";
import { Logo } from "../common/Header";
import SignIn from "./SignIn";
import OtpVerification from "./OtpVerification";

export function Auth({ lang, onDone, onBack }) {
  const t = T[lang] || T.en;
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleBack = () => {
    if (step === "otp") {
      setStep("phone");
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-[var(--parchment)] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-sm fade-in">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handleBack}
            className="btn text-sm font-semibold text-[var(--muted)] flex items-center gap-1 p-0 border-0 shadow-none"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.back}
          </button>
          <Logo />
        </div>

        <div className="bg-white rounded-3xl border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-7">
          {step === "phone" ? (
            <SignIn
              lang={lang}
              phone={phone}
              setPhone={setPhone}
              onSendOtp={() => setStep("otp")}
            />
          ) : (
            <OtpVerification
              lang={lang}
              phone={phone}
              otp={otp}
              setOtp={setOtp}
              onVerify={onDone}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
