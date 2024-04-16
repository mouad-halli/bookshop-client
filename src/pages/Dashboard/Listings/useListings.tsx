import { useEffect, useState } from "react"
import { getListings } from "../../../services/api/book"
import { BookType } from "../../../@Types/book"
import { booksMockData } from "../../../constants/mokeData"

const useListings = () => {

    const [listings, setListings] = useState<BookType[]>([])

    const handleDeleteItem = (itemId: string) => {
        setListings(
            listings.filter((listing) => listing._id !== itemId)
        )
    }

    useEffect(() => {
        const fetchListings = async () => {
            try {
                // const listings = await getListings()
                setListings([...booksMockData])
                // setListings(listings)
            } catch (error) {
                console.log(error)
            }
        }

        fetchListings()
    }, [])

    return {
        listings, handleDeleteItem
    }
}

export default useListings