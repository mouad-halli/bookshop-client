import { ReactNode, FC } from "react"

export interface ICarouselItem {
    children?: ReactNode
    styling?: string
}

const CarouselItem: FC<ICarouselItem> = ( {styling, children}: ICarouselItem) => {
    return (
        <div className={`${styling} h-full`}>
            {children}
        </div>
    )
}

export default CarouselItem