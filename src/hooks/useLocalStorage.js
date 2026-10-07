import { useState, useEffect } from "react";
import { safeStorage } from "../utils/safeStorage";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const item = await safeStorage.get(key);
        if (item && item.value && isMounted) {
          setStoredValue(JSON.parse(item.value));
        }
      } catch (error) {
        console.error(`Error reading ${key} from storage:`, error);
      } finally {
        if (isMounted) setIsLoaded(true);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [key]);

  const setValue = async (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (valueToStore === null || valueToStore === undefined) {
        await safeStorage.delete(key);
      } else {
        await safeStorage.set(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error writing ${key} to storage:`, error);
    }
  };

  return [storedValue, setValue, isLoaded];
}

export default useLocalStorage;
