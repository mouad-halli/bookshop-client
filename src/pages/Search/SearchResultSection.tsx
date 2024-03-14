import SearchItem from './SearchItem'

const SearchResultSection = () => {
  return (
    <section className=" grow">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-1">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
        </div>
    </section>
  )
}

export default SearchResultSection