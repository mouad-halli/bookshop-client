import { useEffect, useState } from "react"
import { deleteBook, getListings } from "../../../services/api/book"
import { BookType } from "../../../@Types/book"

export let PAGE_SIZE = 12

const useListings = () => {

    const [listings, setListings] = useState<BookType[]>([])
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [selectedListingId, setSelectedListingId] = useState<string>("")
    const [isCreating, setIsCreating] = useState(false)

    // const [currentPage, setCurrentPage] = useState(1)

    const handleSetIsEditing = (listingId: string) => {
        setSelectedListingId(listingId)
        setIsEditing(true)
    }

    const handleDeleteItem = async (itemId: string) => {
        try {
            await deleteBook(itemId)
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

    const handleUpdateItem = (updatedItem: BookType) => {
        setListings(listings.map((item) => {
            if (item._id === updatedItem._id)
                item = updatedItem
            return item
        }))
    }

    // const pageListings = useMemo(() => {
    //     const firstPageIdx = (currentPage - 1) * PAGE_SIZE
    //     const lastPageIdx = firstPageIdx + PAGE_SIZE

    //     return listings.slice(firstPageIdx, lastPageIdx)
    // }, [currentPage, listings])

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

    // return {
    //     pageListings, handleDeleteItem, handleAddItem, handleUpdateItem,
    //     currentPage, setCurrentPage, totalItemsCount: listings.length,
    //     isModalVisible, setIsModalVisible
    // }

    return {
        listings,
        handleUpdateItem,
        handleAddItem,
        handleDeleteItem,
        isCreating,
        setIsCreating,
        isEditing,
        setIsEditing,
        selectedListingId,
        handleSetIsEditing
    }
}

export default useListings