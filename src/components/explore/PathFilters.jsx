import React from "react";
import { T } from "../../data/translations";

export function PathFilters({ lang, activeFilter, onFilterChange, totalCount }) {
  const t = T[lang] || T.en;

  const filters = [
    { key: "all", label: t.filterAll },
    { key: "btech", label: t.filterBtech },
    { key: "mtech", label: t.filterMtech },
  ];

  return (
    <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-none">
      {filters.map(({ key, label }) => {
        const isActive = activeFilter === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onFilterChange(key)}
            className={
              "btn text-xs font-bold px-4 py-2 rounded-full flex-shrink-0 transition-colors " +
              (isActive
                ? "text-white"
                : "bg-white border border-black/10 text-[var(--muted)]")
            }
            style={isActive ? { background: "var(--night)" } : {}}
          >
            {label}
          </button>
        );
      })}
      <span className="text-xs text-[var(--muted)] ml-1 flex-shrink-0">
        {totalCount} {t.pathsCount}
      </span>
    </div>
  );
}

export default PathFilters;
