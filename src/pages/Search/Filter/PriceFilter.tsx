import { useState } from "react"
import FormInput from "../../../components/ui/FormInput"

const PriceFilter = () => {

    const [from, setFrom] = useState(NaN)
    const [to, setTo] = useState(NaN)

    const handleSetFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(parseInt(e.target.value))
    }

    const handleSetToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTo(parseInt(e.target.value))
    }

    return (
        <div className=" p-2 flex gap-x-2 items-center">
            {/* <FormInput
                label="from" value={from} inputType="number"
                handleValueChange={handleSetFromChange}
            />
            <FormInput
                label="to" value={to} inputType="number"
                handleValueChange={handleSetToChange}
            /> */}
            <label>.$</label>
        </div>
    )
}

export default PriceFilter