"use client"
import React from "react";
import { Header } from "./_components/Header";
import { SideNav } from "./_components/SideNav";
import { ThemeProvider } from "@/components/ui/theme-provider";

export default function DashboardLayout({children}: {children: React.ReactNode}) {

  return (
    <ThemeProvider  
              attribute="class"
              defaultTheme="dark"
              enableSystem>
   <div className={`dashboard-theme h-screen w-screen flex bg-background text-foreground font-sans`}>
    <div>
      <SideNav />
    </div>
    <div>
       <Header />
      {children}
    </div>
   </div> 
  </ThemeProvider>
  )
}
