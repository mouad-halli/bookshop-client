import { MdDeleteOutline } from "react-icons/md";

const CartItem = () => {

    const productImageMock = "https://booksondemand.ma/cdn/shop/products/8117HB7WbvL-min.jpg?v=1631701489&width=990"
    const deleteButtonStyle = { color: "red", fontSize: "1.5em" }

    return (
        <div className="w-full flex">
            <img
                className="h-32 w-22"
                src={productImageMock}
                alt="cart_product_img"
            />
            <div className="flex flex-col justify-between grow px-3 pb-2 overflow-x-clip">
                <h1 className=" text-lg line-clamp-2 font-medium">Brothers Karmazov</h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <span className="text-sm">quantity:</span>
                        <input type="number" className="w-12 ring-1 text-center" />
                    </div>
                    <MdDeleteOutline className="cursor-pointer" style={deleteButtonStyle} size={20} />
                </div>
            </div>
        </div>
    )
}

export default CartItem