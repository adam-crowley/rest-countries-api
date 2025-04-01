import { useState } from 'react'
import { useCountryStore } from '../store/countyStore'

function Filter() {
  const [openDropdown, setOpenDropdown] = useState(false)
  const { setCurrentRegion, setSearchInput } = useCountryStore()

  const filterByRegion = (region: string) => {
    setCurrentRegion(region)
    setOpenDropdown(false)
    setSearchInput('')
  }

  return (
    <div className="filter">
      <button
        onClick={() => setOpenDropdown(openDropdown ? false : true)}
        className={`filter__btn ${openDropdown ? 'filter__btn--open' : null}`}
      >
        <span>Filter by Region</span>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.375 1.625L3.825 5.075L0.375 8.525L1.425 9.575L5.925 5.075L1.425 0.575001L0.375 1.625Z"
          />
        </svg>
      </button>
      <ul
        className={`filter__list ${openDropdown ? 'filter__list--open' : null}`}
      >
        <li>
          <button onClick={() => filterByRegion('africa')}>Africa</button>
        </li>
        <li>
          <button onClick={() => filterByRegion('americas')}>Americas</button>
        </li>
        <li>
          <button onClick={() => filterByRegion('asia')}>Asia</button>
        </li>
        <li>
          <button onClick={() => filterByRegion('europe')}>Europe</button>
        </li>
        <li>
          <button onClick={() => filterByRegion('oceania')}>Oceania</button>
        </li>
      </ul>
    </div>
  )
}

export default Filter
