import { useEffect } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import { useCountryStore } from './store/countyStore'
import data from './data.json'
import { Outlet } from 'react-router'

function App() {
  const { setCountryData, darkMode } = useCountryStore()

  useEffect(() => {
    document.body.classList.toggle('dark-theme')
  }, [darkMode])

  useEffect(() => {
    setCountryData(data)
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
