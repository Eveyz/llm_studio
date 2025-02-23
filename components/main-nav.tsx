"use client"

import { Button } from "@/components/ui/button"
import {
  Diamond,
  FileText,
  HelpCircle,
  ImageIcon,
  LayoutGrid,
  MessageCircle,
  Settings2,
  Upload,
  User,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: User, label: "Profile", href: "/profile" },
  { icon: MessageCircle, label: "Chat", href: "/" },
  { icon: Diamond, label: "Premium", href: "/premium" },
  { icon: ImageIcon, label: "Images", href: "/images" },
  { icon: Upload, label: "Upload", href: "/upload" },
  { icon: LayoutGrid, label: "Apps", href: "/apps" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: HelpCircle, label: "Help", href: "/help" },
  { icon: Settings2, label: "Settings", href: "/settings" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="w-[60px] border-r flex flex-col items-center py-4 gap-4">
      <TooltipProvider>
        {navItems.map((item, index) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(pathname === item.href && "bg-muted", index === 0 && "rounded-full", "relative")}
                >
                  <item.icon className="h-5 w-5" />
                  {pathname === item.href && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-foreground rounded-l-full" />
                  )}
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
}

