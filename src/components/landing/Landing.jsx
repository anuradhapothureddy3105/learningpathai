import React from "react";
import { T } from "../../data/translations";
import Header from "../common/Header";
import Footer from "../common/Footer";

export function Landing({ lang, setLang, onStart, onExplore }) {
  const t = T[lang] || T.en;

  return (
    <div className="min-h-screen bg-night bg-noise grain relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-50 650 C 200 550, 350 750, 600 600 S 950 450, 1250 550"
            stroke="var(--marigold)"
            strokeWidth="2"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M-50 500 C 250 400, 400 600, 650 480 S 1000 350, 1250 420"
            stroke="var(--teal)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.25"
          />
        </svg>
      </div>

      <Header
        lang={lang}
        setLang={setLang}
        dark={true}
        showSignIn={true}
        onSignIn={() => onStart("auth")}
      />

      <main className="relative z-10 container-xl px-3 pt-4 pt-sm-5 pb-5">
        <div className="fade-in" style={{ maxWidth: "640px" }}>
          <span
            className="badge rounded-pill text-bg-dark border border-white/10 px-3 py-2 mb-4 d-inline-flex align-items-center gap-2"
            style={{ color: "var(--marigold)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--marigold)]" />
            SASI IDEA Lab · 2026
          </span>

          <h1
            className={
              "font-display font-extrabold text-white display-5 lh-sm mb-4 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.heroTitle}
          </h1>

          <p
            className={
              "text-white-50 fs-5 lh-base mb-4 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.heroSub}
          </p>

          <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
            <button
              type="button"
              onClick={() => onStart("auth")}
              className="btn btn-lg rounded-pill fw-bold px-4 py-3 pulse-ring transition-transform hover:scale-[1.02]"
              style={{ background: "var(--marigold)", color: "var(--night)" }}
            >
              {t.getStarted}
            </button>
            <button
              type="button"
              onClick={() => onStart("auth")}
              className="btn btn-outline-light btn-lg rounded-pill d-sm-none px-4 py-3"
            >
              {t.signIn}
            </button>
          </div>

          <button
            type="button"
            onClick={onExplore}
            className="btn btn-dark border border-white/10 w-100 text-start d-flex align-items-center gap-3 rounded-4 px-4 py-3 mb-5"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(31,122,108,0.25)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6M4 6c4 0 6 8 4 12M20 6c-4 0-6 8-4 12"
                  stroke="var(--marigold)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div
                className={
                  "text-white fw-semibold " + (lang === "te" ? "font-te" : "")
                }
              >
                {t.exploreCta}
              </div>
              <div
                className={
                  "text-white-50 small " + (lang === "te" ? "font-te" : "")
                }
              >
                {t.exploreCtaSub}
              </div>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="ms-auto text-white-50 flex-shrink-0"
            >
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="row g-3">
            {[t.heroPoint1, t.heroPoint2, t.heroPoint3].map((p, i) => (
              <div key={i} className="col-12 col-sm-4">
                <div className="card bg-dark border border-white/10 h-100 rounded-4">
                  <div className="card-body d-flex align-items-start gap-2 text-white-50 small">
                    <span className="mt-0.5 text-[var(--teal)] flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 12l5 5L20 6"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={lang === "te" ? "font-te" : ""}>{p}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer lang={lang} dark={true} />
    </div>
  );
}

export default Landing;
