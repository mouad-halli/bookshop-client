import Carousel from "../../components/Carousel/Carousel"
import CarouselItem from "../../components/Carousel/CarouselItem"

const MultipleBooksPerViewCarousel = () => {
    return (
        <div className=" h-[23rem] w-full flex flex-col gap-y-4 pb-2" >
            <h1 className="text-3xl font-bold text-indigo-950">Slider Title</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4 text-black/80 cursor-pointer">
                    <img className="w-12 h-12 rounded-full border"
                        src="https://media.licdn.com/dms/image/D4E03AQHMaqZ7o6R5mg/profile-displayphoto-shrink_800_800/0/1670088663036?e=1710979200&v=beta&t=OBA42PJKeN6AZHM9VQiHY7Up0Tdauqnsv2gee1Dxe4o" alt="shop-seller_img"
                    />
                    <h2>by mouad halli</h2>
                </div>
                <h2 className=" border-b border-black/80 cursor-pointer">{`view all (${200})`}</h2>
            </div>
            <Carousel styling="w-full border-black flex-1">
            {[...Array(12)].map((_, index) => (
                <CarouselItem key={index} styling="min-w-40 mr-2 shadow-lg rounded border" >
                    <img
                        src="https://booksondemand.ma/cdn/shop/products/Atomichabits-min.jpg?v=1631701304&width=823"
                        className="h-full w-full object-cover"
                    />
                </CarouselItem>
            ))}
            </Carousel>
        </div>
    )
}

export default MultipleBooksPerViewCarousel