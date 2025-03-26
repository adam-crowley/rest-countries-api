import data from '../data.json'

function Countries() {
  return (
    <section className="section--countries">
      {data.map((country) => (
        <div key={country.numericCode} className="country">
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
      ))}
    </section>
  )
}

export default Countries
