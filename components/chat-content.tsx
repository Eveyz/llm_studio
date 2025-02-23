import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, FileText, ImageIcon, Link2, Maximize2, Table2 } from "lucide-react"
import { MoreVertical, Share2, Star, ThumbsDown, ThumbsUp, Mic } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
}

const messages: Message[] = [
  {
    id: "1",
    content: "what version you are",
    sender: "user",
  },
  {
    id: "2",
    content: "I'm currently running on the Gemini Pro model.",
    sender: "assistant",
  },
  {
    id: "3",
    content: "show me your capabilities",
    sender: "user",
  },
  {
    id: "4",
    content: `I can do lots of things! I'm good at brainstorming ideas, clarifying tricky concepts, and tasks like recapping meetings and helping you research a topic.

Not sure where to begin? Here's how I can help:

Get more done

• Write emails: Ask me to write or re-write emails and even change the tone based on who will read it.

• Refine work: Request feedback, discuss different perspectives, and get help with research citations.`,
    sender: "assistant",
  },
]

export function ChatContent() {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      {/* Scrollable chat history */}
      <div className="absolute inset-0 overflow-y-auto pb-[140px]">
        <div className="mx-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "rounded-2xl px-4 py-2 max-w-[85%] flex flex-col gap-4",
                  message.sender === "user" ? "bg-blue-50 text-slate-900" : "bg-background",
                )}
              >
                {message.sender === "assistant" && (
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{message.content}</div>
                {message.sender === "assistant" && (
                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed input section */}
      <div className="absolute bottom-0 left-0 right-0 bg-background border-t">
        <div className="mx-auto p-4">
          <div className="space-y-2">
            <div className="relative">
              <Input placeholder="Ask Gemini" className="pr-12 py-6 text-base" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Table2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <FileText className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

