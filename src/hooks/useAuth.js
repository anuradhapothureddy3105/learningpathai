import { useState, useEffect, useCallback } from "react";
import { safeStorage } from "../utils/safeStorage";
import { STORAGE_KEYS } from "../utils/constants";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [initialRoadmap, setInitialRoadmap] = useState([]);
  const [initialLang, setInitialLang] = useState("en");
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const saved = await safeStorage.get(STORAGE_KEYS.SESSION);
        if (saved && saved.value && isMounted) {
          const parsed = JSON.parse(saved.value);
          setUser(parsed.user || null);
          setInitialRoadmap(parsed.roadmap || []);
          if (parsed.lang) setInitialLang(parsed.lang);
        }
      } catch (error) {
        console.error("Error reading user session:", error);
      } finally {
        if (isMounted) setIsAuthLoaded(true);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const saveSession = useCallback(async (userData, roadmapData, lang) => {
    setUser(userData);
    try {
      await safeStorage.set(
        STORAGE_KEYS.SESSION,
        JSON.stringify({ user: userData, roadmap: roadmapData, lang })
      );
    } catch (e) {
      console.error("Error saving session:", e);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await safeStorage.delete(STORAGE_KEYS.SESSION);
    } catch (e) {
      console.error("Error deleting session:", e);
    }
    setUser(null);
    setInitialRoadmap([]);
  }, []);

  return {
    user,
    setUser,
    initialRoadmap,
    initialLang,
    isAuthLoaded,
    saveSession,
    signOut,
  };
}

export default useAuth;
