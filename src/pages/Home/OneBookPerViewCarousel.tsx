import { PiShoppingCartFill } from "react-icons/pi"
import Carousel from "../../components/Carousel/Carousel"
import CarouselItem from "../../components/Carousel/CarouselItem"
import { booksMockData } from "../../constants/mokeData"

const OneBookPerViewCarousel = () => {
    return (
        <Carousel styling="w-[50rem] h-full">
        {booksMockData.map((book, id) => (
            <CarouselItem key={id} styling="min-w-full gap-x-24 py-10 px-4">
                <div className="h-full w-full flex items-center justify-between gap-x-10">
                    <div className="grow w-auto max-w-[15dvw] max-h-full overflow-hidden rounded-md shadow-xl ml-auto">
                        <img
                            src={book.img} alt="book_cover"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                    <div className=" shrink-0 w-6/12 flex h-full flex-col justify-center gap-y-6">
                        <h1 className="font-Archivo text-4xl truncate text-indigo-950">{book.name}</h1>
                        <div className=" w-auto overflow-hidden line-clamp-[9] ">
                            <p className=" text-black/90">{book.description}</p>
                        </div>
                        <button type="button" className="sm:w-4/6 flex gap-x-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <PiShoppingCartFill size={16} />
                            Buy now
                        </button>
                    </div>
                </div>
            </CarouselItem>
        ))}
        </Carousel>
    )
}

export default OneBookPerViewCarousel