import React, { useState } from "react";
import { T } from "../../data/translations";
import { askClaude } from "../../utils/helpers";
import Loading from "../common/Loading";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

export function QuizModal({
  lang,
  questions = [],
  onClose,
  onFinish,
  currentNodeTitle = "",
}) {
  const t = T[lang] || T.en;
  const [answers, setAnswers] = useState({});
  const [phase, setPhase] = useState("quiz"); // quiz | generating | result-pass | result-fail
  const [remedialText, setRemedialText] = useState("");

  const mcqs = questions.filter((q) => q && q.options);

  const handleSubmit = async () => {
    let correct = 0;
    mcqs.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    const pct = mcqs.length ? correct / mcqs.length : 1;

    if (pct >= 0.6) {
      setPhase("result-pass");
    } else {
      setPhase("generating");
      const sys =
        lang === "te"
          ? "మీరు గ్రామీణ ఆంధ్రప్రదేశ్ ఇంజనీరింగ్ విద్యార్థుల కోసం ఒక ప్రశాంతమైన, ప్రోత్సాహకరమైన AI మెంటార్. విద్యార్థి ఒక క్విజ్‌లో విఫలమయ్యారు. తెలుగులో, 4-5 వాక్యాలలో, సరళంగా, తీర్పు తీర్చకుండా, ఒక చిన్న క్యాచ్-అప్ వివరణ ఇవ్వండి."
          : "You are a calm, encouraging AI mentor for rural Andhra Pradesh engineering students. The student just failed a short quiz on a topic. In plain English, in 4-5 sentences, give a short, non-judgmental catch-up explanation of the core idea they likely missed, ending with one word of encouragement.";
      const userMsg = `Topic: ${currentNodeTitle}. Give a short remedial explanation.`;
      const res = await askClaude(sys, userMsg);
      setRemedialText(
        res ||
          (lang === "te"
            ? "పర్వాలేదు, మళ్లీ ప్రయత్నిద్దాం. ఈ టాపిక్‌ను చిన్న భాగాలుగా విడగొట్టి మళ్లీ చూద్దాం."
            : "No worries — let's break this topic into smaller pieces and go through it again, one idea at a time.")
      );
      setPhase("result-fail");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-0 sm:px-5">
      <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 max-h-[88vh] overflow-y-auto scrollbar-none fade-in">
        {phase === "quiz" && (
          <div>
            <h3
              className={
                "font-display font-bold text-xl mb-1 " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {t.quizTitle}
            </h3>
            <p
              className={
                "text-sm text-[var(--muted)] mb-6 " +
                (lang === "te" ? "font-te" : "")
              }
            >
              {t.quizSub}
            </p>

            {mcqs.length === 0 ? (
              <p
                className={
                  "text-sm text-[var(--muted)] mb-6 " +
                  (lang === "te" ? "font-te" : "")
                }
              >
                {lang === "te"
                  ? "ఈ టాపిక్‌కు క్విజ్ లేదు — నేరుగా కొనసాగించవచ్చు."
                  : "No quiz questions for this topic yet — you can continue directly."}
              </p>
            ) : (
              <div className="flex flex-col gap-5 mb-6">
                {mcqs.map((q, i) => (
                  <QuizQuestion
                    key={i}
                    lang={lang}
                    question={q}
                    index={i}
                    selectedAnswer={answers[i]}
                    onSelectOption={(val) =>
                      setAnswers({ ...answers, [i]: val })
                    }
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < mcqs.length}
              className="btn w-full py-3.5 rounded-xl font-bold text-white disabled:opacity-40"
              style={{ background: "var(--teal)" }}
            >
              {t.submitQuiz}
            </button>
          </div>
        )}

        {phase === "generating" && <Loading message={t.generatingHelp} />}

        {phase === "result-pass" && (
          <QuizResult
            lang={lang}
            passed={true}
            remedialText=""
            onContinue={onFinish}
          />
        )}

        {phase === "result-fail" && (
          <QuizResult
            lang={lang}
            passed={false}
            remedialText={remedialText}
            onContinue={onFinish}
          />
        )}
      </div>
    </div>
  );
}

export default QuizModal;
