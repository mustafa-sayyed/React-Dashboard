import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  loginUser: (name: string, email: string) => void;
  logoutUser: () => void;
}

const useUserStore = create<User>((set) => ({
  name: "",
  email: "",
  loginUser: (name: string, email: string) => set({ name, email }),
  logoutUser: () => set({ name: "", email: "" }),
}));

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

export { useUserStore, useTokenStore };
