/* eslint-disable react-refresh/only-export-components -- hook exported with provider */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "wanderlust_session_v1";

const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data?.email) return null;
    return { email: data.email, name: data.name || data.email.split("@")[0] };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredUser());

  const login = useCallback((email, password) => {
    const trimmed = email.trim();
    if (!trimmed || !password) {
      return { ok: false, error: "Enter email and password." };
    }
    if (password.length < 4) {
      return { ok: false, error: "Password must be at least 4 characters." };
    }
    const next = {
      email: trimmed,
      name: trimmed.split("@")[0] || "User",
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setUser(next);
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: Boolean(user),
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
