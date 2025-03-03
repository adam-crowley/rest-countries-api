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
      </div>
    </main>
  )
}

export default Main
