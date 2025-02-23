"use client"

import { Button } from "@/components/ui/button"
import { Plus, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SettingsView } from "@/components/settings-view"

interface AssistantSidebarProps {
  isOpen: boolean
}

export function AssistantSidebar({ isOpen }: AssistantSidebarProps) {
  if (!isOpen) return null

  return (
    <div className="w-[260px] border-r">
      <Tabs defaultValue="assistant" className="w-full">
        <div className="p-4 border-b">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="assistant">Assistant</TabsTrigger>
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>


        <TabsContent value="assistant" className="p-4">
					<Button variant="secondary" className="w-full justify-start gap-2 mb-2">
					<Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
					Default Assistant
					<span className="ml-auto text-muted-foreground text-xs">1</span>
					</Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Plus className="h-4 w-4" />
            Add Assistant
          </Button>
        </TabsContent>

        <TabsContent value="topics">{/* Add topics content here */}</TabsContent>

        <TabsContent value="settings" className="m-0 overflow-auto h-[calc(100vh-8rem)]">
          <SettingsView />
        </TabsContent>
      </Tabs>
    </div>
  )
}
