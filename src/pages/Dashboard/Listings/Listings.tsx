import AddListing from "./AddListings/AddListing"

const Listings = () => {

    return (
        <div className="w-full h-full py-8 px-16">
            <div className="flex items-center">
                <h1 className="text-3xl text-center font-semibold grow">My Products</h1>
                <AddListing />
            </div>
            
        </div>
    )
}

export default Listings