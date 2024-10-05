import { FC } from "react"
import CartItem from "./CartItem"
import { cartItemType } from "../../@Types/cart"

interface PropsType {
    setIsSideBarVisible?: React.Dispatch<React.SetStateAction<boolean>>
    cart: cartItemType[]
    upsertCartItem: (newItem: cartItemType) => void
}

const CartItems: FC<PropsType> = ({ cart, upsertCartItem, setIsSideBarVisible }) => {

    return (
        <div className="h-full overflow-y-auto space-y-6 bg-slate-50 shadow-inner p-4">
            {cart.length > 0 && cart.map(item => (
                <CartItem
                    key={item.product._id}
                    item={item}
                    setIsSideBarVisible={setIsSideBarVisible}
                    upsertCartItem={upsertCartItem}
                />
            ))}
        </div>
    )
}

export default CartItems