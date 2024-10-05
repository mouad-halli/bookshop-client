import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GENRES } from "../../../constants/book";
import AvailabilityFilter from "./AvailabilityFilter";
import PriceFilter from "./PriceFilter";
import GenresFilter from "./GenresFilter";

const FilterSection = () => {

    const [showAvailabilityFilter, setShowAvailabilityFilter] = useState(false)
    const [showPriceFilter, setShowPriceFilter] = useState(false)
    const [showGenresFilter, setShowGenresFilter] = useState(false)

    return (
        <section className=" font-primary shrink-0 w-[17rem] h-max hidden sm:flex pr-10">
            <div className="w-full flex flex-col">
                <h1 className="font-secondary border-b py-4">Filter:</h1>
                <div className=" border-b py-4 ">
                    <div className="flex justify-between items-center cursor-pointer hover:underline"
                        onClick={() => setShowAvailabilityFilter(!showAvailabilityFilter)}
                    >
                        <span className="font-secondary">Availability</span>
                        <IoIosArrowDown />
                    </div>
                    {showAvailabilityFilter && <AvailabilityFilter />}
                </div>
                <div className="border-b py-4">
                    <div className="flex justify-between items-center cursor-pointer hover:underline"
                        onClick={() => setShowPriceFilter(!showPriceFilter)}
                    >
                        <span className="font-secondary">Price</span>
                        <IoIosArrowDown />
                    </div>
                    {showPriceFilter && <PriceFilter />}
                </div>
                <div className=" py-4">
                    <div className="flex justify-between items-center cursor-pointer hover:underline"
                        onClick={() => setShowGenresFilter(!showGenresFilter)}
                    >
                        <span className="font-secondary">Genres</span>
                        <IoIosArrowDown />
                    </div>
                    {showGenresFilter && <GenresFilter genres={Object.values(GENRES)} />}
                </div>
            </div>
        </section>
    )
}

export default FilterSection