import { booksMockData } from "../../constants/mokeData"
import { FiMinus, FiPlus } from "react-icons/fi";

const Product = () => {

    const {name, author, img, price, description} = booksMockData[0]

    return (
        <main className="w-full px-3 2xl:px-24 py-10 pb-10">
            <section className=" h-auto w-auto md:max-w-[65rem] md:mx-auto flex flex-col md:flex-row gap-y-6 md:gap-x-10 2xl:gap-x-20">
                <div className="grow mx-auto">
                    <img className=" max-w-72 md:w-full md:max-w-[30rem] md:h-auto object-cover" src={img} alt="product_img" />
                </div>
                <div className="flex shrink-0 flex-col gap-y-6 md:max-w-96">
                    <div className="flex flex-col text-center md:text-left gap-y-2 break-words overflow-clip font-Archivo ">
                        <h3 className=" font-light text-xs line-clamp-2 uppercase ">{author}</h3>
                        <h1 className=" text-4xl md:text-5xl line-clamp-2 ">{name}</h1>
                    </div>
                    <span className="md:text-lg text-center md:text-left">{price} $</span>
                    <div className="flex justify-center md:justify-start">
                        <div className="flex items-center border border-gray-400 rounded-lg px-6 gap-x-4">
                            <button className=" cursor-not-allowed"><FiMinus /></button>
                            <input type="number" value={0} min={0} className="w-20 py-4 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                            <button><FiPlus /></button>
                        </div>
                    </div>
                    <button type="button" className=" w-full max-w-96 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg px-8 py-3 text-center">
                        Add to cart
                    </button>
                    <div>
                        <p className="w-10/12 md:w-full mx-auto text-center md:text-left leading-loose text-gray-600">{description}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Product