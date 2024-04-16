import { ReactElement } from "react"
import { GrClose } from "react-icons/gr"

interface PropsType {
    children: ReactElement
    isModalVisible: boolean
    modalTitle: string
    onClose: () => void
}

const Modal = ({ modalTitle, isModalVisible, onClose, children }: PropsType) => {

    return (
        <div
            onClick={onClose}
            className={`
            fixed inset-0 flex justify-center items-center transition-colors
            ${isModalVisible ? "visible bg-black/20" : "invisible"}
        `}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-white rounded-xl shadow p-12 transition-all 
                ${isModalVisible ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}>
                <div className="flex gap-x-3 items-center pb-6">
                    <h1 className="text-3xl  font-semibold grow">{modalTitle}</h1>
                    <GrClose onClick={onClose} className="cursor-pointer" size={23} />
                </div>
                {children}
            </div>
        </div>
    )

    return (
        <>
        {isModalVisible &&
            <div /*onClick={() => setIsModalVisible(false)}*/ onClick={onClose} className="fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-25"></div>}
            <div
                className={`z-10 fixed inset-0 m-auto h-min w-min bg-white rounded-lg transition-opacity shadow-lg
                ease-linear ${isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {children}
            </div>
        </>
    )
}

export default Modal