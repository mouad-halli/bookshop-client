import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import FilterModal from '@/components/Filter/FilterModal/FilterModal';

const SortSection = () => {

    const [sortBy, setSortBy] = useState("Relevence")

    return (
      <section className=" font-primary w-full flex justify-between md:justify-end items-center gap-x-4 py-4 text-sm">
            <div className="md:hidden">
                <FilterModal />
            </div>
            <div className="flex items-center gap-x-4">
                <label className="font-secondary">Sort by :</label>
                <Select onValueChange={(sortBy) => setSortBy(sortBy)} >
                    <SelectTrigger className="w-[180px] rounded">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectItem value="Relevence">Relevence</SelectItem>
                      <SelectItem value="price high to low">price high to low</SelectItem>
                      <SelectItem value="Price low to high">Price low to high</SelectItem>
                    </SelectContent>
                </Select>
                </div>
      </section>
    )
}

export default SortSection