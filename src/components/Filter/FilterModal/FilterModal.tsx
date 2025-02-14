import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const FilterModal = () => {

    const [value, setValue] = useState([0, 100])
    const [genres] = useState<string[]>([])
    // const [availability, setAvailability] = useState("In stock")
    
    const handleAvailabilityChange = (availability: string) => {
        availability = availability
        // setAvailability(availability)
    }

    const handleValueChange = (newValue: number[]) => {
        const step = 1
        const minStepsBetweenThumbs = 1
        const minGap = minStepsBetweenThumbs * step
        const [left, right] = newValue

        if (right - left > minGap)
            setValue(newValue);
    }
    

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="font-accent">Filters</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md dark:text-neutral-50">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-secondary">Filters</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                    <RadioGroup defaultValue="In stock" onValueChange={handleAvailabilityChange}>
                        <h1 className="font-secondary">Availability</h1>
                        <div className="flex items-center gap-x-2">
                            <RadioGroupItem value="In stock" id="r1" />
                            <Label htmlFor="r1" className="cursor-pointer">In stock</Label>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <RadioGroupItem value="Out of stock" id="r2" />
                            <Label htmlFor="r2" className="cursor-pointer">Out of stock</Label>
                        </div>
                    </RadioGroup>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-secondary">Genres</h1>
                        <Slider
                            defaultValue={[0, 100]}
                            value={value}
                            onValueChange={handleValueChange}
                            step={1}
                            minStepsBetweenThumbs={1}
                        />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-secondary">Price range</h1>
                        {genres.map((genre, index) => (
                            <div key={index} className="flex items-center gap-x-2">
                                <input className="w-4 h-4" type="checkbox" name="in stock" />
                                <label>{genre}</label><br></br>
                            </div>
                        ))}
                    </div>
                </div>
                <DialogFooter className="sm:justify-between font-accent">
                    <Button type="button" variant="secondary">
                        Clear Filters
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" >
                            Apply Filters
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
      </Dialog>
    )
}

export default FilterModal