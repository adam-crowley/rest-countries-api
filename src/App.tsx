import { useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { useCountryStore } from './store/countyStore'

function App() {
  const { darkMode } = useCountryStore()

  useEffect(() => {
    document.body.classList.toggle('dark-theme')
  }, [darkMode])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
