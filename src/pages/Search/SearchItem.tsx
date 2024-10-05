import { PiShoppingCartFill } from 'react-icons/pi'

const SearchItem = () => {
  return (
    <div className="group w-auto h-auto flex flex-col">
        <div className="overflow-hidden h-full">
            <img className=" group-hover:scale-105 transition w-full h-full object-cover" src="https://booksondemand.ma/cdn/shop/products/ItEndswithUsbyColleenHoover_z-lib.org_2_1.jpg?v=1609449563&width=360" alt="book_img" />
        </div>
        <div className=" font-secondary my-2 break-words">
            <h1 className="line-clamp-2 group-hover:underline ">The Brothers Karamazo </h1>
            <h2 className=" text-sm text-black/70 line-clamp-2">Fyodor Dostoyevsky</h2>
        </div>
        <button type="button" className=" font-accent w-full flex gap-x-2 font-bold justify-center text-white bg-[#de2454] rounded-lg text-sm px-2 xl:px-5 py-2.5 text-center items-center transition hover:scale-105">
            <PiShoppingCartFill size={16} />
            Buy now
        </button>
    </div>
  )
}

export default SearchItem