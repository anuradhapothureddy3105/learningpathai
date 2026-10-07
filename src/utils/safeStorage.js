/**
 * safeStorage utility
 * Ensures compatibility across:
 * 1. Claude artifact sandbox (window.storage)
 * 2. Browser standard localStorage
 * 3. Incognito / disabled storage fallback (in-memory map)
 */

const memoryFallback = new Map();

export const safeStorage = {
  async get(key) {
    try {
      if (typeof window !== "undefined" && window.storage && typeof window.storage.get === "function") {
        return await window.storage.get(key);
      }
    } catch (e) {
      /* fall through to localStorage */
    }

    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const v = localStorage.getItem(key);
        return v === null ? null : { key, value: v };
      }
    } catch (e) {
      /* fall through to in-memory fallback */
    }

    if (memoryFallback.has(key)) {
      return { key, value: memoryFallback.get(key) };
    }
    return null;
  },

  async set(key, value) {
    try {
      if (typeof window !== "undefined" && window.storage && typeof window.storage.set === "function") {
        return await window.storage.set(key, value);
      }
    } catch (e) {
      /* fall through to localStorage */
    }

    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(key, value);
        return null;
      }
    } catch (e) {
      /* fall through to in-memory fallback */
    }

    memoryFallback.set(key, value);
    return null;
  },

  async delete(key) {
    try {
      if (typeof window !== "undefined" && window.storage && typeof window.storage.delete === "function") {
        return await window.storage.delete(key);
      }
    } catch (e) {
      /* fall through to localStorage */
    }

    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem(key);
        return null;
      }
    } catch (e) {
      /* fall through to in-memory fallback */
    }

    memoryFallback.delete(key);
    return null;
  },
};

export default safeStorage;
