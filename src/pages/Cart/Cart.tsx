import { GrClose } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";
import { FC, useContext, useState } from "react";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { cartcontext } from "../../Contexts/cartContext";
import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SquareX } from "lucide-react";
import { userAddress } from "@/@Types/user";
import { useFetch } from "@/hooks/useFetch";
import { userContext } from "@/Contexts/userContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ToastAction } from "@/components/ui/toast";
import { checkout } from "@/services/api/order";

const Loading = () => {
    return (
        <div className="h-full w-full bg-slate-100 animate-pulse flex justify-center items-center">
            <VscLoading size="30" className="mx-auto my-auto animate-spin" />
        </div>
    )
}

interface PropsType {
}

const Cart:FC<PropsType> = () => {

    const {
        data: address,
        isLoading,
        error
    } = useFetch<userAddress | null>(
        'user/address',
        null
    )

    const { cart, upsertCartItem, getCartTotal, clearCart } = useContext(cartcontext)
    const { user } = useContext(userContext)
    const { toast } = useToast()

    const [isCheckout, setIsCheckout] = useState(false)

    const handleButtonClick = async () => {

        if (isCheckout) { // do checkout actions

            if (!address)
                return toast({
                    variant: "destructive",
                    title: "Cannot Checkout",
                    description: "you need to add your address",
                    action:
                        <Link to={"/settings"}>
                            <ToastAction altText="settings">Settings</ToastAction>
                        </Link>
                })

            try {
                await checkout()
                clearCart()
                setIsCheckout(false)
                toast({
                    variant: "success",
                    title: "Order placed",
                })
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "error",
                })
                console.log(error)
            }
        }
        else {
            if (!user)
                toast({
                    variant: "destructive",
                    title: "Action require Log-in",
                    description: "please log-in to Checkout",
                    action:
                        <Link to={"login"}>
                            <ToastAction altText="Log-in">Log-in</ToastAction>
                        </Link>
                })
            else if (!cart || !cart.length)
                toast({
                    variant: "destructive",
                    title: "Empty Cart",
                    description: "please add items to your cart",
                })
            else
                setIsCheckout(true)
        }
        
    }

    return (
        <div className=" font-secondary h-full w-full flex flex-col justify-between pb-2 dark:text-neutral-50">
            <div className="px-4 flex items-center py-2 ">
                {isCheckout && <IoIosArrowBack size={22} className="cursor-pointer" onClick={() => setIsCheckout(false)} />}
                <SheetTitle className="text-lg font-medium text-center grow">
                    {isCheckout ? 'Checkout' : 'Shopping Cart'}
                </SheetTitle>
                {/* <GrClose onClick={handleToggleSideBarVisibility} className="cursor-pointer" size={18} /> */}
                <SheetClose>
                    <SquareX />
                </SheetClose>
            </div>
            {!isCheckout ?
                <CartItems
                    cart={cart}
                    upsertCartItem={upsertCartItem}
                />
                :
                <Checkout
                    user={user}
                    address={address}
                />
            }
            {/* <Loading /> */}
            <div className="flex flex-col gap-y-4 px-4 mt-2">
                <h1 className="text-xl font-medium">Summary</h1>
                <div className=" font-primary flex justify-between items-center text-slate-700 dark:text-gray-300 text-sm">
                    <span>Subtotal</span>
                    <span>$0</span>
                </div>
                <div className="font-primary flex justify-between items-center text-slate-700 dark:text-gray-300 text-sm">
                    <span>Estimated shipping and handling</span>
                    <span>$0</span>
                </div>
                <div className="flex justify-between items-center border-y-2 py-2 font-medium text-lg">
                    <span>Total</span>
                    <span>${getCartTotal()}</span>
                </div>
            </div>
            <button onClick={handleButtonClick} className=" font-accent font-semibold w-11/12 self-center py-2 mt-4 flex items-center justify-center text-white bg-blue-600
                hover:bg-blue-700 rounded-lg"
                >
                    { isCheckout ? "Place Order" : 'Checkout' }
            </button>
        </div>
    )
}

export default Cart