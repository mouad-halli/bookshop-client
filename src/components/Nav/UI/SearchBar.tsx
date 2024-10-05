import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <>
            <IoMdSearch className="absolute top-0 bottom-0 left-2 my-auto hover:cursor-pointer text-dark-green" size={22} />
            <input
                className=" py-1.5 pl-9 w-full ring-1 ring-slate-200 rounded-2xl bg-[#f6f5f7] focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-900"
                type="text" placeholder="Search books, authors, genres"
            />
        </>
    )
}

export default SearchBar