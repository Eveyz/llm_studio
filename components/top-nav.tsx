import { PanelLeftClose, PanelLeft, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface TopNavProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

export function TopNav({ isSidebarOpen, onSidebarToggle }: TopNavProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={onSidebarToggle}>
          {isSidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
        </Button>
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="font-medium">Default Assistant</span>
        </div>
        <span className="text-sm text-muted-foreground">deepseek-ai/DeepSeek-V3 | SiliconFlow</span>
      </div>
      <div className="flex items-center space-x-2">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          Home
        </Link>
      </div>
    </div>
  )
}

