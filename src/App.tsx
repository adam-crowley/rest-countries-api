import { useEffect } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import { useCountryStore } from './store/countyStore'
import data from './data.json'
import { Outlet } from 'react-router'

function App() {
  const { setCountryData, darkMode } = useCountryStore()

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
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
