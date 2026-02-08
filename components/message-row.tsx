import Image from "next/image"
import { ChevronRight } from "lucide-react"

type DotColor = "red" | "blue" | "none"

interface MessageRowProps {
  name: string
  avatarSrc: string
  time: string
  preview: string
  dotColor?: DotColor
}

export function MessageRow({
  name,
  avatarSrc,
  time,
  preview,
  dotColor = "none",
}: MessageRowProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-3 w-full px-5 py-3 text-left transition-colors active:bg-[hsl(var(--muted))]"
    >
      {/* Unread indicator dot */}
      <div className="w-2 flex-shrink-0 flex items-center justify-center">
        {dotColor !== "none" && (
          <div
            className={`w-2 h-2 rounded-full ${
              dotColor === "red"
                ? "bg-[hsl(var(--destructive))]"
                : "bg-[hsl(220,70%,55%)]"
            }`}
          />
        )}
      </div>

      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[hsl(var(--muted))]">
        <Image
          src={avatarSrc || "/placeholder.svg"}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-bold text-foreground text-base truncate">{name}</h3>
          <span className="text-xs text-muted-foreground flex-shrink-0">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground truncate mt-0.5">{preview}</p>
      </div>

      {/* Chevron */}
      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
    </button>
  )
}
