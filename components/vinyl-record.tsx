"use client"

import { useState, useRef, useCallback, useEffect } from "react"

interface VinylRecordProps {
  albumArtSrc: string
  albumArtAlt: string
}

export function VinylRecord({ albumArtSrc, albumArtAlt }: VinylRecordProps) {
  const [isFast, setIsFast] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a pop sound using Web Audio API
    audioRef.current = null
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const playPopSound = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      const oscillator = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioCtx.destination)

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.08)

      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1)

      oscillator.start(audioCtx.currentTime)
      oscillator.stop(audioCtx.currentTime + 0.1)
    } catch {
      // Silently fail if audio context isn't available
    }
  }, [])

  const handleTap = useCallback(() => {
    playPopSound()
    setIsFast(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsFast(false)
    }, 2000)
  }, [playPopSound])

  return (
    <button
      type="button"
      onClick={handleTap}
      className="relative mx-auto block w-56 h-56 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
      aria-label="Tap to speed up vinyl record"
    >
      {/* Vinyl disc */}
      <div
        className={`w-full h-full rounded-full relative ${
          isFast ? "animate-spin-vinyl-fast" : "animate-spin-vinyl"
        }`}
        style={{
          background:
            "radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 20%, #1a1a1a 21%, #111 30%, #1a1a1a 31%, #0d0d0d 40%, #1a1a1a 41%, #111 50%, #1a1a1a 51%, #0d0d0d 60%, #1a1a1a 61%, #111 70%, #1a1a1a 71%, #0d0d0d 80%, #1a1a1a 81%, #111 90%, #222 100%)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 0 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Grooves - subtle rings */}
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background:
              "repeating-radial-gradient(circle at center, transparent 0px, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        {/* Highlight / sheen */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.04) 100%)",
          }}
        />

        {/* Center label with album art */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full overflow-hidden border-2 border-neutral-700">
          <img
            src={albumArtSrc || "/placeholder.svg"}
            alt={albumArtAlt}
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
        </div>

        {/* Center spindle hole */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-900 border border-neutral-600" />
      </div>
    </button>
  )
}
