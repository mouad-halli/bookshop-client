import { FC } from "react"
import Carousel from "../../components/CarouselV1/Carousel"
import { userType } from "../../@Types/user"
import { Link } from "react-router-dom"

interface PropsType {
    seller: userType
}

const MultipleItemsCarousel: FC<PropsType> = ({ seller }) => {

    return (
        <div className=" w-full max-h-[29rem] flex flex-col gap-y-8 pt-10 px-8 border shadow rounded-lg" >
            {/* <h1 className="text-3xl font-bold text-indigo-950">Slider Title</h1> */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4 text-black/80 dark:text-neutral-300 cursor-pointer">
                    <img className="w-12 h-12 rounded-full border"
                        src="https://media.licdn.com/dms/image/D4E03AQHMaqZ7o6R5mg/profile-displayphoto-shrink_800_800/0/1670088663036?e=1710979200&v=beta&t=OBA42PJKeN6AZHM9VQiHY7Up0Tdauqnsv2gee1Dxe4o" alt="shop-seller_img"
                    />
                    <h1 className=" font-secondary font-medium">by {`${seller.firstname} ${seller.lastname}`}</h1>
                </div>
                <h2 className=" font-accent border-b border-black/80 dark:text-neutral-300 cursor-pointer">{`view all (${200})`}</h2>
            </div>
            {/* <Carousel styling="w-full border-black flex-1"> */}
            <Carousel isFullView={false} options={{ dragFree: true }} >
            {seller.books?.map(book => (
                <Link key={book._id}  to={`product/${book._id}`} className="w-full">
                <div className="max-w-44 drop-shadow-lg rounded-md overflow-hidden" >
                    {book.imageUrl && <img
                        src={book.imageUrl}
                        className="h-full w-full object-cover"
                    />}
                </div>
                </Link>
            ))}
            </Carousel>
        </div>
    )
}

export default MultipleItemsCarousel