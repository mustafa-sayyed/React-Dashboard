"use client";
import * as React from "react";
import {
  Activity,
  Bell,
  BookOpen,
  BookPlus,
  FileText,
  GalleryVerticalEnd,
  Library,
  MessageSquare,
  User,
} from "lucide-react";

import { SidebarNav,  } from "@/components/SidebarNav";
import { NavUser } from "@/components/NavUser";
import { TeamSwitcher } from "@/components/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Mustafa",
    email: "ms@ms.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMenu: [
    {
      name: "All Books",
      url: "home",
      icon: BookOpen,
    },
    {
      name: "My Books",
      url: "my-books",
      icon: Library,
    },
    {
      name: "Add Books",
      url: "add-books",
      icon: BookPlus,
    },
    {
      name: "Profile",
      url: "profile",
      icon: User,
    },
  ],
};

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav menu={data.navMenu} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
