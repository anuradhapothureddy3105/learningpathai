import { useState, useEffect, useCallback } from "react";
import { safeStorage } from "../utils/safeStorage";
import { STORAGE_KEYS } from "../utils/constants";
import { calculateProgress } from "../utils/helpers";

export function useProgress(initialRoadmap = []) {
  const [roadmap, setRoadmap] = useState(initialRoadmap);
  const [visited, setVisited] = useState({});

  useEffect(() => {
    if (initialRoadmap && initialRoadmap.length > 0) {
      setRoadmap(initialRoadmap);
    }
  }, [initialRoadmap]);

  useEffect(() => {
    (async () => {
      try {
        const saved = await safeStorage.get(STORAGE_KEYS.VISITED);
        if (saved && saved.value) {
          setVisited(JSON.parse(saved.value));
        }
      } catch (e) {
        /* nothing tracked yet */
      }
    })();
  }, []);

  const trackVisit = useCallback((nodeId) => {
    setVisited((prev) => {
      const next = { ...prev, [nodeId]: true };
      safeStorage.set(STORAGE_KEYS.VISITED, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const markComplete = useCallback((id) => {
    setRoadmap((prev) => {
      const idx = prev.findIndex((n) => n.id === id);
      return prev.map((n, i) => {
        if (n.id === id) return { ...n, status: "done" };
        if (i === idx + 1 && n.status === "locked") return { ...n, status: "available" };
        return n;
      });
    });
  }, []);

  const addRemedialNode = useCallback((currentNode, remedialText) => {
    setRoadmap((prev) => {
      const idx = prev.findIndex((n) => n.status === "available");
      const insertAt = idx === -1 ? prev.length : idx;
      const remedialNode = {
        id: "remedial-" + Date.now(),
        title_en: "Catch-up: " + (currentNode ? currentNode.title_en : ""),
        title_te: "క్యాచ్-అప్: " + (currentNode ? currentNode.title_te : ""),
        type: "internal",
        desc_en:
          remedialText || "A short focused lesson to close the gap before you move forward.",
        desc_te:
          remedialText || "ముందుకు వెళ్లే ముందు గ్యాప్‌ను పూరించడానికి ఒక చిన్న ఫోకస్డ్ పాఠం.",
        status: "available",
        remedial: true,
      };
      const copy = [...prev];
      copy.splice(insertAt, 0, remedialNode);
      return copy;
    });
  }, []);

  const progress = calculateProgress(roadmap);
  const currentNode =
    roadmap.find((n) => n.status === "available") ||
    roadmap.find((n) => n.status === "done") ||
    roadmap[0] ||
    null;

  const quizAvailable =
    progress.doneCount > 0 &&
    progress.doneCount % 2 === 0 &&
    progress.doneCount < roadmap.length;

  return {
    roadmap,
    setRoadmap,
    visited,
    trackVisit,
    markComplete,
    addRemedialNode,
    progress,
    currentNode,
    quizAvailable,
  };
}

export default useProgress;
