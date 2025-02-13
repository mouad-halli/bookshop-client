import { HiPencil } from 'react-icons/hi'
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
import { SiMaildotru } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { DialogClose } from '@/components/ui/dialog'
import { FC } from 'react'
import { userAddress, userType } from '@/@Types/user'

interface PropsType {
    user: userType | null | undefined
    address: userAddress | null
}

const Checkout: FC<PropsType> = ({
    user,
    address
}) => {

    if (user === undefined)
        return null // should be replaced with a loading element

    return (
        <div className=' h-full w-full flex flex-col gap-y-5 px-4 '>
            <div className='bg-slate-100 dark:bg-neutral-800 py-6 px-7 flex flex-col gap-y-3 rounded-xl'>
                <div className=' flex justify-between items-center'>
                    <h1 className='font-medium text-xl'>Personal information</h1>
                    <DialogClose asChild>
                        <Link to={'settings'} className=' bg-white dark:bg-neutral-950 p-1 text-lg rounded-full transition hover:scale-125 ease-linear cursor-pointer'
                        >
                            <HiPencil/>
                        </Link>
                    </DialogClose>
                </div>
                <div className='flex flex-col gap-y-2 text-slate-500 dark:text-neutral-400 '>
                    <div className='flex items-center text-sm'>
                        <AiOutlineUser className=' w-8 text-lg text-blue-700' />
                        <span>{ user ? user?.firstname + ' ' + user?.lastname : '--'}</span>
                    </div>
                    <div className='flex items-center text-sm'>
                        <SiMaildotru className=' w-8  text-blue-600' />
                        <span>{user?.email ? user?.email : '--'}</span>
                    </div>
                    <div className='flex items-center text-sm'>
                        <AiOutlinePhone className=' w-8 text-lg text-blue-600' />
                        <span>{"" ? "" : '--'}</span>
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 dark:bg-neutral-800 py-6 px-7 flex flex-col gap-y-3 rounded-xl'>
                <div className=' flex justify-between items-center'>
                    <h1 className='font-medium text-xl'>Shipping information</h1>
                    <DialogClose asChild>
                        <Link to={'settings'} className=' bg-white dark:bg-neutral-950 p-1 text-lg rounded-full transition hover:scale-125 ease-linear cursor-pointer'
                        >
                            <HiPencil/>
                        </Link>
                    </DialogClose>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center text-slate-600 dark:text-neutral-400 text-sm'>
                        <span className=" line-clamp-4">{
                            address ? `${address.country}, ${address.city}, ${address.address1}, ${address.address2}, ${address.zipCode}` : '--'
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout