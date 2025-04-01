import { create } from 'zustand'
import { CountryItem } from '../../types/models'

interface CountryStore {
  countryData: CountryItem[]
  filteredData: CountryItem[]
  darkMode: boolean
  currentRegion: string
  searchInput: string
  setCountryData: (data: CountryItem[]) => void
  setFilteredData: (data: CountryItem[]) => void
  toggleDarkMode: () => void
  setCurrentRegion: (region: string) => void
  setSearchInput: (searchValue: string) => void
}

export const useCountryStore = create<CountryStore>((set) => ({
  countryData: [],
  filteredData: [],
  darkMode: false,
  currentRegion: 'all',
  searchInput: '',
  setCountryData: (data) => set({ countryData: data }),
  setFilteredData: (data) => set({ filteredData: data }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setCurrentRegion: (region: string) => set({ currentRegion: region }),
  setSearchInput: (searchValue: string) => set({ searchInput: searchValue }),
}))
