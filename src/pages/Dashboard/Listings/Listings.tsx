import useListings from "./useListings"
import ListingForm from "./ListingForm/ListingForm";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ListingsTable from "@/components/Dashboard/ListingsTable/ListingsTable";

const Listings = () => {

    const {
        listings,
        handleDeleteItem,
        handleAddItem,
        handleUpdateItem,
        isCreating,
        setIsCreating,
        isEditing,
        setIsEditing,
        selectedListingId,
        handleSetIsEditing
    } = useListings()

    return (
        <section className="h-full space-y-6 px-10">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-lg font-medium">My Products</h1>
                <Dialog open={isCreating} onOpenChange={setIsCreating}>
                    <DialogTrigger asChild >
                        <Button>Create Product</Button>
                    </DialogTrigger>
                    <DialogContent className="dark:text-neutral-50">
                        <DialogHeader>
                            <DialogTitle>Create Listing</DialogTitle>
                            <DialogDescription>
                                Add a new book to be sold.
                            </DialogDescription>
                        </DialogHeader>
                        <ListingForm
                            addItem={handleAddItem}
                            setIsOpen={setIsCreating}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
               <DialogContent className="dark:text-neutral-50">
                   <DialogHeader>
                       <DialogTitle>Edit Listing</DialogTitle>
                       <DialogDescription>
                           Edit existing book information
                       </DialogDescription>
                   </DialogHeader>
                   {selectedListingId != "" &&
                        <ListingForm
                           listing={listings.find(listing => listing._id === selectedListingId)}
                           updateItem={handleUpdateItem}
                           setIsOpen={setIsEditing}
                        />
                   }
               </DialogContent>
            </Dialog>
            <div className="w-full">
                <ListingsTable
                    listings={listings}
                    deleteItem={handleDeleteItem}
                    editItem={handleSetIsEditing}
                />
            </div>
        </section>
    )
}

export default Listings