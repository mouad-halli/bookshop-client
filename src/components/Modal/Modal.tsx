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
            <div className={`z-10 fixed top-0 bottom-0 left-0 right-0 m-auto h-[39rem] w-[48rem] bg-white rounded-lg transition-opacity
            ease-linear ${isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {children}
            </div>
        </>
    )
}

export default Modal