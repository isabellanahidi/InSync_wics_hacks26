"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const filters = [
  { id: "age", label: "AGE", hasDropdown: true },
  { id: "locals", label: "LOCALS", hasDropdown: false },
  { id: "taste", label: "MY TASTE", hasDropdown: false },
] as const

export function FilterButtons() {
  const [active, setActive] = useState<string>("locals")

  return (
    <div className="flex items-center justify-center gap-3">
      {filters.map((filter) => {
        const isActive = active === filter.id
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActive(filter.id)}
            className={`
              relative inline-flex items-center gap-1 px-5 py-2 rounded-full text-xs font-bold tracking-wider
              transition-all duration-200 ease-out select-none
              ${
                isActive
                  ? "bg-[hsl(var(--filter-green))] text-[hsl(var(--filter-green-foreground))] shadow-[0_3px_0_0_hsl(145,35%,58%),0_4px_8px_rgba(0,0,0,0.12)]"
                  : "bg-[hsl(var(--secondary))] text-secondary-foreground shadow-[0_3px_0_0_hsl(var(--border)),0_4px_8px_rgba(0,0,0,0.08)]"
              }
              hover:translate-y-[-1px] hover:shadow-[0_4px_0_0_hsl(var(--border)),0_6px_12px_rgba(0,0,0,0.12)]
              active:translate-y-[1px] active:shadow-[0_1px_0_0_hsl(var(--border)),0_2px_4px_rgba(0,0,0,0.08)]
            `}
            aria-pressed={isActive}
          >
            {filter.label}
            {filter.hasDropdown && <ChevronDown className="w-3 h-3" />}
          </button>
        )
      })}
    </div>
  )
}
