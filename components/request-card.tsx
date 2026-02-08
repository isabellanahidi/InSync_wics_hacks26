"use client"

import { Star, Users } from "lucide-react"
import Image from "next/image"

interface RequestCardProps {
  name: string
  age: number
  location: string
  profileImage: string
}

export function RequestCard({ name, age, location, profileImage }: RequestCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[hsl(40,25%,92%)] px-3 py-3 shadow-sm">
      {/* Profile Image */}
      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={profileImage || "/placeholder.svg"}
          alt={`${name}'s profile`}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-bold text-foreground leading-tight">
          {name}, {age}
        </h3>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400 flex-shrink-0" />
          <span className="text-xs text-muted-foreground truncate">{location}</span>
        </div>
      </div>

      {/* Action icons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          type="button"
          className="text-[hsl(15,60%,55%)] hover:text-[hsl(15,60%,40%)] transition-colors"
          aria-label={`Add ${name} as friend`}
        >
          <Users className="w-5 h-5" />
        </button>
        <div className="w-10 h-10 rounded-full flex-shrink-0 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 20%, #1a1a1a 21%, #111 40%, #1a1a1a 41%, #0d0d0d 60%, #1a1a1a 61%, #111 80%, #222 100%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {/* Mini center label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full overflow-hidden border border-neutral-600">
            <Image
              src="/album-art.jpg"
              alt="Song"
              width={16}
              height={16}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Sheen */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
