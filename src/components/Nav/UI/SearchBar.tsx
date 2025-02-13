import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate()
	const [input, setInput] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		navigate({ pathname: 'search', search: createSearchParams({ type: 'search', q: input }).toString() })
	}
    return (
        <form onSubmit={handleSubmit}>
            <IoMdSearch onClick={handleSubmit} className="absolute top-0 bottom-0 left-2 my-auto hover:cursor-pointer text-dark-green" size={22} />
            <input
                className=" py-1.5 pl-9 w-full ring-1 ring-slate-200 rounded-2xl bg-[#f6f5f7] dark:bg-white focus-within:outline-none focus-within:ring-2 dark:text-black focus-within:ring-blue-900 dark:focus-within:ring-neutral-300"
                type="text" placeholder="Search books, authors, genres"
                onChange={(e) => setInput(e.target.value)}
                />
        </form>
    )
}

export default SearchBar