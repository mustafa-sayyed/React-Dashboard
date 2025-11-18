import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useThemeStore } from "./store.ts";

const queryClient = new QueryClient();

const ThemeComponent = () => {
  const theme = useThemeStore((state) => state.theme);
  return <Toaster theme={theme} />;
};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ThemeComponent />
  </QueryClientProvider>
);
