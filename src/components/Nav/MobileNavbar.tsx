import { GENRES } from "@/constants/enum/book"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Link } from "react-router-dom"
import { SheetClose } from "../ui/sheet"

const MobileNavbar = () => {
    return (
        <div className=" font-secondary h-full w-full flex flex-col p-4 overflow-y-auto dark:text-neutral-50">
            <Accordion type="single" collapsible>
                <div className="py-4 border-b font-medium">
                    <SheetClose asChild>
                        <Link to={""}>
                            Home
                        </Link>
                    </SheetClose>
                </div>
                <AccordionItem value="genres">
                    <AccordionTrigger >Genres</AccordionTrigger>
                    {Object.values(GENRES).map((genre, i) => (
                        <AccordionContent key={i}>
                            <SheetClose asChild>
                                <Link to={`/search?genre=${genre}`}>
                                    {genre}
                                </Link>
                            </SheetClose>
                        </AccordionContent>
                    ))}
                </AccordionItem>
                <div className="py-4 border-b font-medium">
                    <SheetClose asChild>
                        <Link to={"last-added"}>
                            Last added
                        </Link>
                    </SheetClose>
                </div>
                <div className="py-4 border-b font-medium">
                    <SheetClose asChild>
                        <Link to={"about-us"}>
                            About us
                        </Link>
                    </SheetClose>
                </div>
            </Accordion>
        </div>
    )
}

export default MobileNavbar