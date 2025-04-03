import { Link } from 'react-router'
import { useCountryStore } from '../store/countyStore'

function Header() {
  const { darkMode, toggleDarkMode } = useCountryStore()

  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link to={'/'}>Where in the world?</Link>
        </h1>
        <button onClick={() => toggleDarkMode()} className="header__button">
          {darkMode ? (
            <img
              src="/assets/images/dark-mode-icon_selected.svg"
              alt="Select light mode icon"
            />
          ) : (
            <img
              src="/assets/images/dark-mode-icon.svg"
              alt="Select dark mode icon"
            />
          )}

          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  )
}

export default Header
