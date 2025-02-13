import { useSearchParams } from "react-router-dom"
import FilterSection from "./Filter/FilterSection"
import SearchResultSection from "./SearchResultSection"
import SortSection from "./Sort/SortSection"
import { useEffect, useState } from "react"
import $api from "@/services/api/API"
import { BookType } from "@/@Types/book"

const Search = () => {
    
    const [searchParams] = useSearchParams()
    const [products, setProducts] = useState<BookType[]>([])

    const searchType = searchParams.get('type')
    const searchQuery = searchParams.get('q')

    useEffect(() => {
        window.scroll(0, 0)
        
        const fetchBooksByName = async () => {
            try {
                const res = await $api.get(`book/${searchType}`, { params: { q: searchQuery } })
                res.data.map((book: any) => book.display = true)
                setProducts(res.data)
            } catch (error) {console.log(error)}
        }

        fetchBooksByName()
        
    }, [searchQuery])
    
    return (
        <main className="min-h-[63dvh] dark:bg-neutral-900 dark:text-neutral-50 w-full px-10 2xl:px-24 py-10">
            <div className="max-w-[80rem] mx-auto">
                <SortSection />
                <div className="flex">
                    <FilterSection />
                    <SearchResultSection products={products} />
                </div>
            </div>
        </main>
    )
}

export default Search