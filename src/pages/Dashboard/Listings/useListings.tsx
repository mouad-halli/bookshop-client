import { useEffect, useState } from "react"
import { getListings } from "../../../services/api/book"
import { BookType } from "../../../@Types/book"
import { booksMockData } from "../../../constants/mokeData"

const useListings = () => {

    const [listings, setListings] = useState<BookType[]>([])

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
        listings
    }
}

export default useListings