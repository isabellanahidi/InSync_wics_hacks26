import { RequestCard } from "@/components/request-card"
import { BottomNav } from "@/components/bottom-nav"

const requests = [
  { name: "Bella", age: 18, location: "Round Rock, Texas", profileImage: "/profiles/bella.jpg" },
  { name: "Joyce", age: 18, location: "Fremont, California", profileImage: "/profiles/joyce.jpg" },
  { name: "Bob", age: 20, location: "Miami, Florida", profileImage: "/profiles/bob.jpg" },
  { name: "Joe", age: 19, location: "Austin, Texas", profileImage: "/profiles/joe.jpg" },
  { name: "John", age: 19, location: "Austin, Texas", profileImage: "/profiles/john.jpg" },
  { name: "Leonardo", age: 51, location: "Austin, Texas", profileImage: "/profiles/leonardo.jpg" },
  { name: "Sahur", age: 20, location: "Rome, Italy", profileImage: "/profiles/sahur.jpg" },
]

export default function RequestsPage() {
  return (
    <div className="flex flex-col h-dvh max-w-md mx-auto bg-[hsl(130,15%,78%)] overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-center px-5 pt-3 pb-4 bg-background border-b border-border">
        <h1 className="text-lg font-bold text-foreground">Message Requests</h1>
      </header>

      {/* Locals filter */}
      <div className="flex items-center justify-center py-4">
        <span
          className="inline-flex items-center px-5 py-2 rounded-full text-xs font-bold tracking-wider bg-[hsl(var(--filter-green))] text-[hsl(var(--filter-green-foreground))] shadow-[0_3px_0_0_hsl(145,35%,58%),0_4px_8px_rgba(0,0,0,0.12)]"
        >
          LOCALS
        </span>
      </div>

      {/* Request List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide">
        <div className="flex flex-col gap-3">
          {requests.map((request) => (
            <RequestCard key={request.name} {...request} />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
