import React from "react";

export function QuizQuestion({
  lang,
  question,
  index,
  selectedAnswer,
  onSelectOption,
}) {
  const qText = lang === "te" ? question.q_te : question.q_en;

  return (
    <div>
      <p
        className={
          "font-semibold text-sm mb-2.5 " + (lang === "te" ? "font-te" : "")
        }
      >
        {index + 1}. {qText}
      </p>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, oi) => {
          const isSelected = selectedAnswer === oi;
          return (
            <button
              key={oi}
              type="button"
              onClick={() => onSelectOption(oi)}
              className={
                "btn text-left px-3.5 py-2.5 rounded-lg border text-sm transition-all " +
                (isSelected
                  ? "border-[var(--teal)] bg-[var(--teal)]/5 font-semibold"
                  : "border-black/10 hover:border-black/20")
              }
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuizQuestion;
