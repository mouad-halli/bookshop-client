import { useEffect, useState } from "react"
import { deleteBook, getListings } from "../../../services/api/book"
import { BookType } from "../../../@Types/book"

const useListings = () => {

    const [listings, setListings] = useState<BookType[]>([])

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
        listings, handleDeleteItem, handleAddItem
    }
}

export default useListings