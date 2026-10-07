import React, { useState } from "react";
import { T } from "../../data/translations";
import { PATHS, PATH_KEYS } from "../../data/paths";
import { BRANCH_THEME } from "../../data/branchThemes";
import { Header } from "../common/Header";
import PathCard from "./PathCard";
import PathDetails from "./PathDetails";
import PathFilters from "./PathFilters";

export function ExplorePaths({
  lang,
  setLang,
  onChoose,
  onBack,
  embedded = false,
  selectedKey = null,
}) {
  const t = T[lang] || T.en;
  const [filter, setFilter] = useState("all");
  const [detailKey, setDetailKey] = useState(null);

  const filteredKeys = PATH_KEYS.filter(
    (k) => filter === "all" || PATHS[k].degree === filter
  );

  const groups = {};
  filteredKeys.forEach((k) => {
    const branch = PATHS[k].branch;
    if (!groups[branch]) groups[branch] = [];
    groups[branch].push(k);
  });

  return (
    <div className={embedded ? "" : "min-h-screen bg-[var(--parchment)] pb-16"}>
      {!embedded && (
        <Header lang={lang} setLang={setLang} onBack={onBack} />
      )}

      <div className={embedded ? "" : "container-xl px-3 pt-4"}>
        {!embedded && (
          <div className="mb-4 fade-in">
            <h1
              className={
                "font-display font-extrabold display-6 mb-2 " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {t.exploreTitle}
            </h1>
            <p
              className={
                "text-sm text-[var(--muted)] max-w-xl " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {t.exploreSub}
            </p>
          </div>
        )}

        <PathFilters
          lang={lang}
          activeFilter={filter}
          onFilterChange={setFilter}
          totalCount={filteredKeys.length}
        />

        {Object.keys(groups).map((branchKey) => {
          const theme = BRANCH_THEME[branchKey] || BRANCH_THEME.core;
          return (
            <div key={branchKey} className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">{theme.icon}</span>
                <h2
                  className={
                    "font-display font-bold text-sm uppercase tracking-wide " +
                    (lang === "te" ? "font-te" : "")
                  }
                  style={{ color: theme.deep }}
                >
                  {lang === "te" ? theme.te : theme.en}
                </h2>
                <div className="flex-1 h-px bg-black/5" />
              </div>

              <div className="row g-3">
                {groups[branchKey].map((k) => (
                  <div className="col-12 col-sm-6 col-lg-4" key={k}>
                    <PathCard
                      lang={lang}
                      pathKey={k}
                      path={PATHS[k]}
                      selected={selectedKey === k}
                      onDetails={setDetailKey}
                      onSelect={onChoose}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {detailKey && (
        <PathDetails
          lang={lang}
          pathKey={detailKey}
          onClose={() => setDetailKey(null)}
          onChoose={(k) => {
            setDetailKey(null);
            onChoose(k);
          }}
        />
      )}
    </div>
  );
}

export default ExplorePaths;
