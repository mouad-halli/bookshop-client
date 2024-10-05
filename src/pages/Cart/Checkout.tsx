import { HiPencil } from 'react-icons/hi'
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
import { SiMaildotru } from 'react-icons/si'
import { useContext } from 'react'
import { userContext } from '../../Contexts/userContext'

const Checkout = () => {

    const { user } = useContext(userContext)

    if ( !user )
        return

    return (
        <div className=' h-full w-full flex flex-col gap-y-5 px-4'>
            <div className='bg-slate-100 py-6 px-7 flex flex-col gap-y-3 rounded-xl'>
                <div className=' flex justify-between items-center'>
                    <h1 className='font-medium text-xl'>Personal information</h1>
                    <div className=' bg-white p-1 text-lg rounded-full transition hover:scale-125 ease-linear cursor-pointer'
                        // onClick={() => navigate('/dashboard/settings')}
                    >
                        <HiPencil/>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center text-slate-600 text-sm'>
                        <AiOutlineUser className=' w-8 text-lg text-blue-700' />
                        <span>{'mouad halli'}</span>
                    </div>
                    <div className='flex items-center text-slate-600 text-sm'>
                        <SiMaildotru className=' w-8  text-blue-600' />
                        <span>{user.email ? user.email : '--'}</span>
                    </div>
                    <div className='flex items-center text-slate-600 text-sm'>
                        <AiOutlinePhone className=' w-8 text-lg text-blue-600' />
                        <span>{"" ? "" : '--'}</span>
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 py-6 px-7 flex flex-col gap-y-3 rounded-xl'>
                <div className=' flex justify-between items-center'>
                    <h1 className='font-medium text-xl'>Shipping information</h1>
                    <div className=' bg-white p-1 text-lg rounded-full transition hover:scale-125 ease-linear cursor-pointer'
                        // onClick={() => navigate('/dashboard/settings')}
                    >
                        <HiPencil/>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center text-slate-600 text-sm'>
                        <span className=" line-clamp-4">{
                            // userAddress ? `${userAddress.country}, ${userAddress.city}, ${userAddress.street1}, ${userAddress.street2}, ${userAddress.zipCode}` : '--'
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout