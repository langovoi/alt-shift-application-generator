const inMemoryStore: Map<string, string> = new Map();

let localStorageAvailable: boolean | null = null;

function isLocalStorageAvailable(): boolean {
  if (localStorageAvailable !== null) return localStorageAvailable;
  if (typeof window === "undefined") return (localStorageAvailable = false);
  try {
    const k = "__storage_test__";
    window.localStorage.setItem(k, k);
    window.localStorage.removeItem(k);
    return (localStorageAvailable = true);
  } catch {
    return (localStorageAvailable = false);
  }
}

export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === "undefined") return null;
    const value = isLocalStorageAvailable()
      ? window.localStorage.getItem(key)
      : inMemoryStore.get(key);
    return value ? JSON.parse(value) : null;
  },

  set<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    const serialized = JSON.stringify(value);
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(key, serialized);
    } else {
      inMemoryStore.set(key, serialized);
    }
  },
};
