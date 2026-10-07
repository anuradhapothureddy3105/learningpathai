import React from "react";
import { T } from "../../data/translations";

export function LearningNode({ lang, node, index, onOpen }) {
  const t = T[lang] || T.en;
  const done = node.status === "done";
  const locked = node.status === "locked";
  const title = lang === "te" ? node.title_te : node.title_en;

  return (
    <div
      className="relative flex items-start gap-4 fade-in"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div
        className={
          "relative z-10 mt-1 w-[58px] h-[58px] rounded-2xl flex items-center justify-center flex-shrink-0 border-2 transition-all " +
          (done
            ? "bg-[var(--teal)] border-[var(--teal)]"
            : locked
            ? "bg-white border-black/10"
            : "bg-white border-[var(--marigold)] path-glow")
        }
      >
        {done ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12l5 5L20 6"
              stroke="white"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : locked ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[var(--muted)]"
          >
            <rect
              x="5"
              y="11"
              width="14"
              height="9"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 11V8a4 4 0 018 0v3"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        ) : (
          <span
            className="font-display font-extrabold text-lg"
            style={{ color: "var(--marigold-deep)" }}
          >
            {index + 1}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => !locked && onOpen(node)}
        disabled={locked}
        className={
          "btn flex-1 text-left rounded-2xl border p-4 transition-all mb-1 " +
          (locked
            ? "bg-black/[0.02] border-black/5 cursor-not-allowed"
            : done
            ? "bg-[var(--teal)]/[0.06] border-[var(--teal)]/20 hover:border-[var(--teal)]/40"
            : "bg-white border-black/10 hover:border-[var(--marigold)] hover:shadow-md")
        }
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            {node.remedial && (
              <span
                className={
                  "inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1.5 " +
                  (lang === "te" ? "font-te" : "")
                }
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
                "font-display font-bold text-[15px] leading-snug " +
                (locked ? "text-[var(--muted)]" : "text-[var(--ink)]") +
                (lang === "te" ? " font-te" : "")
              }
            >
              {title}
            </h3>
          </div>
          <span
            className={
              "badge text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full flex-shrink-0 " +
              (done
                ? "bg-[var(--teal)]/15 text-[var(--teal-deep)]"
                : locked
                ? "bg-black/5 text-[var(--muted)]"
                : "bg-[var(--marigold)]/15 text-[var(--marigold-deep)]") +
              (lang === "te" ? " font-te" : "")
            }
          >
            {done
              ? t.statusDone
              : locked
              ? t.statusLocked
              : t.statusAvailable}
          </span>
        </div>
      </button>
    </div>
  );
}

export default LearningNode;
