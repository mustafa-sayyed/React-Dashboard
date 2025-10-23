"use client"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router"

export function SidebarNav({
  menu,
}: {
  menu: {
    name: string,
    url: string,
    icon: LucideIcon
  }[]
}) {

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {menu.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild className="h-12" tooltip={item.name}>
              <Link to={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
