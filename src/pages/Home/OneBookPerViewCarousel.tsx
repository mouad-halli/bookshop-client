import { PiShoppingCartFill } from "react-icons/pi"
import Carousel from "../../components/CarouselV1/Carousel"
import { booksMockData } from "../../constants/mokeData"

const OneItemCarousel = () => {

    return (
        <Carousel isFullView={true} options={{ loop: true }}>
        {booksMockData.map((book, id) => (
            <div
                key={id}
                className=" font-primary mx-auto h-full w-5/6 flex items-center justify-center gap-x-10 py-10 "
            >
                <div className=" w-auto max-w-[15rem] h-full overflow-hidden rounded-md shadow-xl">
                    {book.imageUrl && <img
                        src={book.imageUrl} alt="book_cover"
                        className=" h-full w-full object-cover"
                    />}
                </div>
                <div className="shrink-0 w-6/12 flex h-full flex-col justify-center gap-y-6">
                    <h1 className="font-secondary font-medium text-4xl truncate text-indigo-950">{book.title}</h1>
                    <div className=" w-auto overflow-hidden line-clamp-[9] ">
                        <p className=" text-black/90">{book.description}</p>
                    </div>
                    <button type="button" className=" font-accent font-bold md:w-3/6 flex gap-x-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <PiShoppingCartFill size={16} />
                        Buy now
                    </button>
                </div>
            </div>
        ))}
        </Carousel>
    )
}

export default OneItemCarousel