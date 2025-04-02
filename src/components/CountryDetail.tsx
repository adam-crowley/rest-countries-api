import { CountryItem } from '../../types/models'
import { Link, useParams } from 'react-router'
import { useCountryStore } from '../store/countyStore'

function CountryDetail() {
  const { countryName } = useParams<string>()
  const { countryData } = useCountryStore()

  const country = countryData.find(
    (country: CountryItem) => country.name === countryName
  )

  return (
    <main>
      <div className="container">
        <section className="section--country-detail">
          <div className="country-detail">
            <Link to="/" className="country-detail__link">
              <svg
                className="country-detail__arrow"
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
                />
              </svg>
              Back
            </Link>
            {country ? (
              <>
                <div className="country-detail__group">
                  <div className="country-detail__img-wrapper">
                    <img
                      src={country.flag}
                      alt={`Flag image for ${country.name}`}
                    />
                  </div>
                  <div className="country-detail__details-wrapper">
                    <div className="country-detail__details">
                      <h2>{country.name}</h2>
                      <div className="country__list-group">
                        <ul className="country__details-list">
                          <li>
                            <strong>Native Name:</strong> {country.nativeName}
                          </li>
                          <li>
                            <strong>Population:</strong> {country.population}
                          </li>
                          <li>
                            <strong>Region:</strong> {country.region}
                          </li>
                          <li>
                            <strong>Sub Region:</strong> {country.subregion}
                          </li>
                          <li>
                            <strong>Capital:</strong> {country.capital}
                          </li>
                        </ul>
                        <ul className="country__details-list">
                          <li>
                            <strong>Top Level Domain:</strong>{' '}
                            {country.topLevelDomain}
                          </li>
                          <li>
                            <strong>Currencies:</strong>{' '}
                            {country.currencies?.map(
                              (currency) => currency.name
                            )}
                          </li>
                          <li>
                            <strong>Languages:</strong>{' '}
                            {country.languages?.map(
                              (language) => language.name
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="country__border-countries">
                        Border Countries:
                        <ul>
                          {country.borders?.map((border) => (
                            <li>{border}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <h2>Country not found</h2>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default CountryDetail
