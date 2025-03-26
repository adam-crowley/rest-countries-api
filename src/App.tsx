import { useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { useCountryStore } from './store/countyStore'

function App() {
  const { darkMode, currentRegion } = useCountryStore()

  useEffect(() => {
    document.body.classList.toggle('dark-theme')
  }, [darkMode])

  useEffect(() => {
    console.log('currentRegion: ', currentRegion)
  }, [currentRegion])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
