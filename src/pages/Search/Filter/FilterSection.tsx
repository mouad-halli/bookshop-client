import { GENRES } from "@/constants/enum/book";
import AvailabilityFilter from "./AvailabilityFilter";
import PriceFilter from "./PriceFilter";
import GenresFilter from "./GenresFilter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger  } from "@/components/ui/accordion";

const FilterSection = () => {

    return (
        <section className=" font-primary shrink-0 w-[17rem] h-max hidden md:flex pr-10">
            <div className="w-full flex flex-col">
                <div className="py-4 border-b font-medium font-secondary">
                    Filters :
                </div>
                <Accordion type="multiple">
                    <AccordionItem value="Availability">
                        <AccordionTrigger className=" text-sm font-normal font-secondary">Availability</AccordionTrigger>
                        <AccordionContent>
                            <AvailabilityFilter />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Price">
                        <AccordionTrigger className=" text-sm font-normal font-secondary">Price</AccordionTrigger>
                        <AccordionContent>
                            <PriceFilter />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Genres">
                        <AccordionTrigger className=" text-sm font-normal font-secondary">Genres</AccordionTrigger>
                        <AccordionContent className=" max-h-96 overflow-auto">
                            <GenresFilter genres={Object.values(GENRES)} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                {/* <div className=" border-b py-4 ">
                    <div className="flex justify-between items-center cursor-pointer hover:underline"
                        onClick={() => setShowAvailabilityFilter(!showAvailabilityFilter)}
                    >
                        <span className="font-secondary">Availability</span>
                        <IoIosArrowDown />
                    </div>
                    {showAvailabilityFilter && <AvailabilityFilter />}
                </div> */}
                {/* <div className="border-b py-4">
                    <div className="flex justify-between items-center cursor-pointer hover:underline"
                        onClick={() => setShowPriceFilter(!showPriceFilter)}
                    >
                        <span className="font-secondary">Price</span>
                        <IoIosArrowDown />
                    </div>
                    {showPriceFilter && <PriceFilter />}
                </div> */}
                {/* <div className=" py-4">
                    <div className="flex justify-between items-center cursor-pointer hover:underline"
                        onClick={() => setShowGenresFilter(!showGenresFilter)}
                    >
                        <span className="font-secondary">Genres</span>
                        <IoIosArrowDown />
                    </div>
                    {showGenresFilter && <GenresFilter genres={Object.values(GENRES)} />}
                </div> */}
            </div>
        </section>
    )
}

export default FilterSection