import { GrClose } from "react-icons/gr";
import { VscLoading } from "react-icons/vsc";
import { useState } from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

const Loading = () => {
    return (
        <div className="h-full w-full bg-slate-100 animate-pulse flex justify-center items-center">
            <VscLoading size="30" className="mx-auto my-auto animate-spin" />
        </div>
    )
}

interface Propstype {
    setIsSideBarVisible?: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({ setIsSideBarVisible }: Propstype) => {

    if (!setIsSideBarVisible)
        return null

    const [isCheckout, setIsCheckout] = useState(false)

    const handleButtonClick = () => {

        if (isCheckout) // do checkout actions
            return
        else
            setIsCheckout(true)
        
    }

    return (
        <div className=" h-full w-full pl-5 flex flex-col justify-between ">
            <div className=" flex items-center pb-5">
                {isCheckout && <span onClick={() => setIsCheckout(false)}>{'<'}</span>}
                <h1 className="text-2xl font-medium text-center grow">{isCheckout ? 'Checkout' : 'Shopping Cart'}</h1>
                <GrClose onClick={() => setIsSideBarVisible(false)} className="cursor-pointer" size={25} />
            </div>
            {!isCheckout ?
                <CartItems />
                :
                <Checkout />
            }
            {/* <Loading /> */}
            <div className="flex flex-col gap-y-4 pt-2 pb-4">
                <h1 className="text-xl font-medium">Summary</h1>
                <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>$0</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Estimated shipping and handling</span>
                    <span>$0</span>
                </div>
                <div className="flex justify-between items-center border-y-2 py-2 font-medium text-lg">
                    <span>Total</span>
                    <span>$0</span>
                </div>
            </div>
            <button onClick={handleButtonClick} className="w-full py-2 flex items-center justify-center text-white font-medium bg-blue-600
                hover:bg-blue-700 rounded-lg"
                >
                    { isCheckout ? "Place Order" : 'Checkout' }
            </button>
        </div>
    )
}

export default Cart