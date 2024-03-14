// import NavigateLeft from "./UI/NavigateLeft"
// import NavigateRight from "./UI/NavigateRight"

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface PropsType {
    handleNavigateLeft: () => void
    handleNavigateRight: () => void
    
}

const CarouselNavigation = ( {handleNavigateLeft, handleNavigateRight}: PropsType) => {
    return (
        <div className=" w-min flex gap-48 absolute bottom-8 left-0 right-0 mx-auto text-3xl">
            {/* <NavigateLeft handleSwitchSliderCurrentView={handleSwitchSliderCurrentView}>
                {'<'}
            </NavigateLeft>
            <NavigateRight handleSwitchSliderCurrentView={handleSwitchSliderCurrentView}>
                {'>'}
            </NavigateRight> */}
            <BsArrowLeftCircleFill onClick={handleNavigateLeft} size={24} className="cursor-pointer text-indigo-950" />
            <BsArrowRightCircleFill onClick={handleNavigateRight} size={24}  className="cursor-pointer text-indigo-950" />
        </div>
    )
}

export default CarouselNavigation