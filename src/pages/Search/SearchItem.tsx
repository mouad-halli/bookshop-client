import { BookType } from '@/@Types/book'
import { FC } from 'react'
import { PiShoppingCartFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

interface PropsType {
    product: BookType
}

const SearchItem: FC<PropsType> = ({ product }) => {

    const navigate = useNavigate()

    const handleNavigateToProduct = () => {
        navigate(`/product/${product._id}`)
    }

    return (
      <div className="group flex flex-col">
          <div onClick={handleNavigateToProduct} className="overflow-hidden bg-neutral-100 dark:bg-neutral-700 h-full w-full cursor-pointer">
              <img className=" group-hover:scale-105 transition w-auto h-auto min-h-52 max-h-[30rem] object-scale-down" src={product.imageUrl} alt="book_img" />
          </div>
          <div className=" font-secondary my-2 break-words">
              <h1 onClick={handleNavigateToProduct} className="line-clamp-2 group-hover:underline  cursor-pointer">{product.title}</h1>
              <h2 className=" text-sm text-black/70 line-clamp-2 cursor-default">{product.author}</h2>
          </div>
          <button type="button" className=" font-accent w-full flex gap-x-2 font-bold justify-center text-white bg-[#de2454] rounded-lg text-sm px-2 xl:px-5 py-2.5 text-center items-center transition hover:scale-105">
              <PiShoppingCartFill size={16} />
              Buy now
          </button>
      </div>
    )
}

export default SearchItem