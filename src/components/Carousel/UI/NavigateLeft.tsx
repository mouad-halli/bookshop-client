import { ReactNode } from "react"

interface PropsType {
    handleSwitchSliderCurrentView: (newIndex: number) => void
    children: ReactNode
}

const NavigateLeft = ( {handleSwitchSliderCurrentView, children}: PropsType) => {
    return (
        <button
            onClick={() => handleSwitchSliderCurrentView(-1)}
            className="rounded-full w-10 h-10 flex justify-center items-center bg-black p-4"
        >
            {children}
        </button>
    )
}

export default NavigateLeft