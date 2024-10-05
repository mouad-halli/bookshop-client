import { GrClose } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";
import { FC, useContext, useState } from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { cartcontext } from "../../Contexts/cartContext";

const Loading = () => {
    return (
        <div className="h-full w-full bg-slate-100 animate-pulse flex justify-center items-center">
            <VscLoading size="30" className="mx-auto my-auto animate-spin" />
        </div>
    )
}

interface PropsType {
    setIsSideBarVisible?: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart:FC<PropsType> = ({ setIsSideBarVisible }) => {

    if (!setIsSideBarVisible)
        return null

    const { cart, upsertCartItem, getCartTotal } = useContext(cartcontext)

    const [isCheckout, setIsCheckout] = useState(false)

    const handleButtonClick = () => {

        if (isCheckout) // do checkout actions
            return
        else
            setIsCheckout(true)
        
    }

    return (
        <div className=" font-secondary h-full w-full flex flex-col gap-y-4 justify-between py-2">
            <div className="px-4 flex items-center">
                {isCheckout && <IoIosArrowBack size={22} className="cursor-pointer" onClick={() => setIsCheckout(false)} />}
                <h1 className="text-2xl font-medium text-center grow">{isCheckout ? 'Checkout' : 'Shopping Cart'}</h1>
                <GrClose onClick={() => setIsSideBarVisible(false)} className="cursor-pointer" size={22} />
            </div>
            {!isCheckout ?
                <CartItems
                    cart={cart}
                    upsertCartItem={upsertCartItem}
                    setIsSideBarVisible={setIsSideBarVisible}
                />
                :
                <Checkout />
            }
            {/* <Loading /> */}
            <div className="flex flex-col gap-y-4 px-4 mt-auto">
                <h1 className="text-xl font-medium">Summary</h1>
                <div className=" font-primary flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>$0</span>
                </div>
                <div className="font-primary flex justify-between items-center">
                    <span>Estimated shipping and handling</span>
                    <span>$0</span>
                </div>
                <div className="flex justify-between items-center border-y-2 py-2 font-medium text-lg">
                    <span>Total</span>
                    <span>${getCartTotal()}</span>
                </div>
            </div>
            <button onClick={handleButtonClick} className=" font-accent font-semibold w-11/12 self-center py-2 flex items-center justify-center text-white bg-blue-600
                hover:bg-blue-700 rounded-lg"
                >
                    { isCheckout ? "Place Order" : 'Checkout' }
            </button>
        </div>
    )
}

export default Cart