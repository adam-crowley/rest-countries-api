import { CountryItem } from '../../types/models'
import data from '../data.json'
import Country from './Country'
import { useCountryStore } from '../store/countyStore'

function Countries() {
  const { currentRegion } = useCountryStore()
  return (
    <section className="section--countries">
      {currentRegion === 'all'
        ? data.map((country: CountryItem) => (
            <Country key={country.numericCode} country={country} />
          ))
        : data
            .filter(
              (country: CountryItem) =>
                country.region.toLowerCase() === currentRegion
            )
            .map((country: CountryItem) => (
              <Country key={country.numericCode} country={country} />
            ))}
    </section>
  )
}

export default Countries
