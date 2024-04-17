import { useEffect, useMemo, useState } from "react"
import { deleteBook, getListings } from "../../../services/api/book"
import { BookType } from "../../../@Types/book"

export const PAGE_SIZE = 12

const useListings = () => {

    const [listings, setListings] = useState<BookType[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    const handleDeleteItem = async (itemId: string) => {
        try {
            await deleteBook(itemId)
            console.log('alooo')
            setListings(
                listings.filter((listing) => listing._id !== itemId)
            )
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddItem = (item: BookType) => {
        setListings([...listings, item])
    }

    const pageListings = useMemo(() => {
        const firstPageIdx = (currentPage - 1) * PAGE_SIZE
        const lastPageIdx = firstPageIdx + PAGE_SIZE

        return listings.slice(firstPageIdx, lastPageIdx)
    }, [currentPage, listings])

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const listings = await getListings()
                setListings([...listings])
            } catch (error) {
                console.log(error)
            }
        }

        fetchListings()
    }, [])

    return {
        pageListings, handleDeleteItem, handleAddItem,
        currentPage, setCurrentPage, totalItemsCount: listings.length
    }
}

export default useListings