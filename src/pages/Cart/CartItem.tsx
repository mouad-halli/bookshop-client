import { MdDeleteOutline, MdOutlineCheckBox  } from "react-icons/md";
import { cartItemType } from "../../@Types/cart";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Counter } from '../../components/ui/Counter';

interface PropsType {
    item: cartItemType
    upsertCartItem: (newItem: cartItemType) => void
}

const CartItem: FC<PropsType> = ({ item, upsertCartItem }) => {

    // const productImageMock = "https://booksondemand.ma/cdn/shop/products/8117HB7WbvL-min.jpg?v=1631701489&width=990"

    const [quantity, setQuantity] = useState(item.quantity)
    const [isDirty, setIsDirty] = useState(false)

    // const handleQuantityChange = (newQuantity: number) => {

    //     if (newQuantity < item.product.stockCount && newQuantity !== quantity) {
    //         setQuantity(newQuantity)
    //         setIsDirty(newQuantity && newQuantity === item.quantity ? false : true)
    //     }
    // }

    const handleCheckButtonClick = () => {
        upsertCartItem({...item, quantity})
        setIsDirty(false)
    }

    return (
        <div className="w-full flex border rounded bg-white dark:bg-neutral-950 shadow-sm p-3">
            {item.product.imageUrl && <Link to={`/product/${item.product._id}`} >
                <img
                    className="h-32 w-22"
                    src={item.product.imageUrl}
                    alt="cart_product_img"
                />
            </Link>}
            <div className="flex flex-col justify-between grow px-3 pb-2 overflow-x-clip">
                <div className="">
                    <h1 className=" text-lg line-clamp-2 font-medium ">{item.product.title}</h1>
                    {/* <h1 className=" line-clamp-2">{item.product.author}</h1> */}
                    <div className=" flex items-center gap-x-2 text-gray-700 dark:text-neutral-50">
                        <span className="">Price: </span>
                        <h1 className=" text-center line-clamp-2">${item.product.price}.00</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        {/* <span className="text-sm">quantity:</span>
                        <input
                            className="w-12 ring-1 rounded text-center"
                            value={quantity}
                            type="number"
                            min={0}
                            onChange={handleQuantityChange}
                        /> */}
                        <div className="w-28">
                            <Counter
                                initCounter={item.quantity}
                                maxCounter={item.product.stockCount}
                                setIsDirty={setIsDirty}
                                counter={quantity}
                                setCounter={setQuantity}
                            />
                        </div>
                        {isDirty && <MdOutlineCheckBox
                            className=" cursor-pointer"
                            // style={{...deleteButtonStyle, color: "#2563eb"}}
                            size={20}
                            onClick={handleCheckButtonClick}
                        />}
                    </div> 
                    <MdDeleteOutline
                        className="cursor-pointer"
                        // style={deleteButtonStyle}
                        size={20}
                        onClick={() => upsertCartItem({...item, quantity: 0})}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartItem