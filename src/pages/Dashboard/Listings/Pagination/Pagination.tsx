import { useState } from "react"
import { usePaginate } from "../../../../hooks/usePaginate"

interface Propstype {
    itemsPerVue: number
    totalItemsCount: number
}

const Pagination = ({itemsPerVue, totalItemsCount}: Propstype) => {

    const totalPagesCount = Math.ceil(totalItemsCount / itemsPerVue)
    const [currentPage, setCurrentPage] = useState(1)

    const pages = usePaginate(currentPage, 1, 23, 1)

    const handleIncrementPage = () => {
        if (currentPage + 1 < totalPagesCount)
            setCurrentPage(currentPage + 1)
    }

    const handleDecrementPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <div className="flex items-center font-medium gap-x-10">
                <span onClick={handleDecrementPage} className="cursor-pointer text-sm">Previous</span>
                <div className="flex gap-x-3">
                    {pages?.map((page, i) => (
                        <span
                            onClick={() => typeof page === 'number' && setCurrentPage(page)} key={i}
                            className={`cursor-pointer h-8 w-8 flex justify-center items-center text-sm rounded-md ${page === currentPage ? 'text-white bg-black' : 'hover:bg-slate-200'}`}
                        >
                            {page}
                        </span>
                    ))}
                </div>
                <span onClick={handleIncrementPage} className="cursor-pointer text-sm">Next</span>
            </div>
        </>
    )
}

export default Pagination