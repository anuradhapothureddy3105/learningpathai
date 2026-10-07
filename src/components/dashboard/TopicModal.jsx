import React from "react";
import { T } from "../../data/translations";
import { suggestedResources } from "../../utils/helpers";

export function TopicModal({
  lang,
  node,
  onClose,
  onComplete,
  onVisit,
  visited,
}) {
  const t = T[lang] || T.en;
  if (!node) return null;

  const title = lang === "te" ? node.title_te : node.title_en;
  const desc = lang === "te" ? node.desc_te : node.desc_en;
  const done = node.status === "done";
  const wasVisited = !!(visited && visited[node.id]);
  const resources = suggestedResources(node, lang);

  const openLink = (url) => {
    if (onVisit) onVisit(node.id);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-0 sm:px-5"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 fade-in scrollbar-none"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {node.remedial && (
          <span
            className="badge inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2"
            style={{
              background: "rgba(226,87,76,0.12)",
              color: "var(--coral)",
            }}
          >
            {t.remedialTag}
          </span>
        )}
        <h3
          className={
            "font-display font-bold text-xl mb-2 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {title}
        </h3>
        <p
          className={
            "text-sm text-[var(--muted)] leading-relaxed mb-4 " +
            (lang === "te" ? "font-te" : "")
          }
        >
          {desc}
        </p>

        {node.type === "external" && (
          <div className="mb-4 bg-black/[0.03] rounded-xl p-3 flex items-start gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--muted)] mt-0.5 flex-shrink-0"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M12 8v5m0 3h.01"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <p
              className={
                "text-xs text-[var(--muted)] " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {t.resourceExternalNote}
            </p>
          </div>
        )}

        {node.type === "external" && (
          <button
            type="button"
            onClick={() => openLink(node.link)}
            className="btn w-full text-center py-3 rounded-xl font-bold text-white text-sm mb-2.5"
            style={{ background: "var(--night)" }}
          >
            {t.openResource} ↗
          </button>
        )}

        {wasVisited && (
          <div
            className="flex items-center gap-1.5 text-[11px] font-semibold mb-3"
            style={{ color: "var(--teal-deep)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12l5 5L20 6"
                stroke="var(--teal-deep)"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={lang === "te" ? "font-te" : ""}>
              {lang === "te"
                ? "మీరు ఈ టాపిక్ కోసం ఒక వనరు తెరిచారు"
                : "You've opened a resource for this topic"}
            </span>
          </div>
        )}

        <div className="mb-5">
          <div
            className={
              "text-[10px] font-bold uppercase tracking-wide text-[var(--muted)] mb-2 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {lang === "te"
              ? "సూచించిన లెర్నింగ్ వెబ్‌సైట్‌లు"
              : "Suggested learning websites"}
          </div>
          <div className="list-group">
            {resources.map((r, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openLink(r.url)}
                className="list-group-item list-group-item-action d-flex align-items-center justify-content-between text-sm py-2.5 px-3 mb-1.5 rounded-xl border border-black/10 text-start"
              >
                <span
                  className={
                    "font-medium " + (lang === "te" ? "font-te" : "")
                  }
                >
                  {lang === "te" ? r.name_te : r.name_en}
                </span>
                <span className="text-[var(--muted)]">↗</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => onComplete(node.id)}
            disabled={done}
            className="btn py-3 rounded-xl font-bold text-sm disabled:opacity-60"
            style={{
              background: done ? "rgba(31,122,108,0.12)" : "var(--teal)",
              color: done ? "var(--teal-deep)" : "white",
            }}
          >
            {done ? t.completed : t.markComplete}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn py-2 rounded-xl font-semibold text-sm text-[var(--muted)] border-0 shadow-none"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopicModal;
