import { FC } from "react"
import CartItem from "./CartItem"
import { cartItemType } from "../../@Types/cart"

interface PropsType {
    cart: cartItemType[]
    upsertCartItem: (newItem: cartItemType) => void
}

const CartItems: FC<PropsType> = ({ cart, upsertCartItem }) => {

    return (
        <div className="h-full overflow-y-auto space-y-6 bg-slate-50 dark:bg-neutral-900 shadow-inner p-4 mx-2 rounded">
            {cart.length > 0 && cart.map(item => (
                <CartItem
                    key={item.product._id}
                    item={item}
                    upsertCartItem={upsertCartItem}
                />
            ))}
        </div>
    )
}

export default CartItems