import React, { useState, useEffect } from "react";
import { safeStorage } from "./utils/safeStorage";
import { buildRoadmap } from "./utils/helpers";
import { STORAGE_KEYS } from "./utils/constants";
import { PATHS } from "./data/paths";
import Landing from "./components/landing/Landing";
import ExplorePaths from "./components/explore/ExplorePaths";
import Auth from "./components/auth/Auth";
import Onboarding from "./components/onboarding/Onboarding";
import Dashboard from "./components/dashboard/Dashboard";

export function App() {
  const [lang, setLang] = useState("en");
  const [screen, setScreen] = useState("landing"); // landing | explore | auth | onboarding | dashboard
  const [pendingPath, setPendingPath] = useState(null);
  const [user, setUser] = useState(null);
  const [roadmap, setRoadmap] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [visited, setVisited] = useState({});

  // Restore session from safeStorage on initial load
  useEffect(() => {
    (async () => {
      try {
        const saved = await safeStorage.get(STORAGE_KEYS.SESSION);
        if (saved && saved.value) {
          const parsed = JSON.parse(saved.value);
          setUser(parsed.user || null);
          setRoadmap(parsed.roadmap || []);
          setLang(parsed.lang || "en");
          setScreen("dashboard");
        }

        const savedVisited = await safeStorage.get(STORAGE_KEYS.VISITED);
        if (savedVisited && savedVisited.value) {
          setVisited(JSON.parse(savedVisited.value));
        }
      } catch (e) {
        console.error("Session restore error:", e);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  // Save session when roadmap or lang updates in dashboard
  useEffect(() => {
    if (screen === "dashboard" && user) {
      safeStorage
        .set(STORAGE_KEYS.SESSION, JSON.stringify({ user, roadmap, lang }))
        .catch(() => {});
    }
  }, [roadmap, lang, screen, user]);

  const trackVisit = (nodeId) => {
    setVisited((prev) => {
      const next = { ...prev, [nodeId]: true };
      safeStorage
        .set(STORAGE_KEYS.VISITED, JSON.stringify(next))
        .catch(() => {});
      return next;
    });
  };

  const finishOnboarding = ({ name, pathKey, level, hours }) => {
    const path = PATHS[pathKey];
    const careerLabel = lang === "te" ? path.title_te : path.title_en;
    const newUser = { name, pathKey, careerLabel, level, hours };
    const rm = buildRoadmap(pathKey, level);
    setUser(newUser);
    setRoadmap(rm);
    setScreen("dashboard");
    safeStorage
      .set(STORAGE_KEYS.SESSION, JSON.stringify({ user: newUser, roadmap: rm, lang }))
      .catch(() => {});
  };

  const handleChoosePath = (pathKey) => {
    if (user) {
      // Logged-in user switching paths from the dashboard or explore
      const path = PATHS[pathKey];
      const careerLabel = lang === "te" ? path.title_te : path.title_en;
      const level = user.level || "beginner";
      const newUser = { ...user, pathKey, careerLabel };
      const rm = buildRoadmap(pathKey, level);
      setUser(newUser);
      setRoadmap(rm);
      setScreen("dashboard");
      safeStorage
        .set(STORAGE_KEYS.SESSION, JSON.stringify({ user: newUser, roadmap: rm, lang }))
        .catch(() => {});
    } else {
      setPendingPath(pathKey);
      setScreen("auth");
    }
  };

  const signOut = () => {
    safeStorage.delete(STORAGE_KEYS.SESSION).catch(() => {});
    setUser(null);
    setRoadmap([]);
    setPendingPath(null);
    setScreen("landing");
  };

  if (!loaded) return null;

  if (screen === "landing") {
    return (
      <Landing
        lang={lang}
        setLang={setLang}
        onStart={setScreen}
        onExplore={() => setScreen("explore")}
      />
    );
  }

  if (screen === "explore") {
    return (
      <ExplorePaths
        lang={lang}
        setLang={setLang}
        onChoose={handleChoosePath}
        onBack={() => setScreen(user ? "dashboard" : "landing")}
      />
    );
  }

  if (screen === "auth") {
    return (
      <Auth
        lang={lang}
        onBack={() => setScreen(pendingPath ? "explore" : "landing")}
        onDone={() => setScreen("onboarding")}
      />
    );
  }

  if (screen === "onboarding") {
    return (
      <Onboarding
        lang={lang}
        initialPathKey={pendingPath}
        onDone={finishOnboarding}
      />
    );
  }

  if (screen === "dashboard" && user) {
    return (
      <Dashboard
        lang={lang}
        setLang={setLang}
        user={user}
        roadmap={roadmap}
        setRoadmap={setRoadmap}
        visited={visited}
        trackVisit={trackVisit}
        onSignOut={signOut}
        onExplore={() => setScreen("explore")}
      />
    );
  }

  return (
    <Landing
      lang={lang}
      setLang={setLang}
      onStart={setScreen}
      onExplore={() => setScreen("explore")}
    />
  );
}

export default App;
