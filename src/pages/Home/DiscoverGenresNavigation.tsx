import { GiClassicalKnowledge, GiCarnivalMask, GiHeartWings } from 'react-icons/gi'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaHatWizard } from 'react-icons/fa'

const GenresNavigation = () => {
    return (
        <>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer text-dark-green dark:text-neutral-100">
            <FaHatWizard className='w-full h-auto' />
            <div className="flex items-center justify-center gap-x-2 text-xs sm:text-base">Fantasy<HiArrowLongRight /></div>
        </div>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer text-dark-green dark:text-neutral-100">
            <GiClassicalKnowledge className='w-full h-auto' />
            <div className="flex items-center justify-center gap-x-2 text-xs sm:text-base">classics<HiArrowLongRight /></div>
        </div>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer text-dark-green dark:text-neutral-100">
            <GiCarnivalMask className='w-full h-auto' />
            <div className="flex items-center justify-center gap-x-2 text-xs sm:text-base">Mystery<HiArrowLongRight /></div>
        </div>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer text-dark-green dark:text-neutral-100">
            <GiHeartWings className='w-full h-auto' />
            <div className="flex items-center justify-center gap-x-2 text-xs sm:text-base">Romance<HiArrowLongRight /></div>
        </div>
        </>
    )
}

export default GenresNavigation