"use client"

import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { TopNav } from "@/components/top-nav"
import { MainNav } from "@/components/main-nav"
import { AssistantSidebar } from "@/components/assistant-sidebar"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <div className="flex h-screen">
          <MainNav />
          <div className="flex flex-col flex-1">
            <TopNav isSidebarOpen={isSidebarOpen} onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex flex-1">
              <AssistantSidebar isOpen={isSidebarOpen} />
              <div className={cn("transition-all duration-300 ease-in-out", isSidebarOpen ? "flex-1" : "flex-1")}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

