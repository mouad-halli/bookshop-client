import CartItem from "./CartItem"

const CartItems = () => {

    return (
        <div className="h-full overflow-y-auto space-y-6">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>   
    )
}

export default CartItems