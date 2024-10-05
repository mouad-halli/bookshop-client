import { useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"
import { useCounter } from "../../hooks/useCounter"

interface PropsType {
    initCounter: number
    maxCounter: number
    setIsDirty: React.Dispatch<React.SetStateAction<boolean>>
}

export const Counter = (props: PropsType) => {

    const { maxCounter } = props
    const { counter, handleCounterChange } = useCounter(props)

    return (
        <div className="w-full flex items-center border border-gray-400 rounded-lg">
            <button
                className="w-1/3"
                onClick={() => counter && handleCounterChange(counter - 1)}
            >
                <FiMinus className="mx-auto" />
            </button>
            <input
                type="number"
                value={counter} min={0}
                onChange={(e) => handleCounterChange(e.target.valueAsNumber ? e.target.valueAsNumber : 1)}
                className=" w-1/3 py-2 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
                className="w-1/3"
                onClick={() => counter < maxCounter && handleCounterChange(counter + 1)}
            >
                <FiPlus className="mx-auto" />
            </button>
        </div>
    )
}
