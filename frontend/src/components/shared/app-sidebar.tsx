import { Calendar1, CalendarClock, Inbox, Plus } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import ProjectsSidebarMenu from "./projects-sidebar-menu";
import UserDropdown from "./user-dropdown";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <Link href="/" className="block p-2">
          <h1 className="font-semibold text-xl">Peakplan</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/tasks/inbox">
                  <Inbox />
                  <span>Inbox</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/tasks/today">
                  <Calendar1 />
                  <span>Today</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/tasks/this-week">
                  <CalendarClock />
                  <span>This week</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction title="New project" asChild>
            <Link href="/projects/new">
              <Plus />
            </Link>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <ProjectsSidebarMenu />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserDropdown />
      </SidebarFooter>
    </Sidebar>
  );
}
