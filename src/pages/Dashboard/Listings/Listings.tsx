import AddListing from "./AddListings/AddListing"
import useListings from "./useListings"
import ListingItem from './ListingItem/ListingItem';
import Pagination from "./Pagination/Pagination";

const Listings = () => {

    const { listings, handleDeleteItem, handleAddItem } = useListings()

    return (
        <div className="w-full min-h-full flex flex-col gap-y-10 py-8 px-16 ">
            <div className="flex items-center">
                <h1 className="text-3xl text-center font-semibold grow">My Products</h1>
                <AddListing addItem={handleAddItem} />
            </div>
            <div className="w-full grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {listings.map((item) => (
                    <ListingItem deleteItem={handleDeleteItem} key={item._id} book={item} />
                ))}
            </div>
            <div className="grow flex items-end justify-center">
                <Pagination itemsPerVue={12} totalItemsCount={54} />
            </div>
        </div>
    )
}

export default Listings