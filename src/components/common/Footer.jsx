import React from "react";
import { T } from "../../data/translations";

export function Footer({ lang, dark = false }) {
  const t = T[lang] || T.en;

  if (dark) {
    return (
      <footer className="relative z-10 container-xl px-3 pb-4 text-white-50 small">
        {t.trust}
      </footer>
    );
  }

  return (
    <footer className="text-center text-xs text-[var(--muted)] mt-10 mb-2 font-normal">
      {t.footerTag}
    </footer>
  );
}

export default Footer;
