import useListings, {PAGE_SIZE} from "./useListings"
import ListingItem from './ListingItem/ListingItem';
import Pagination from "./Pagination/Pagination";
import Modal from "../../../components/Modal/Modal";
import ListingForm from "./AddListings/ListingForm";

const Listings = () => {

    const {
        pageListings,
        handleDeleteItem,
        handleAddItem,
        currentPage,
        setCurrentPage,
        totalItemsCount,
        isModalVisible,
        setIsModalVisible,
        handleUpdateItem
    } = useListings()

    return (
        <div className="w-full min-h-full flex flex-col gap-y-10 py-8 px-8 md:px-16 ">
            <div className="flex items-center">
                <h1 className="text-xl md:text-3xl md:text-center font-semibold grow">My Products</h1>
                <button
                    className=" text-white font-medium bg-blue-600
                    hover:bg-indigo-600 rounded-lg px-5 py-3"
                    onClick={() => setIsModalVisible(true)}
                >
                    Create Product
                </button>
                <Modal modalTitle={"Create Listing"} isModalVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
                    <ListingForm
                        setIsModalVisible={setIsModalVisible}
                        addItem={handleAddItem}
                    />
                </Modal>
            </div>
            <div className="w-full grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {pageListings.map((item) => (
                    <ListingItem deleteItem={handleDeleteItem} updateItem={handleUpdateItem} key={item._id} book={item} />
                ))}
            </div>
            <div className="grow flex items-end justify-center">
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={(page: number) => setCurrentPage(page)}
                    itemsPerVue={PAGE_SIZE}
                    totalItemsCount={totalItemsCount}
                />
            </div>
        </div>
    )
}

export default Listings