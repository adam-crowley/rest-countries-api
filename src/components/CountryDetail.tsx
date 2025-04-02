import { CountryItem } from '../../types/models'
import { Link, useParams } from 'react-router'
import { useCountryStore } from '../store/countyStore'

function CountryDetail() {
  const { countryName } = useParams<string>()
  const { countryData } = useCountryStore()

  const country = countryData.find(
    (country: CountryItem) => country.name === countryName
  )

  return country ? (
    <div className="country">
      <Link to="/">Back</Link>
      <div className="country__img-wrapper">
        <img src={country.flag} alt={`Flag image for ${country.name}`} />
      </div>
      <div className="country__details">
        <h2>{country.name}</h2>
        <ul className="country__details-list">
          <li>
            <strong>Population:</strong> {country.population}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <h2>Country not found</h2>
  )
}

export default CountryDetail
