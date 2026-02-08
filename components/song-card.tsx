"use client"

import { Plus, Star, Users } from "lucide-react"
import { VinylRecord } from "@/components/vinyl-record"

interface SongCardProps {
  songTitle: string
  artist: string
  albumArtSrc: string
  userName: string
  userLocation: string
  userCaption: string
}

export function SongCard({
  songTitle,
  artist,
  albumArtSrc,
  userName,
  userLocation,
  userCaption,
}: SongCardProps) {
  return (
    <div className="w-72 flex-shrink-0 rounded-2xl bg-card p-5 shadow-lg">
      {/* Header: Song info + add button */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-card-foreground leading-tight text-balance">
            {songTitle}
          </h3>
          <p className="text-sm font-semibold text-[hsl(var(--filter-green-foreground))]">
            {artist}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:text-card-foreground hover:border-card-foreground transition-colors"
          aria-label={`Add ${songTitle} to library`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Vinyl Record */}
      <VinylRecord albumArtSrc={albumArtSrc} albumArtAlt={`${songTitle} by ${artist} album art`} />

      {/* User info */}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-card-foreground">{userName}</h4>
          <button
            type="button"
            className="text-muted-foreground hover:text-card-foreground transition-colors"
            aria-label={`View ${userName}'s profile`}
          >
            <Users className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-muted-foreground">{userLocation}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {userCaption}
        </p>
      </div>
    </div>
  )
}
