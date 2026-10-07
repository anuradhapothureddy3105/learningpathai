import React, { useState, useEffect, useRef } from "react";
import { T } from "../../data/translations";
import { askClaude } from "../../utils/helpers";
import ChatMessage from "./ChatMessage";
import VoiceInput from "./VoiceInput";

export function AIMentor({
  lang,
  user,
  currentNode,
  lastScore,
  history = [],
  setHistory,
}) {
  const t = T[lang] || T.en;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [micSupported, setMicSupported] = useState(true);

  const recognitionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMicSupported(false);
      return;
    }
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput((prev) => (prev ? prev + " " : "") + transcript);
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recognitionRef.current = rec;
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, open, loading]);

  const toggleMic = () => {
    if (!micSupported || !recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.lang = lang === "te" ? "te-IN" : "en-IN";
      try {
        recognitionRef.current.start();
        setListening(true);
      } catch (err) {
        setListening(false);
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    const newHistory = [...history, { role: "user", text: userMsg }];
    setHistory(newHistory);
    setInput("");
    setLoading(true);

    const nodeTitle = currentNode
      ? lang === "te"
        ? currentNode.title_te
        : currentNode.title_en
      : "—";

    const userName = user?.name || "Student";
    const userGoal = user?.careerLabel || "Engineering";
    const userLevel = user?.level || "Beginner";
    const formattedScore =
      lastScore == null ? "not taken yet" : Math.round(lastScore * 100) + "%";
    const formattedScoreTe =
      lastScore == null ? "లేదు" : Math.round(lastScore * 100) + "%";

    const sys =
      lang === "te"
        ? `మీరు 'స్కై రూట్' — గ్రామీణ ఆంధ్రప్రదేశ్ ఇంజనీరింగ్ విద్యార్థుల కోసం ఒక వెచ్చని, ఓపికగల AI మెంటార్. విద్యార్థి పేరు ${userName}. వారి లక్ష్యం: ${userGoal}. వారి స్థాయి: ${userLevel}. ప్రస్తుతం చదువుతున్న టాపిక్: ${nodeTitle}. చివరి క్విజ్ స్కోరు: ${formattedScoreTe}. తెలుగు, ఇంగ్లీష్ లేదా రెండూ కలిపిన (Tanglish) ప్రశ్నలకు సహజంగా సమాధానం ఇవ్వండి. చిన్నగా, స్పష్టంగా, ప్రోత్సాహకరంగా సమాధానం ఇవ్వండి — 5-6 వాక్యాల లోపు.`
        : `You are 'Sky Route' — a warm, patient AI mentor for a rural Andhra Pradesh engineering student named ${userName}. Their goal: ${userGoal}. Their level: ${userLevel}. They are currently on the topic: "${nodeTitle}". Last quiz score: ${formattedScore}. Answer naturally even if they mix Telugu and English (Tanglish). Keep answers short, clear, and encouraging — under 6 sentences. Never make the student feel behind or stupid.`;

    const res = await askClaude(sys, userMsg);
    const replyText =
      res ||
      (lang === "te"
        ? "క్షమించండి, ఇప్పుడు కనెక్ట్ కాలేకపోతున్నాను. దయచేసి మళ్లీ ప్రయత్నించండి."
        : "Sorry, I couldn't connect just now. Please try again in a moment.");

    setHistory([...newHistory, { role: "assistant", text: replyText }]);
    setLoading(false);
  };

  const nodeTitle = currentNode
    ? lang === "te"
      ? currentNode.title_te
      : currentNode.title_en
    : null;

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-40 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center pulse-ring transition-transform hover:scale-105 p-0 border-0"
        style={{
          background: "linear-gradient(135deg,var(--marigold),var(--teal))",
        }}
        title="AI Mentor"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4h16v11H8l-4 4V4z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="9.5" r="1" fill="white" />
            <circle cx="12" cy="9.5" r="1" fill="white" />
            <circle cx="15" cy="9.5" r="1" fill="white" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 left-5 sm:left-auto z-40 sm:w-96 h-[68vh] sm:h-[560px] bg-white rounded-3xl shadow-2xl border border-black/5 flex flex-col overflow-hidden fade-in">
          <div
            className="px-5 py-4 flex items-center gap-3 border-b border-black/5"
            style={{ background: "var(--night)" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--marigold)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 18c4-8 8-8 16-14M4 18c2-2 4-3 6-3M20 4c-1 3-2 5-3 7"
                  stroke="var(--night)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div
                className={
                  "text-white font-display font-bold text-sm " +
                  (lang === "te" ? "font-te" : "")
                }
              >
                {t.chatTitle}
              </div>
              {nodeTitle && (
                <div className="text-white/50 text-[11px] truncate">
                  {t.chatContext} {nodeTitle}
                </div>
              )}
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[var(--parchment)]"
          >
            {history.length === 0 && (
              <div
                className={
                  "text-center text-xs text-[var(--muted)] mt-8 px-6 " +
                  (lang === "te" ? "font-te" : "")
                }
              >
                {t.chatEmpty}
              </div>
            )}
            {history.map((m, i) => (
              <ChatMessage key={i} message={m} lang={lang} />
            ))}
            {loading && (
              <div className="self-start bg-white border border-black/5 rounded-2xl rounded-bl-md px-3.5 py-2.5 text-xs text-[var(--muted)]">
                {t.thinking}
              </div>
            )}
          </div>

          {!micSupported && (
            <div className="px-4 py-1.5 text-[10px] text-[var(--muted)] bg-black/[0.02] border-t border-black/5">
              {t.micUnsupported}
            </div>
          )}
          {listening && (
            <div className="px-4 py-1.5 text-[10px] font-semibold text-[var(--coral)] bg-[var(--coral)]/5 border-t border-black/5">
              {t.listening}
            </div>
          )}

          <div className="p-3 border-t border-black/5 flex items-center gap-2 bg-white">
            <VoiceInput
              listening={listening}
              supported={micSupported}
              onToggle={toggleMic}
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder={t.chatPlaceholder}
              className={
                "form-control flex-1 text-sm bg-black/[0.03] rounded-full px-4 py-2.5 border-0 shadow-none " +
                (lang === "te" ? "font-te" : "")
              }
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="btn w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 disabled:opacity-30 p-0 border-0"
              style={{ background: "var(--marigold)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12l16-8-6 8 6 8-16-8z"
                  stroke="var(--night)"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                  fill="var(--night)"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default AIMentor;
