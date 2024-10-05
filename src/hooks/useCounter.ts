import { useState } from "react"

interface PropsType {
    initCounter: number
    maxCounter: number
    setIsDirty: React.Dispatch<React.SetStateAction<boolean>>
}

export const useCounter = (props: PropsType) => {

    const { initCounter, maxCounter, setIsDirty } = props

    const [counter, setCounter] = useState(initCounter)

    const handleCounterChange = (nbr: number) => {

        if (nbr && nbr < maxCounter && nbr !== counter) {
            setCounter(nbr)
            setIsDirty(nbr && nbr !== initCounter ? true : false)
        }
    }

    return {
        counter, handleCounterChange
    }
}