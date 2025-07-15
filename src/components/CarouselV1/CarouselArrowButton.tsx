import { useCallback, useEffect, useState, MouseEvent, FC } from "react"
import { EmblaCarouselType } from 'embla-carousel'
import { IoIosArrowForward } from "react-icons/io"

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
    ) => {

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])
  
    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
        if (!emblaApi) return
  
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])
  
    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

interface ButtonProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    className?: string
    disabled?: boolean
}

export const PrevButton: FC<ButtonProps> = () => {

    return (
        <IoIosArrowForward
            className="rotate-180 "
            // className={props.className + ' rotate-180 cursor-pointer'}
            // onClick={props.onClick}
            // disabled={props.disabled}
            size={32}
        />
    )
}

export const NextButton: FC<ButtonProps>  = (props) => {
    return (
        <IoIosArrowForward
            className={props.className + ' cursor-pointer'}
            // onClick={props.onClick}
            // disabled={props.disabled}
            size={32}
        />
    )
}

