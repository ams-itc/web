import * as React from "react"
import {
  FileText,
  Folder,
  Frame,
  Image,
  LayoutDashboard,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  Tag,
  Users,
  type LucideIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAuth } from "@/hooks/use-auth"
import { getImageUrl } from "@/helpers/image"
import { contentTypeService, type ContentType } from "@/lib/services/content-type"

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: { title: string; url: string; icon?: LucideIcon }[];
};

export const data: { user: any; navMain: NavItem[]; navSecondary: NavItem[]; projects: any } = {
  user: {
    name: "Admin User",
    email: "admin@university.edu",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    // Main navigation items
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    // Content Type management items
    {
      title: "Content Types",
      url: "/admin/content-types",
      icon: FileText,
    },
    // Categories management items
    {
      title: "Categories",
      url: "/admin/categories",
      icon: Folder,
    },
    // Tags management items
    {
      title: "Tags",
      url: "/admin/tags",
      icon: Tag,
    },
    // Media managment items
    {
      title: "Media Library",
      url: "/admin/media",
      icon: Image,
    },
    // Users management items
    {
      title: "Users",
      url: "/admin/users/index",
      icon: Users,
      items: [
        { title: "All Users", url: "/admin/users/index" },
        { title: "Roles", url: "/admin/users/roles" },
        { title: "Permissions", url: "/admin/users/permissions" },
      ],
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings2,
      items: [
        { title: "General", url: "/admin/settings/general" },
        { title: "Team", url: "/admin/settings/team" },
        { title: "Appearance", url: "/admin/settings/appearance" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Admissions",
      url: "#",
      icon: Frame,
    },
    {
      name: "Research",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Campus Life",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();
  const [contentTypes, setContentTypes] = React.useState<ContentType[]>([]);

  React.useEffect(() => {
    contentTypeService.getAll().then(setContentTypes).catch(console.error);
  }, []);

  const navMain = React.useMemo(() => {
    return data.navMain.map((item) => {
      // Replace static "Content Types" with dynamic list
      if (item.title === "Content Types") {
        return {
          ...item,
          items: contentTypes.map((ct) => ({
            title: ct.name,
            url: `/admin/content-types/view/${ct.id}`,
          })),
        };
      }
      return item;
    });
  }, [contentTypes]);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img src="/logo_ams.png" alt="Logo" className="w-8 h-8" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">AMS</span>
                  <span className="truncate text-xs">ITC</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {user ? <NavUser user={{
          name: user.name,
          email: user.email,
          avatar: getImageUrl(user.avatar)
        }} /> : <div className="p-2 text-sm text-muted-foreground">Loading...</div>}
      </SidebarFooter>
    </Sidebar>
  )
}
