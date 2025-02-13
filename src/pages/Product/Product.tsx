import { useParams } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BookType } from "../../@Types/book";
import { useFetch } from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { cartcontext } from "../../Contexts/cartContext";
import { MdDeleteOutline } from "react-icons/md";
import { Counter } from "../../components/ui/Counter";

const Product = () => {

    const { productId } = useParams()
    
    if (!productId)
        return
    
    const { cart, isLoading: isCartLoading, upsertCartItem, getItemQuantity } = useContext(cartcontext)
    const {data, error, isLoading } = useFetch<BookType>(`/book/${productId}`, {} as BookType)
    const [isDirty, setIsDirty] = useState(false)
    const [isInCart, setIsInCart] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const [initialQuantity, setInitialQuantity] = useState(0)

    const handleAddToCart = () => {
        if (!isDirty)
            return
        upsertCartItem({product: {...data}, quantity})
        setIsInCart(quantity ? true : false)
        setIsDirty(false)
    }

    const handleRemoveFromCart = () => {
        if (!isInCart)
            return
        upsertCartItem({product: {...data}, quantity: 0})
        setQuantity(0)
        setInitialQuantity(0)
        setIsInCart(false)
    }

    const handleChangeQuantity = (newQuantity: number) => {
        if (newQuantity > data.stockCount)
            newQuantity = data.stockCount
        setQuantity(newQuantity)
        setIsDirty(true)
    }

    useEffect(() => {
        if (!isLoading && !isCartLoading) {
            const quantityInCart = getItemQuantity(data._id)
            setQuantity(quantityInCart)
            setInitialQuantity(quantityInCart)
            setIsInCart(quantityInCart ? true : false)
        }
    }, [cart, isCartLoading, isLoading])

    const isDisabled = (!quantity && !isInCart) || isLoading || !isDirty

    return (
        <main className="w-full px-3 2xl:px-24 py-10 pb-10">
            <section className=" font-primary h-auto w-auto md:max-w-[65rem] md:mx-auto flex flex-col md:flex-row gap-y-6 md:gap-x-10 2xl:gap-x-20">
                <div className="grow mx-auto">
                { isLoading ?
                    <div className=" bg-slate-200 h-72 md:min-h-full animate-pulse w-72 md:w-[30rem] md:h-auto"></div>
                    :
                    <>{data.imageUrl && <img className=" max-w-72 md:w-full md:max-w-[30rem] md:h-auto object-cover" src={data.imageUrl} alt="product_img" />}</>
                }
                </div>
                <div className=" flex shrink-0 flex-col gap-y-6 md:max-w-96">
                    <div className="font-secondary flex flex-col text-center md:text-left gap-y-2 break-words overflow-clip ">
                        <h3 className=" text-xs line-clamp-2 uppercase ">{data.author}</h3>
                        <h1 className=" text-4xl md:text-5xl line-clamp-2 ">{data.title}</h1>
                    </div>
                    <div className=" font-secondary flex flex-col gap-y-1">
                        <span className="md:text-lg text-center md:text-left">${data.price}</span>
                        {!data.stockCount ?
                            <span className="text-sm text-center md:text-left text-red-500">out of stock</span>
                            :
                            <span className="text-sm text-center md:text-left text-green-600">{`${data.stockCount} item(s) available`}</span>
                        }
                    </div>
                    <div className="font-secondary flex justify-center items-center gap-x-4 md:justify-start">
                        {/* <div className="flex items-center border border-gray-400 rounded-lg px-6 gap-x-4">
                            <button
                                className={`${!quantity && 'cursor-not-allowed text-slate-500'}`}
                                onClick={() => quantity && handleChangeQuantity(quantity - 1)}
                            >
                                <FiMinus />
                            </button>
                            <input
                                type="number"
                                value={quantity} min={0}
                                onChange={(e) => handleChangeQuantity(e.target.valueAsNumber ? e.target.valueAsNumber : 0)}
                                className="w-20 py-4 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <button
                                className={`${quantity === data.stockCount && 'cursor-not-allowed text-slate-500'}`}
                                onClick={() => quantity < data.stockCount && handleChangeQuantity(quantity + 1)}
                            >
                                <FiPlus />
                            </button>
                        </div> */}
                        <div className="w-28">
                            <Counter
                                initCounter={initialQuantity}
                                maxCounter={data.stockCount}
                                setIsDirty={setIsDirty}
                                counter={quantity}
                                setCounter={setQuantity}
                            />
                        </div>
                        <MdDeleteOutline
                            onClick={handleRemoveFromCart}
                            className={`text-2xl ${isInCart ? 'cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
                        />
                    </div>
                    <button
                        type="button"
                        disabled={isDisabled}
                        onClick={handleAddToCart}
                        className={`font-accent w-full  max-w-96 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                        focus:outline-none rounded-lg px-8 py-3 text-center ${isDisabled && 'opacity-40 cursor-not-allowed'}`}>
                        { isInCart ?
                            'Update Quantity' :
                            'Add to cart'
                        }
                    </button>
                    <div className=" ">
                        <p className="w-10/12 md:w-full mx-auto text-center md:text-left leading-loose text-gray-600 break-words">{data.description}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Product