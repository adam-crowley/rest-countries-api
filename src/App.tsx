import { useEffect } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import { useCountryStore } from './store/countyStore'
import data from './data.json'
import { Outlet } from 'react-router'

function App() {
  const {
    countryData,
    filteredData,
    setCountryData,
    darkMode,
    currentRegion,
    searchInput,
  } = useCountryStore()

  useEffect(() => {
    document.body.classList.toggle('dark-theme')
  }, [darkMode])

  useEffect(() => {
    setCountryData(data)
  }, [])

  useEffect(() => {
    console.log('countryData: ', countryData)
  }, [countryData])

  useEffect(() => {
    console.log('filteredData: ', filteredData)
  }, [filteredData])

  useEffect(() => {
    console.log('currentRegion: ', currentRegion)
  }, [currentRegion])

  useEffect(() => {
    console.log('searchInput: ', searchInput)
  }, [searchInput])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
