import { useState, useCallback } from "react";
import { T } from "../data/translations";

export function useLanguage(initialLang = "en") {
  const [lang, setLangState] = useState(initialLang);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "te" : "en"));
  }, []);

  const setLang = useCallback((newLang) => {
    if (newLang === "en" || newLang === "te") {
      setLangState(newLang);
    }
  }, []);

  const t = T[lang] || T.en;

  return {
    lang,
    setLang,
    toggleLang,
    t,
  };
}

export default useLanguage;
