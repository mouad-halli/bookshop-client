import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { Children, FC, ReactNode } from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButton';

interface Propstype {
    children: ReactNode
    options?: EmblaOptionsType
    isFullView: boolean
}

const Carousel: FC<Propstype> = ({ children, options, isFullView }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div
            className="overflow-hidden relative"
            ref={emblaRef}
        >
            <div className="flex">
            {Children.map(children, (child, index) => (
                <div
                    key={index}
                    className={`grow-0 shrink-0 min-w-0 ${isFullView ? 'basis-full' : 
                    ' basis-1/2 sm:basis-1/4 lg:basis-1/6 flex-start pl-3 '}`}
                >
                    {child}
                </div>
            ))}
            </div>
            <div className='h-min w-full absolute inset-0 my-auto flex justify-between px-10 pointer-events-none select-none'>
                <PrevButton
                    className={`pointer-events-auto dark:text-neutral-100 ${prevBtnDisabled && ' opacity-30 cursor-default'}`}
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                />
                <NextButton
                    className={`pointer-events-auto dark:text-neutral-100 ${nextBtnDisabled && 'opacity-30 cursor-default'}`}
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                />
            </div>
        </div>
    )
}

export default Carousel