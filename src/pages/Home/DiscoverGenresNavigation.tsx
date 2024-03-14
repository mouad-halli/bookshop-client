import { GiClassicalKnowledge, GiCarnivalMask, GiHeartWings } from 'react-icons/gi'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaHatWizard } from 'react-icons/fa'

const DiscoverGenresNavigation = () => {
    return (
        <>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer">
            <FaHatWizard size="100" />
            <div className="flex items-center justify-center gap-x-2">Fantasy<HiArrowLongRight /></div>
        </div>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer">
            <GiClassicalKnowledge size="100" />
            <div className="flex items-center justify-center gap-x-2">classics<HiArrowLongRight /></div>
        </div>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer">
            <GiCarnivalMask size="100" />
            <div className="flex items-center justify-center gap-x-2">Mystery<HiArrowLongRight /></div>
        </div>
        <div className="flex flex-col gap-y-6 items-stretch cursor-pointer">
            <GiHeartWings size="100" />
            <div className="flex items-center justify-center gap-x-2">Romance<HiArrowLongRight /></div>
        </div>
        </>
    )
}

export default DiscoverGenresNavigation