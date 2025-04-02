import { Link } from 'react-router'
import { CountryProps } from '../../types/models'

function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <div className="country__img-wrapper">
        <Link to={`country/${country.name}`}>
          <img src={country.flag} alt={`Flag image for ${country.name}`} />
        </Link>
      </div>
      <div className="country__details">
        <h2>
          <Link to={`country/${country.name}`}>{country.name}</Link>
        </h2>
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
  )
}

export default Country
