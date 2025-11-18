import { AppSidebar } from "@/components/";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigate, Outlet } from "react-router";
import { useAuthStore, useThemeStore, useTokenStore } from "@/store";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { LogOut, MoonIcon, SearchIcon, Sun } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function DashboardLayout() {
  const token = useTokenStore((state) => state.token);
  const authStatus = useAuthStore((state) => state.authStatus);
  const { setTheme, theme } = useThemeStore((state) => state);

  useEffect(() => {
    const savedTheme = theme;
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  const handleSwitchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleLogout = () => {
    useAuthStore.getState().logoutUser();
    useTokenStore.getState().clearToken();
  };

  if (!authStatus || !token) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 justify-between">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="w-full">
              <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <Kbd>⌘ + K</Kbd>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 md:px-8">
            <Button
              variant="outline"
              className="cursor-pointer"
              size="icon"
              onClick={handleSwitchTheme}>
              {theme === "dark" ? <MoonIcon /> : <Sun />}
            </Button>

            <Button variant="outline" className="cursor-pointer" onClick={handleLogout}>
              <LogOut /> Logout
            </Button>

            {/* <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardLayout;
