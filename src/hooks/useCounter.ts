import { useState } from "react"

export interface CounterProps {
    initCounter: number
    maxCounter: number
    counter: number
    setIsDirty: React.Dispatch<React.SetStateAction<boolean>>
    setCounter: React.Dispatch<React.SetStateAction<number>>
}

export const useCounter = (props: CounterProps) => {

    const { counter, setCounter, initCounter, maxCounter, setIsDirty } = props

    // const [counter, setCounter] = useState(initCounter)

    const handleCounterChange = (nbr: number) => {

        // if (nbr && nbr < maxCounter && nbr !== counter) {
        // console.log({nbr, maxCounter, counter, initCounter})
        if ( nbr <= maxCounter && nbr !== counter) {
            setCounter(nbr)
            // setIsDirty(nbr && nbr !== initCounter ? true : false)
            setIsDirty(nbr !== initCounter ? true : false)
        }
    }

    return {
        counter, handleCounterChange
    }
}