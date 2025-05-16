import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { HomeIcon, FolderIcon, SettingsIcon, HelpCircleIcon, ChevronDown } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath === path;
  const [openItem2, setOpenItem2] = useState(false);

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center gap-3 px-4 py-4 border-b">
        <span className="text-3xl">🧩</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Demo</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link to="/">
                <SidebarMenuButton isActive={isActive("/")}>
                  <HomeIcon className="h-4 w-4 mr-2" />
                  SQLite + Drizzle Demo
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            {/* Collapsible Item 2 group with sub-items */}
            <Collapsible open={openItem2} onOpenChange={setOpenItem2}>
              <li>
                <CollapsibleTrigger className="flex items-center w-full">
                  <SidebarMenuButton isActive={currentPath.startsWith("/item2")}> 
                    <FolderIcon className="h-4 w-4 mr-2" />
                    Item 2
                    <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${openItem2 ? "rotate-180" : ""}`} />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </li>
              <CollapsibleContent>
                <SidebarMenu className="ml-6">
                  <SidebarMenuItem>
                    <Link to="/item2/sub1">
                      <SidebarMenuButton isActive={isActive("/item2/sub1")}>Sub Item 1</SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link to="/item2/sub2">
                      <SidebarMenuButton isActive={isActive("/item2/sub2")}>Sub Item 2</SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link to="/item2/sub3">
                      <SidebarMenuButton isActive={isActive("/item2/sub3")}>Sub Item 3</SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
            {/* Regular menu items */}
            <SidebarMenuItem>
              <Link to="/item3">
                <SidebarMenuButton isActive={isActive("/item3")}> <SettingsIcon className="h-4 w-4 mr-2" /> Item 3</SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/item4">
                <SidebarMenuButton isActive={isActive("/item4")}> <HelpCircleIcon className="h-4 w-4 mr-2" /> Item 4</SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">{/* Footer content here */}</SidebarFooter>
    </Sidebar>
  );
} 