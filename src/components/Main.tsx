import Countries from './Countries'
import Filter from './Filter'
import Search from './Search'

function Main() {
  return (
    <main>
      <div className="container">
        <section className="section--search-filter">
          <Search />
          <Filter />
        </section>
        <Countries />
      </div>
    </main>
  )
}

export default Main
