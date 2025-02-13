import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Link } from "react-router-dom"

interface PropsType {
    bookId: string
    deleteItem: (itemId: string) => Promise<void>
    editItem: (listingId: string) => void
}

const ActionsDropDown: React.FC<PropsType> = ({
    bookId,
    deleteItem,
    editItem
}: PropsType) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="size-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className=" size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                {/* <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                    Copy payment ID
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link to={`/product/${bookId}`}>
                        View
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => editItem(bookId)}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => deleteItem(bookId)}>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ActionsDropDown