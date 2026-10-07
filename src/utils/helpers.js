import { PATHS } from "../data/paths";

/**
 * Builds a short list of well-known learning platforms deep-linked to this exact topic.
 */
export function suggestedResources(node, lang) {
  if (!node) return [];
  const q = encodeURIComponent(node.title_en); // English queries have highest hit-rate
  const list = [];
  if (node.type === "external" && node.link) {
    list.push({
      name_en: "Recommended lesson",
      name_te: "సిఫార్సు చేయబడిన పాఠం",
      url: node.link,
      primary: true,
    });
  }
  list.push(
    {
      name_en: "GeeksforGeeks",
      name_te: "GeeksforGeeks",
      url: `https://www.geeksforgeeks.org/?s=${q}`,
    },
    {
      name_en: "YouTube tutorials",
      name_te: "YouTube ట్యుటోరియల్స్",
      url: `https://www.youtube.com/results?search_query=${q}+tutorial`,
    },
    {
      name_en: "NPTEL / Swayam",
      name_te: "NPTEL / Swayam",
      url: "https://nptel.ac.in/course.html",
    },
    {
      name_en: "freeCodeCamp",
      name_te: "freeCodeCamp",
      url: `https://www.freecodecamp.org/news/search/?query=${q}`,
    }
  );
  return list;
}

/**
 * AI Assistant Helper
 * Supports direct API call if environment / sandbox supports it,
 * otherwise safely returns null allowing smart fallback responses.
 */
export async function askClaude(systemPrompt, userText) {
  try {
    const apiKey = typeof import.meta !== "undefined" && import.meta.env
      ? import.meta.env.VITE_ANTHROPIC_API_KEY
      : null;

    const headers = { "Content-Type": "application/json" };
    if (apiKey) {
      headers["x-api-key"] = apiKey;
      headers["anthropic-version"] = "2023-06-01";
      headers["dangerously-allow-browser"] = "true";
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: systemPrompt,
        messages: [{ role: "user", content: userText }],
      }),
    });

    const data = await res.json();
    if (data && data.content) {
      const textBlock = data.content.find((c) => c.type === "text");
      if (textBlock) return textBlock.text;
    }
    return null;
  } catch (e) {
    return null;
  }
}

/**
 * Builds the initial node roadmap with unlocked/completed status based on user level.
 */
export function buildRoadmap(pathKey, level, customPaths = PATHS) {
  const path = customPaths[pathKey];
  if (!path || !path.nodes) return [];
  const skipCount = level === "advanced" ? 2 : level === "intermediate" ? 1 : 0;
  return path.nodes.map((n, i) => ({
    ...n,
    status: i < skipCount ? "done" : i === skipCount ? "available" : "locked",
  }));
}

/**
 * Calculates learning path completion metrics.
 */
export function calculateProgress(roadmap = []) {
  if (!roadmap || roadmap.length === 0) {
    return { doneCount: 0, totalCount: 0, percentage: 0 };
  }
  const doneCount = roadmap.filter((n) => n.status === "done").length;
  const percentage = Math.round((doneCount / roadmap.length) * 100);
  return {
    doneCount,
    totalCount: roadmap.length,
    percentage,
  };
}
