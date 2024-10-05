import { GENRES, LANGUAGES } from "../../../../constants/book"
import useAddListing from "./useAddListing"
import { BookType } from "../../../../@Types/book"

interface PropsType {
    addItem?: (item: BookType) => void
    updateItem?: (updatedItem: BookType) => void
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    listing?: BookType
}

const ListingForm = ({ addItem, updateItem, setIsModalVisible, listing }: PropsType) => {

    const inputStyle = "border-[1px] border-black px-2 py-0.5 rounded "
    const formType = listing ? 'update' : 'create'

    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
        isDisabled,
        reset
    } = useAddListing(addItem, updateItem, formType, listing?._id)

    return (
        <form className="flex flex-col gap-y-3 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-x-3">
                <div className=" flex flex-col gap-y-1 truncate w-full sm:w-72">
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Title</span>
                        {errors.title && <span className="text-red-500 text-sm">{`(${errors.title.message})`}</span>}
                    </div>
                    <input
                        type="text" placeholder="Title"
                        {...register("title", { value: listing?.title })}
                        className={`${inputStyle} border-2 border-slate-400 outline-none focus-within:border-black w-full py-2`}
                    />
                </div>
                <div className=" flex flex-col gap-y-1 truncate w-full sm:w-72">
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Author</span>
                        {errors.author && <span className="text-red-500 text-sm">{`(${errors.author.message})`}</span>}
                    </div>
                    <input
                        type="text" placeholder="Author"
                        {...register("author", { value: listing?.author })}
                        className={`${inputStyle} border-2 border-slate-400 outline-none focus-within:border-black w-full py-2`}
                    />
                </div>
            </div>
            <div className="flex gap-x-3">
                <div className="flex flex-col gap-y-1 truncate w-full sm:w-72">
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Genre</span>
                        {errors.genre && <span className="text-red-500 text-sm">{`(${errors.genre.message})`}</span>}
                    </div>
                    <select
                        className={`${inputStyle} border-2 border-slate-400 outline-none focus-within:border-black py-2`}
                        {...register("genre", { value: listing?.genre as GENRES })}
                    >
                        {Object.values(GENRES).map((genre, i) => (
                            <option key={i}>{genre}</option>
                        ))}
                    </select>
                </div>
                <div
                    className="flex flex-col gap-y-1 truncate w-full sm:w-72"
                >
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Language</span>
                        {errors.bookLanguage && <span className="text-red-500 text-sm">{`(${errors.bookLanguage.message})`}</span>}
                    </div>
                    <select
                        {...register("bookLanguage", { value: listing?.bookLanguage as LANGUAGES })}
                        className={`${inputStyle} border-2 border-slate-400 outline-none focus-within:border-black py-2`}>
                        {Object.values(LANGUAGES).map((language, i) => (
                            <option key={i}>{language}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex gap-x-3">
                <div className="flex flex-col gap-y-1 truncate w-full sm:w-72">
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Year</span>
                        {errors.year && <span className="text-red-500 text-sm">{`(${errors.year.message})`}</span>}
                    </div>
                    <input
                        type="number" placeholder="Year" min={0}
                        {...register("year", { valueAsNumber: true, value: listing?.year })}
                        className={`${inputStyle} border-2 border-slate-400 outline-none focus-within:border-black py-2`}
                    />
                </div>
                <div className="flex flex-col gap-y-1 truncate w-full sm:w-72">
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Price</span>
                        {errors.price && <span className="text-red-500 text-sm">{`(${errors.price.message})`}</span>}
                    </div>
                    <input
                        type="number" placeholder="Price" step=".01" min={0}
                        {...register("price", { valueAsNumber: true, value: listing?.price })}
                        className={`${inputStyle} border-2 border-slate-400 outline-none focus-within:border-black py-2`}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-1 w-full truncate sm:w-72">
                <div className="flex gap-x-1 items-center">
                    <span className="text-gray-700">Stock Amount</span>
                    {errors.stockCount && <span className="text-red-500 text-sm">{`(${errors.stockCount.message})`}</span>}
                </div>
                <input
                    type="number" placeholder="Stock Amount" min={0}
                    {...register("stockCount", { valueAsNumber: true, value: listing?.stockCount })}
                    className={`${inputStyle} border-2 border-slate-400 outline-none focus-within:border-black py-2`}
                />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-x-4">
                <div className="flex flex-col gap-y-1 truncate w-full">
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Description</span>
                        {errors.description && <span className="text-red-500 text-sm">{`(${errors.description.message})`}</span>}
                    </div>
                    <textarea
                        placeholder="Description"
                        rows={4}
                        {...register("description", { value: listing?.description })}
                        className={`h-full resize-none border-2 border-slate-400 outline-none focus-within:border-black ${inputStyle}`}
                    />
                </div>
                <div className="w-full flex flex-col gap-y-2 truncate" >
                    <div className="flex gap-x-1 items-center">
                        <span className="text-gray-700">Image</span>
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
                            <span className=" text-slate-600 px-7 py-2 rounded ring-1 ring-slate-400">
                                { !false ? 'choose file' : 'update file' }
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex pt-6 justify-between gap-x-5">
                <button
                    className="w-full text-slate-600 font-medium ring-1
                  ring-slate-400 rounded-lg sm:px-10 py-2"
                    onClick={() => {reset(); setIsModalVisible(false)}}
                    type="button"
                >
                    Cancel
                </button>
                <button className="w-full text-white font-medium bg-blue-600
                rounded-lg sm:px-10 py-2"
                    onClick={() => setIsModalVisible(false)}
                    disabled={isDisabled}
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ListingForm