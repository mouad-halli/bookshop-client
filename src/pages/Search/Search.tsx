import FilterSection from "./Filter/FilterSection"
import SearchResultSection from "./SearchResultSection"
import SortSection from "./Sort/SortSection"

const Search = () => {
    
    return (
        <main className="min-h-[65dvh] w-full px-10 2xl:px-24 py-10">
            <div className="max-w-[78rem] mx-auto">
                <SortSection />
                <div className="flex">
                    <FilterSection />
                    <SearchResultSection />
                </div>
            </div>
        </main>
    )
}

export default Search