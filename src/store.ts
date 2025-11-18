import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface User {
  _id: string;
  name: string;
  email: string;
  authStatus: boolean;
  loginUser: (name: string, email: string, _id: string) => void;
  logoutUser: () => void;
}

const useAuthStore = create<User>()(
  devtools(
    persist(
      (set) => ({
        _id: "",
        name: "",
        email: "",
        authStatus: false,
        loginUser: (name: string, email: string, _id: string) =>
          set({ name, email, _id, authStatus: true }),
        logoutUser: () => set({ name: "", email: "", _id: "", authStatus: false }),
      }),
      { name: "auth-store" }
    )
  )
);

interface TokenStore {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useTokenStore = create<TokenStore>()(
  devtools(
    persist(
      (set) => ({
        token: "",
        setToken: (token: string) => set({ token }),
        clearToken: () => set({ token: "" }),
      }),
      { name: "token-store" }
    )
  )
);

type ThemeOptions = "light" | "dark";
interface Theme {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}

const useThemeStore = create<Theme>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "theme-store" }
  )
);

export { useAuthStore, useTokenStore, useThemeStore };
