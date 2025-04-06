import Countries from './Countries'
import Filter from './Filter'
import Search from './Search'

function Main() {
  return (
    <main>
      <div className="container">
        <div className="section--search-filter">
          <Search />
          <Filter />
        </div>
        <Countries />
      </div>
    </main>
  )
}

export default Main
