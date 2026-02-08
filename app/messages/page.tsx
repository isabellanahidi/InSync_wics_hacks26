import { Search } from "lucide-react"
import { MessageRow } from "@/components/message-row"
import { BottomNav } from "@/components/bottom-nav"

const messages = [
  {
    name: "Bella",
    avatarSrc: "/profiles/bella.jpg",
    time: "9:40 AM",
    preview: "(added you back)",
    dotColor: "red" as const,
  },
  {
    name: "Tralala",
    avatarSrc: "/profiles/tralala.jpg",
    time: "9:36 AM",
    preview: "Nice. I don't know why people get all worked up about hawaiian pizza. I ...",
    dotColor: "blue" as const,
  },
  {
    name: "Landon",
    avatarSrc: "/profiles/landon.jpg",
    time: "7:03 AM",
    preview: "Check out this song: Maneater by Daryl Hall and John ...",
    dotColor: "blue" as const,
  },
  {
    name: "Nina",
    avatarSrc: "/profiles/nina.jpg",
    time: "1:11 AM",
    preview: "just vote. just vote.",
    dotColor: "none" as const,
  },
  {
    name: "Arnoldo",
    avatarSrc: "/profiles/arnoldo.jpg",
    time: "11:11 PM",
    preview: "(Sad fact: you cannot search for a gif of the word \"gif\", just gives you gifs.)",
    dotColor: "none" as const,
  },
  {
    name: "Tralala & Joyce",
    avatarSrc: "/profiles/tralala-joyce.jpg",
    time: "8:58 PM",
    preview: "I'm so glad I met y'all.",
    dotColor: "none" as const,
  },
]

export default function MessagesPage() {
  return (
    <div className="flex flex-col h-dvh max-w-md mx-auto bg-background overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-center px-5 pt-3 pb-2">
        <h1 className="text-lg font-bold text-foreground">Messages</h1>
      </header>

      {/* Search bar */}
      <div className="px-5 py-2">
        <div className="flex items-center gap-2 bg-[hsl(var(--muted))] rounded-full px-4 py-2.5">
          <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-muted-foreground">
            Search for messages or users
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-border" />

      {/* Message list */}
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg) => (
          <MessageRow key={msg.name} {...msg} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
