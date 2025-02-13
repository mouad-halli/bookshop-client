import {
    ColumnDef,
} from "@tanstack/react-table"

import DataTable from "../ui/DataTable"
import { BookType } from "@/@Types/book"
import ActionsDropDown from "./ActionsDropDown"

interface columnstype extends Pick<BookType, "_id" | "title" | "author" | "price" | "stockCount"> {}

interface PropsType{
    listings: BookType[]
    deleteItem: (itemId: string) => Promise<void>
    editItem: (listingId: string) => void
}

const ListingsTable = ({
    listings,
    deleteItem,
    editItem
}: PropsType) => {

    const columns: ColumnDef<columnstype>[] = [
        {
            accessorKey: "title",
            header: "Title",
        },
        {
            accessorKey: "author",
            header: "Author",
        },
        {
            accessorKey: "stockCount",
            header: "Stock",
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("price"))
                const formatted = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(amount)
    
                return <div className=" font-medium">{formatted}</div>
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <div className="text-right">
                        <ActionsDropDown
                            bookId={row.original._id}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                    </div>
                )
            },
        },
    ]

    return (
        <DataTable columns={columns} data={listings} />
    )
}

export default ListingsTable