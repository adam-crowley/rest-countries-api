import { CountryItem } from '../../types/models'
import Country from './Country'
import { useCountryStore } from '../store/countyStore'

function Countries() {
  const { countryData, filteredData, searchInput, currentRegion } =
    useCountryStore()

  let dataToRender = []

  if (searchInput.length) {
    dataToRender = filteredData
  } else if (currentRegion === 'all') {
    dataToRender = countryData
  } else {
    dataToRender = countryData.filter(
      (country: CountryItem) => country.region.toLowerCase() === currentRegion
    )
  }

  return (
    <section className="section--countries">
      {dataToRender.map((country: CountryItem) => (
        <Country key={country.numericCode} country={country} />
      ))}
    </section>
  )
}

export default Countries
