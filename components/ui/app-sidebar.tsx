import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {CircleUser, FileVideo, LayoutDashboard, SquarePlus } from "lucide-react"

const MenuItems = [
    {
      title: "DashBoard",
      icon: LayoutDashboard
    },
    {
      title: "Create New",
      icon: FileVideo,
      Link: "/dashboard"
    },
    {
      title: "subscription",
      icon: SquarePlus,
      Link: "/dashboard"
    },
    {
      title: "Account",
      icon: CircleUser,
      Link: "/dashboard"
    },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroupContent>
        <SidebarMenu className="gap-4 ml-6 mt-10">
          {MenuItems.map((item) =>(
             <SidebarMenuItem key={item.title} className="border btn-primary w-48 py-2 hover:">
                <SidebarMenuButton asChild>
                      <a href={item.Link}>
                      <item.icon />
                      <span>{item.title}</span>
                      </a>
                </SidebarMenuButton>
             </SidebarMenuItem>
          ))}
        </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}