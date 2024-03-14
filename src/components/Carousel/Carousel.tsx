import  React, { Children, ReactElement, useRef } from 'react'
import { ICarouselItem } from './CarouselItem'
import CarouselNavigation from './CarouselNavigation'

interface PropsType {
    // width: string
    // height: string
    styling: string
    children?: ReactElement<ICarouselItem> | Array<ReactElement<ICarouselItem>>
}

const Carousel = ( {styling , children}: PropsType) => {

    const childrenArray = Children.toArray(children)
    
    const ref = useRef<HTMLDivElement>(null)

    const viewIndex = useRef<number>(0)

    const handleNavigateRight = () => {

        if (!ref.current)
            return

        const container = ref.current
        const newIndex = viewIndex.current + 1
        const viewsTotalCount = Math.ceil(container.scrollWidth / container.offsetWidth) - 1

        // console.log(container.scrollWidth, container.offsetWidth)

        if (newIndex > viewsTotalCount)
            viewIndex.current = 0
        else
            viewIndex.current = newIndex

        container.style.transform = `translateX(-${viewIndex.current * 100}%)`

    }

    const handleNavigateLeft = () => {

        if (!ref.current)
            return

        const container = ref.current
        const newIndex = viewIndex.current - 1
        const viewsTotalCount = Math.ceil(container.scrollWidth / container.offsetWidth) - 1

        // console.log(newIndex, viewsTotalCount)

        if (newIndex < 0)
            viewIndex.current = viewsTotalCount
        else
            viewIndex.current = newIndex

        container.style.transform = `translateX(-${viewIndex.current * 100}%)`
    }

    return (
        <div className={`${styling} relative overflow-hidden`}>
            <div ref={ref} className={`w-full h-full flex transition ease-in-out duration-300 py-2`}>
                {childrenArray.map((child, i) => (
                    <React.Fragment key={i}>{child}</React.Fragment>
                ))}
            </div>
            <CarouselNavigation handleNavigateLeft={handleNavigateLeft} handleNavigateRight={handleNavigateRight} />
        </div>
    )
}

export default Carousel