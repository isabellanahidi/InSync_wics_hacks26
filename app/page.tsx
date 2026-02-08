import { Search } from "lucide-react"
import { FilterButtons } from "@/components/filter-buttons"
import { SongCard } from "@/components/song-card"
import { BottomNav } from "@/components/bottom-nav"

const songs = [
  {
    songTitle: "Gangnam Style",
    artist: "PSY",
    albumArtSrc: "/album-art.jpg",
    userName: "Bella",
    userLocation: "Austin, Texas",
    userCaption:
      "guys i CANT get this song out of my head hmu if you know this dance (we might be platonic soulmates)",
  },
  {
    songTitle: "Levitating",
    artist: "Dua Lipa",
    albumArtSrc: "/album-art.jpg",
    userName: "Liam",
    userLocation: "Brooklyn, NY",
    userCaption:
      "This song is literally the soundtrack to my morning commute and I'm not even sorry about it",
  },
  {
    songTitle: "Blinding Lights",
    artist: "The Weeknd",
    albumArtSrc: "/album-art.jpg",
    userName: "Sofia",
    userLocation: "Miami, Florida",
    userCaption:
      "every time this comes on I feel like I'm in an 80s movie montage and honestly that's peak vibes",
  },
]

export default function Page() {
  return (
    <div className="flex flex-col h-dvh max-w-md mx-auto bg-background overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-3 pb-2">
        <div className="w-6" />
        <h1 className="text-lg font-bold text-foreground">Home</h1>
        <button type="button" aria-label="Search" className="text-foreground">
          <Search className="w-5 h-5" />
        </button>
      </header>

      {/* Filter Buttons */}
      <div className="px-5 py-3">
        <FilterButtons />
      </div>

      {/* Song Cards - horizontal scroll */}
      <div className="flex-1 overflow-hidden px-5">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory h-full items-start scrollbar-hide">
          {songs.map((song) => (
            <div key={song.songTitle} className="snap-center">
              <SongCard {...song} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
