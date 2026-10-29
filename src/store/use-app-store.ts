import { create } from "zustand"
import type { ExperienceCategory } from "@/lib/data"

type ExperienceFilter = "all" | ExperienceCategory

type AppState = {
  isMenuOpen: boolean
  experienceFilter: ExperienceFilter
  expandedRole: string | null
  setMenuOpen: (open: boolean) => void
  setExperienceFilter: (filter: ExperienceFilter) => void
  toggleRole: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  experienceFilter: "all",
  expandedRole: "q4",
  setMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  setExperienceFilter: (experienceFilter) =>
    set({ experienceFilter, expandedRole: null }),
  toggleRole: (id) =>
    set((state) => ({ expandedRole: state.expandedRole === id ? null : id })),
}))
