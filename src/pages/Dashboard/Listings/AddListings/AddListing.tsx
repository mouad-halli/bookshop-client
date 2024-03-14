import { GrClose } from "react-icons/gr"
import Modal from "../../../../components/Modal/Modal"
import useIsComponentVisibleOnClick from "../../../../hooks/useIsComponentVisibleOnClick"
import { GENRES, LANGUAGES } from "../../../../constants/book"

const AddListing = () => {

    const {
        ref: modalRef,
        isComponentsVisible: isModalVisible,
        setIsComponentVisible: setIsModalVisible
    } = useIsComponentVisibleOnClick(false)

    const inputStyle = "border-[1px] border-black px-2 py-0.5 rounded "

    return (
        <div ref={modalRef}>
            <button className="w-44 h-12 flex items-center justify-center text-white text-lg font-medium bg-indigo-500
            hover:bg-indigo-600 rounded-lg px-5 mt-5 py-3"
                onClick={() => setIsModalVisible(true)}
            >
                Add Product
            </button>
            <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
                <div className="w-full h-full px-20 pb-10 pt-7 flex flex-col justify-between">
                    <div className="flex justify-between items-center pb-4">
                        <h1 className="text-3xl text-center font-semibold grow">Add Product</h1>
                        <GrClose onClick={() => setIsModalVisible(false)} className="cursor-pointer" size={23} />
                    </div>
                    <form className="flex flex-col gap-y-3 ">
                        <div className="flex gap-x-5">
                            <div className="w-full flex flex-col gap-y-1">
                                <span>Title</span>
                                <input
                                    type="text" placeholder="Title"
                                    className={`${inputStyle}`}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-y-1">
                                <span>Author</span>
                                <input
                                    type="text" placeholder="Author"
                                    className={`${inputStyle}`}
                                />
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="w-full flex flex-col gap-y-1">
                                <span>Genres</span>
                                <select className={`${inputStyle}`}>
                                    {Object.values(GENRES).map((genre, i) => (
                                        <option key={i}>{genre}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full flex flex-col gap-y-1">
                                <span>Language</span>
                                <select className={`${inputStyle}`}>
                                    {Object.values(LANGUAGES).map((language, i) => (
                                        <option key={i}>{language}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-y-1">
                            <span>Price</span>
                            <input
                                type="number" placeholder="Price"
                                className={`${inputStyle}`}
                            />
                        </div>
                        <div className="flex justify-between gap-x-5">
                            <div className="w-full flex flex-col gap-y-1">
                                <span>Description</span>
                                <textarea
                                    placeholder="Description"
                                    className={`h-full resize-none ${inputStyle}`}
                                />
                            </div>
                            <div className="w-full h-full font-normal flex flex-col gap-y-2" >
                                <span className=" font-normal ">Book Image</span>
                                <div className={`w-full py-6 flex flex-col justify-center items-center gap-y-6 border-2 border-dashed border-slate-400 ${false && 'border-green-300'}`}>
                                    {!false ?
                                        <h4>Select File here</h4>
                                        :
                                        <h4 className=" text-green-300">File uploaded successfully</h4>
                                    }
                                    <p className=" text-xs sm:text-sm text-slate-400">Files Supported: jpg, jpeg, png, gif</p>
                                    <label className="cursor-pointer transition hover:scale-110 ease-linear">
                                        <input type="file" name="image" className=" hidden" />
                                        <span className="bg-blue-600 text-white px-7 py-2 rounded">
                                            { !false ? 'choose file' : 'update file' }
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="w-44 h-12 mx-auto flex items-center justify-center text-white text-lg font-medium bg-indigo-500
                        hover:bg-indigo-600 rounded-lg px-5 mt-5 py-3"
                            onClick={() => setIsModalVisible(true)}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddListing