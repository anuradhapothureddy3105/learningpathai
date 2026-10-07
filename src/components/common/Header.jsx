import React from "react";
import { T } from "../../data/translations";

export function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "linear-gradient(135deg,var(--marigold),var(--teal))" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 13l7-9 5 3 6-4-3 9-6 4-3-2-6 3z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="17" cy="7" r="1.6" fill="white" />
        </svg>
      </div>
      <div className="leading-none">
        <div
          className={
            "font-display font-extrabold text-lg " +
            (dark ? "text-white" : "text-[var(--ink)]")
          }
        >
          Sky Route
        </div>
      </div>
    </div>
  );
}

export function LangSwitch({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "te" : "en")}
      className="btn flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border border-black/10 bg-white/70 hover:bg-white transition-colors flex-shrink-0"
      title="Switch Language"
      type="button"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5h9M9 3v2m-1 0c0 4-2 8-6 10m2-4c1.5 1.5 4 3 7 3.5M13 21l4-9 4 9m-6.5-3h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {lang === "en" ? "తెలుగు" : "English"}
    </button>
  );
}

export function Header({
  lang,
  setLang,
  dark = false,
  onExplore,
  onSignOut,
  onSignIn,
  onBack,
  showExplore = false,
  showSignOut = false,
  showSignIn = false,
}) {
  const t = T[lang] || T.en;

  if (dark) {
    return (
      <nav className="navbar navbar-dark relative z-10 px-3">
        <div className="container-xl d-flex align-items-center justify-content-between py-3">
          <Logo dark={true} />
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "te" : "en")}
              className="btn btn-outline-light btn-sm rounded-pill px-3"
            >
              {lang === "en" ? "తెలుగు" : "English"}
            </button>
            {showSignIn && (
              <button
                onClick={onSignIn}
                className="btn btn-outline-light btn-sm rounded-pill px-3 d-none d-sm-inline-block"
              >
                {t.signIn}
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-light bg-white sticky-top shadow-sm border-bottom">
      <div className="container-md d-flex align-items-center justify-content-between gap-2 py-2">
        {onBack ? (
          <button
            onClick={onBack}
            className="btn btn-light rounded-pill d-flex align-items-center gap-2 border-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Logo />
          </button>
        ) : (
          <Logo />
        )}

        <div className="d-flex align-items-center gap-1">
          {showExplore && onExplore && (
            <button
              onClick={onExplore}
              className="btn btn-light btn-sm rounded-pill d-none d-sm-flex align-items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.explorePaths}
            </button>
          )}

          <LangSwitch lang={lang} setLang={setLang} />

          {showSignOut && onSignOut && (
            <button
              onClick={onSignOut}
              className="btn btn-light btn-sm rounded-pill"
            >
              {t.signOut}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
