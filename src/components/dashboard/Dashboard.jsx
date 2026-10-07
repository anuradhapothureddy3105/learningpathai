import React, { useState, useMemo } from "react";
import { T } from "../../data/translations";
import { QUIZ_BANK } from "../../data/quizData";
import { calculateProgress } from "../../utils/helpers";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Progress from "./Progress";
import LearningPath from "./LearningPath";
import TopicModal from "./TopicModal";
import WeeklyCheckIn from "../quiz/WeeklyCheckIn";
import QuizModal from "../quiz/QuizModal";
import AIMentor from "../mentor/AIMentor";

export function Dashboard({
  lang,
  setLang,
  user,
  roadmap,
  setRoadmap,
  visited = {},
  trackVisit = () => {},
  onSignOut,
  onExplore,
}) {
  const t = T[lang] || T.en;
  const [activeNode, setActiveNode] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [lastScore, setLastScore] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  const progress = calculateProgress(roadmap);
  const currentNode =
    roadmap.find((n) => n.status === "available") ||
    roadmap.find((n) => n.status === "done") ||
    roadmap[0] ||
    null;

  const markComplete = (id) => {
    setRoadmap((prev) => {
      const idx = prev.findIndex((n) => n.id === id);
      return prev.map((n, i) => {
        if (n.id === id) return { ...n, status: "done" };
        if (i === idx + 1 && n.status === "locked") return { ...n, status: "available" };
        return n;
      });
    });
    setActiveNode((prev) => (prev ? { ...prev, status: "done" } : prev));
  };

  const quizAvailable =
    progress.doneCount > 0 &&
    progress.doneCount % 2 === 0 &&
    progress.doneCount < roadmap.length;

  const quizQuestions = useMemo(() => {
    if (!currentNode) return QUIZ_BANK.default;
    return QUIZ_BANK[currentNode.id] || QUIZ_BANK.default;
  }, [currentNode]);

  const handleQuizFinish = (passed, remedialText) => {
    setLastScore(passed ? 1 : 0.3);
    if (!passed) {
      setRoadmap((prev) => {
        const idx = prev.findIndex((n) => n.status === "available");
        const insertAt = idx === -1 ? prev.length : idx;
        const remedialNode = {
          id: "remedial-" + Date.now(),
          title_en: "Catch-up: " + (currentNode ? currentNode.title_en : ""),
          title_te: "క్యాచ్-అప్: " + (currentNode ? currentNode.title_te : ""),
          type: "internal",
          desc_en:
            remedialText ||
            "A short focused lesson to close the gap before you move forward.",
          desc_te:
            remedialText ||
            "ముందుకు వెళ్లే ముందు గ్యాప్‌ను పూరించడానికి ఒక చిన్న ఫోకస్డ్ పాఠం.",
          status: "available",
          remedial: true,
        };
        const copy = [...prev];
        copy.splice(insertAt, 0, remedialNode);
        return copy;
      });
    }
    setQuizOpen(false);
  };

  return (
    <div className="min-h-screen bg-[var(--parchment)] pb-32">
      <Header
        lang={lang}
        setLang={setLang}
        showExplore={true}
        showSignOut={true}
        onExplore={onExplore}
        onSignOut={onSignOut}
      />

      <main className="container-md px-3 pt-4">
        <div className="fade-in mb-4">
          <h1
            className={
              "font-display font-extrabold display-6 mb-1 " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.dashGreeting}, {user?.name} 👋
          </h1>
          <p
            className={
              "text-sm text-[var(--muted)] " + (lang === "te" ? "font-te" : "")
            }
          >
            {t.dashSub}
          </p>
        </div>

        <Progress lang={lang} user={user} progress={progress} />

        {quizAvailable && (
          <WeeklyCheckIn lang={lang} onStart={() => setQuizOpen(true)} />
        )}

        <div className="flex items-center justify-between mb-4">
          <h2
            className={
              "font-display font-bold text-lg " +
              (lang === "te" ? "font-te" : "")
            }
          >
            {t.yourPath}
          </h2>
          <button
            type="button"
            onClick={onExplore}
            className="sm:hidden text-xs font-semibold text-[var(--teal-deep)] btn p-0 border-0 shadow-none"
          >
            {t.explorePaths}
          </button>
        </div>

        <LearningPath lang={lang} nodes={roadmap} onOpen={setActiveNode} />

        <Footer lang={lang} />
      </main>

      {activeNode && (
        <TopicModal
          lang={lang}
          node={activeNode}
          onClose={() => setActiveNode(null)}
          onComplete={markComplete}
          onVisit={trackVisit}
          visited={visited}
        />
      )}

      {quizOpen && (
        <QuizModal
          lang={lang}
          questions={quizQuestions}
          currentNodeTitle={
            currentNode
              ? lang === "te"
                ? currentNode.title_te
                : currentNode.title_en
              : ""
          }
          onClose={() => setQuizOpen(false)}
          onFinish={handleQuizFinish}
        />
      )}

      <AIMentor
        lang={lang}
        user={user}
        currentNode={currentNode}
        lastScore={lastScore}
        history={chatHistory}
        setHistory={setChatHistory}
      />
    </div>
  );
}

export default Dashboard;
