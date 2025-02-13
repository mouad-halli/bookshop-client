import { BookType } from '@/@Types/book'
import SearchItem from './SearchItem'
import { FC } from 'react'

interface PropsType {
    products: BookType[]
}

const SearchResultSection: FC<PropsType> = ({ products }) => {
  return (
    <section className=" grow">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
            {products.length > 0 && products.map(product => (
                <SearchItem key={product._id} product={product} />
            ))}
        </div>
    </section>
  )
}

export default SearchResultSection