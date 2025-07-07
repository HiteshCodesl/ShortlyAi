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
import Link from "next/link"

const MenuItems = [
    {
      title: "DashBoard",
      icon: LayoutDashboard,
      path: "/dashboard"
    },
    {
      title: "Create New",
      icon: FileVideo,
      path: "/dashboard/create-new"
    },
    {
      title: "subscription",
      icon: SquarePlus,
      path: "/dashboard"
    },
    {
      title: "Account",
      icon: CircleUser,
      path: "/dashboard"
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
                      <Link href={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                      </Link>
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