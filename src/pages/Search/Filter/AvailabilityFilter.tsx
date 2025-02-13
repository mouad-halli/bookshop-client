
const AvailabilityFilter = () => {
    return (
        <div className=" pl-2 flex flex-col gap-y-3">
            <div className=" flex items-center gap-x-2">
                <input className="w-4 h-4" type="checkbox" name="in stock" />
                <label>In stock</label><br></br>
            </div>
            <div className="flex items-center gap-x-2">
                <input className="w-4 h-4" type="checkbox" name="in stock" />
                <label>Out of stock</label><br></br>
            </div>
        </div>
    )
}

export default AvailabilityFilter