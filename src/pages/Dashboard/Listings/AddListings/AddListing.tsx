import { GrClose } from "react-icons/gr"
import Modal from "../../../../components/Modal/Modal"
import useIsComponentVisibleOnClick from "../../../../hooks/useIsComponentVisibleOnClick"
import { GENRES, LANGUAGES } from "../../../../constants/book"
import useAddListing from "./useAddListing"

const AddListing = () => {

    const {
        ref: modalRef,
        isComponentsVisible: isModalVisible,
        setIsComponentVisible: setIsModalVisible
    } = useIsComponentVisibleOnClick(false)

    const inputStyle = "border-[1px] border-black px-2 py-0.5 rounded "

    const { register, handleSubmit, onSubmit, errors, isDisabled } = useAddListing()

    return (
        <div ref={modalRef} className="flex items-center">
            <button className=" text-white font-medium bg-indigo-500
            hover:bg-indigo-600 rounded-lg px-5  py-3"
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
                    <form className="flex flex-col gap-y-3 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-x-5">
                            <div className="w-full flex flex-col gap-y-1 truncate">
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Title</span>
                                    {errors.title && <span className="text-red-500 text-sm">{`(${errors.title.message})`}</span>}
                                </div>
                                <input
                                    type="text" placeholder="Title"
                                    {...register("title")}
                                    className={`${inputStyle}`}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-y-1 truncate">
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Author</span>
                                    {errors.author && <span className="text-red-500 text-sm">{`(${errors.author.message})`}</span>}
                                </div>
                                <input
                                    type="text" placeholder="Author"
                                    {...register("author")}
                                    className={`${inputStyle}`}
                                />
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="w-full flex flex-col gap-y-1 truncate">
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Genre</span>
                                    {errors.genre && <span className="text-red-500 text-sm">{`(${errors.genre.message})`}</span>}
                                </div>
                                <select
                                    className={`${inputStyle}`}
                                    {...register("genre")}
                                >
                                    {Object.values(GENRES).map((genre, i) => (
                                        <option key={i}>{genre}</option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className="w-full flex flex-col gap-y-1 truncate"
                                {...register("language")}
                            >
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Language</span>
                                    {errors.language && <span className="text-red-500 text-sm">{`(${errors.language.message})`}</span>}
                                </div>
                                <select className={`${inputStyle}`}>
                                    {Object.values(LANGUAGES).map((language, i) => (
                                        <option key={i}>{language}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-full flex flex-col gap-y-1 truncate">
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Year</span>
                                    {errors.year && <span className="text-red-500 text-sm">{`(${errors.year.message})`}</span>}
                                </div>
                                <input
                                    type="number" placeholder="Year"
                                    {...register("year", { valueAsNumber: true })}
                                    className={`${inputStyle}`}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-y-1 truncate">
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Price</span>
                                    {errors.price && <span className="text-red-500 text-sm">{`(${errors.price.message})`}</span>}
                                </div>
                                <input
                                    type="number" placeholder="Price"
                                    {...register("price", { valueAsNumber: true })}
                                    className={`${inputStyle}`}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-5">
                            <div className="w-full flex flex-col gap-y-1 truncate">
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Description</span>
                                    {errors.description && <span className="text-red-500 text-sm">{`(${errors.description.message})`}</span>}
                                </div>
                                <textarea
                                    placeholder="Description"
                                    {...register("description")}
                                    className={`h-full resize-none ${inputStyle}`}
                                />
                            </div>
                            <div className="w-full h-full font-normal flex flex-col gap-y-2 truncate" >
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-500">Image</span>
                                    {errors.image && <span className="text-red-500 text-sm">{`(${errors.image.message})`}</span>}
                                </div>
                                <div className={`w-full py-6 flex flex-col justify-center items-center gap-y-6 border-2 border-dashed border-slate-400 ${false && 'border-green-300'}`}>
                                    {!false ?
                                        <h4>Select File here</h4>
                                        :
                                        <h4 className=" text-green-300">File uploaded successfully</h4>
                                    }
                                    <p className=" text-xs sm:text-sm text-slate-400">Files Supported: jpg, jpeg, png, gif</p>
                                    <label className="cursor-pointer transition hover:scale-110 ease-linear">
                                        <input
                                            type="file"
                                            {...register("image")}
                                            className=" hidden"
                                        />
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
                            disabled={isDisabled}
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