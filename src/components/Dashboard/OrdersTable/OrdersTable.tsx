import { ColumnDef } from "@tanstack/react-table"
import DataTable from "../ui/DataTable"
import { OrderItemType } from "@/@Types/orderItem"
import { ArrowDownFromLine, ArrowRightFromLineIcon } from "lucide-react"

interface columnsType extends Pick<OrderItemType, "_id" | "name" | "status" | "quantity" | "unitPrice"> {}

interface PropsType{
    orders: OrderItemType[]
}

const OrdersTable = ({
    orders,
}: PropsType) => {
    const columns: ColumnDef<columnsType>[] = [
        // {
        //     accessorKey: "_id",
        //     header: "OrderId",
        // },
        {
            accessorKey: "order.customer",
            header: "Customer",
            cell: (info) => {
                const customer: any = info.getValue()
                return <div className=" font-medium">{`${customer.firstname} ${customer.lastname}`}</div>
            }
        },
        {
            accessorKey: "name",
            header: "Product Name",
        },
        // {
        //     accessorKey: "quantity",
        //     header: "Quantity",
        // },
        {
            accessorKey: "unitPrice",
            header: "Total Price",
            cell: ({ row }) => {
                const unitPrice = parseFloat(row.getValue("unitPrice"))
                const quantity = parseFloat(row.getValue("quantity"))
                const formatted = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(unitPrice * quantity)
    
                return <div className=" font-medium">{formatted}</div>
            },
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            id: 'expander', // ID is required for custom columns
            header: () => null, // No header for expand column
            cell: ({ row }) => (
              <button
                onClick={() => row.toggleExpanded()}
                className="expand-button"
              >
                {row.getIsExpanded() ? <ArrowDownFromLine size={20} /> : <ArrowRightFromLineIcon size={20} />}
              </button>
            ),
          },
    ]

    return (
        <DataTable columns={columns} data={orders} />
    )
}

export default OrdersTable