import OrdersTable from '../../../components/Dashboard/OrdersTable/OrdersTable';
import useOrders from './useOrders';

const Orders = () => {

    const {
        data,
        isLoading,
        error
    } = useOrders()

    console.table(data)

    return (
        <section className="h-full space-y-6 pt-10 px-10">
            <h1 className="text-lg font-medium">My Orders</h1>
            <OrdersTable orders={data} />
        </section>
    )
}

export default Orders