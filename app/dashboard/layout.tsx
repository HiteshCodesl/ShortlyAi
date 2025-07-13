"use client";
import React, { useState } from "react";
import { Header } from "./_components/Header";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { VideoDataContext } from "../_context/VideoDataContext";
import ProgressBar from "../components/ProgressBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videoData, setVideoData] = useState([]); 
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}>
        <VideoDataContext.Provider value={{ videoData, setVideoData }}>
          <SidebarProvider>
            <div className="dashboard-theme min-h-screen w-full flex flex-col">
              
              <Header />
              <div className="flex flex-1">
                <AppSidebar />

                <main className="flex-1">
                  <SidebarTrigger className="border btn-outline m-2 flex" />
                  <ProgressBar />
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </VideoDataContext.Provider>
    </ThemeProvider>
  );
}
