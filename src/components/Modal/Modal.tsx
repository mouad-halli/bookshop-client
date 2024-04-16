import { ReactElement } from "react"

interface PropsType {
    children: ReactElement
    isModalVisible: boolean
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, isModalVisible, setIsModalVisible }: PropsType) => {
    return (
        <>
            {isModalVisible && <div onClick={() => setIsModalVisible(false)} className="fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-25"></div>}
            <div className={`z-10 fixed inset-0 m-auto h-min w-min bg-white rounded-lg transition-opacity shadow-lg
            ease-linear ${isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {children}
            </div>
        </>
    )
}

export default Modal