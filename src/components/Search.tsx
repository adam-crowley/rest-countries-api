import { CountryItem } from '../../types/models'
import { useCountryStore } from '../store/countyStore'

function Search() {
  const { countryData, setFilteredData, searchInput, setSearchInput } =
    useCountryStore()
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
    const filteredData = countryData.filter((country: CountryItem) =>
      Object.values(country.name)
        .join('')
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )
    setFilteredData(filteredData)
  }
  return (
    <div className="search">
      <div className="search__input-group">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#848484"
          />
        </svg>
        <label htmlFor="country-search">Search for a country…</label>
        <input
          className="search__input"
          type="search"
          id="country-search"
          name="country-search"
          placeholder="Search for a country…"
          value={searchInput}
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
