function Filter() {
  return (
    <div className="filter">
      <button className="filter__head">
        <span>Filter by Region</span>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.375 1.625L3.825 5.075L0.375 8.525L1.425 9.575L5.925 5.075L1.425 0.575001L0.375 1.625Z"
          />
        </svg>
      </button>
      <ul className="filter__list">
        <li>
          <button>Africa</button>
        </li>
        <li>
          <button>America</button>
        </li>
        <li>
          <button>Asia</button>
        </li>
        <li>
          <button>Europe</button>
        </li>
        <li>
          <button>Oceania</button>
        </li>
      </ul>
    </div>
  )
}

export default Filter
