import Carousel from "../../components/CarouselV1/Carousel"

const MultipleBooksPerViewCarousel = () => {

    return (
        <div className=" h-[29rem] w-full flex flex-col gap-y-4 pb-2" >
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
            {/* <Carousel styling="w-full border-black flex-1"> */}
            <Carousel isFullView={false} options={{ dragFree: true }} >
            {[...Array(12)].map((_, index) => (
                <div key={index} className="min-w-40 drop-shadow-lg rounded-md overflow-hidden" >
                    <img
                        src="https://booksondemand.ma/cdn/shop/products/Atomichabits-min.jpg?v=1631701304&width=823"
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}
            </Carousel>
        </div>
    )
}

export default MultipleBooksPerViewCarousel