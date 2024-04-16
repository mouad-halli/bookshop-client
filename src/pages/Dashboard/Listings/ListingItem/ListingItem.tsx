import { booksMockData } from '../../../../constants/mokeData'
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { BookType } from '../../../../@Types/book';
import Icon from '../../../../components/UI/Icon';

interface Propstype {
	book: BookType
    deleteItem: (itemId: string) => void
}

const ListingItem = ({ book, deleteItem }: Propstype) => {
	const {_id, image, title, price, author } = book
	return (
		<div className=' border  flex gap-x-4 px-5 py-4 border-slate-400 h-auto rounded-md shadow-md overflow-hidden'>
    		<div className=' min-w-24 w-24 overflow-hidden'>
    			<img src={image} className='w-auto h-auto object-cover' />
      		</div>
			<div className='w-full flex flex-col truncate'>
				<div className='flex gap-x-1 items-center'>
					<span className='text-slate-500'>Title : </span>
					<h1 className='text-sm truncate'>{title}</h1>
				</div>
				<div className='flex gap-x-1 items-center'>
					<span className='text-slate-500'>Author : </span>
				  	<h1 className='text-sm'>{author}</h1>
				</div>
				<div className='flex gap-x-1 items-center'>
					<span className='text-slate-500'>Price : </span>
					<h1 className='text-sm font-semibold'>${price}</h1>
				</div>
				<div className='grow flex gap-x-4 items-end justify-end p-1'>
					<Icon
                        onClick={() => deleteItem(_id)}
                        icon={<MdDelete size={18} />}
                        className={'ring-red-500 text-red-500'}
                    />
					<Icon
                        icon={<FaPencil size={18} />}
                        className='ring-blue-500 text-blue-500'/>
				</div>
			</div>
		</div>
  )
}

export default ListingItem