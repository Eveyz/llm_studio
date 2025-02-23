"use client"

import { ChatContent } from "@/components/chat-content"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { AssistantSidebar } from "@/components/assistant-sidebar"

export function ChatInterface() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[300px]">
            <div className="flex h-full">
              <MainNav />
              <AssistantSidebar />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <ChatContent />
    </>
  )
}

