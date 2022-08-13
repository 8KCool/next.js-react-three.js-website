function SearchBar({ placeholder }) {
  return (
    <div className="search">
      <div className="flex-row justify-start">
        <input
          type="text"
          className="border-paragraph w-64 rounded-lg border border-dark bg-transparent px-4 py-1 align-middle font-light outline-none focus:border-primary dark:border-white dark:focus:border-primary md:py-1.5 md:font-medium "
          placeholder={placeholder}
        />
        <div>
          <buton className="justify-start rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </buton>
        </div>
      </div>
      <div className="dataResult"></div>
    </div>
  )
}

export default SearchBar
