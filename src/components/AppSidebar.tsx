"use client";
import * as React from "react";
import {
  Activity,
  Bell,
  FileText,
  GalleryVerticalEnd,
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
      name: "Today's Data",
      url: "home",
      icon: Activity,
    },
    {
      name: "Set Reminders",
      url: "reminders",
      icon: Bell,
    },
    {
      name: "Manage Health Record",
      url: "manage-health",
      icon: FileText,
    },
    {
      name: "Profile",
      url: "profile",
      icon: User,
    },
    {
      name: "Medify AI Chat",
      url: "ai-chat",
      icon: MessageSquare,
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
