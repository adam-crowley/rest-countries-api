import { create } from 'zustand'

interface CountryStore {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const useCountryStore = create<CountryStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))
