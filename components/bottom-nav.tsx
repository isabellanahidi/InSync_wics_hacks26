"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Send, Heart, User } from "lucide-react"

const navItems = [
  { id: "home", icon: Home, label: "Home", href: "/" },
  { id: "discover", icon: Send, label: "Messages", href: "/messages" },
  { id: "record", icon: null, label: "Record", href: "/" },
  { id: "favorites", icon: Heart, label: "Favorites", href: "/requests" },
  { id: "profile", icon: User, label: "Profile", href: "/" },
] as const

function getActiveTab(pathname: string) {
  if (pathname === "/requests") return "favorites"
  if (pathname === "/messages") return "discover"
  return "home"
}

export function BottomNav() {
  const pathname = usePathname()
  const active = getActiveTab(pathname)

  return (
    <nav
      className="flex items-center justify-around px-4 pb-6 pt-3 bg-background border-t border-border"
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        const isActive = active === item.id

        if (item.id === "record") {
          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative -mt-6 flex items-center justify-center w-14 h-14 rounded-full bg-foreground shadow-lg"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Record button icon - a circle with a dot */}
              <div className="w-6 h-6 rounded-full border-[3px] border-[hsl(var(--destructive))] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--destructive))]" />
              </div>
            </Link>
          )
        }

        const Icon = item.icon!

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon
              className="w-6 h-6"
              fill={isActive && (item.id === "favorites" || item.id === "discover") ? "currentColor" : "none"}
            />
            <span className="sr-only">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
