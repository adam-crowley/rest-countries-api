import { create } from 'zustand'

interface CountryStore {
  darkMode: boolean
  currentRegion: string
  toggleDarkMode: () => void
  setCurrentRegion: (region: string) => void
}

export const useCountryStore = create<CountryStore>((set) => ({
  darkMode: false,
  currentRegion: 'all',
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setCurrentRegion: (region: string) => set({ currentRegion: region }),
}))
