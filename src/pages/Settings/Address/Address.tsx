import { useAddress } from "./useAddress"

const Address = () => {

    const { 
        handleSubmit, onSubmit, register, isSubmitting, errors, isDirty, isValid
    } = useAddress()

    return (
        <div className="shrink-0">
            <h1 className="text-xl font-semibold font-Archivo pb-4 pl-4">Address</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-1 border p-5">
                <div className="flex gap-x-1 items-center truncate">
                    <span className="text-gray-500">Address 1</span>
                    {errors.address1 && <span className="text-red-500 text-xs">{`(${errors.address1.message})`}</span>}
                </div>
                <input
                    type="text" {...register("address1")}
                    className="border outline-none py-1.5 px-4"
                />
                <div className="flex gap-x-1 items-center truncate pt-3">
                    <span className="text-gray-500">Address 2</span>
                    {errors.address2 && <span className="text-red-500 text-xs">{`(${errors.address2.message})`}</span>}
                </div>
                <input
                    type="text" {...register("address2")}
                    className="border outline-none py-1.5 px-4"
                />
                <div className="flex gap-x-1 items-center truncate pt-3">
                    <span className="text-gray-500">Country</span>
                    {errors.country && <span className="text-red-500 text-xs">{`(${errors.country.message})`}</span>}
                </div>
                <input
                    type="text" {...register("country")}
                    className="border outline-none py-1.5 px-4"
                />
                <div className="w-full flex justify-between gap-x-2 gap-y-3">
                    <div className="w-full flex flex-col truncate">
                        <div className="flex gap-x-1 items-center pt-3">
                            <span className="text-gray-500">City</span>
                            {errors.city && <span className="text-red-500 text-xs">{`(${errors.city.message})`}</span>}
                        </div>
                        <input
                            type="text" {...register("city")}
                            className=" w-full border outline-none py-1.5 px-4"
                        />
                    </div>
                    <div className="w-full flex flex-col truncate">
                        <div className="flex gap-x-1 items-center pt-3">
                            <span className="text-gray-500">ZipCode</span>
                            {errors.zipCode && <span className="text-red-500 text-xs">{`(${errors.zipCode.message})`}</span>}
                        </div>
                        <input
                            type="text" {...register("zipCode"/*, { valueAsNumber: true }*/)}
                            className=" w-full border outline-none py-1.5 px-4"
                        />
                    </div>
                </div>
                <button
                    type="submit" disabled={ !isDirty || !isValid || isSubmitting}
                    className="py-2.5 border md:w-min px-8 mt-4 border-indigo-600 text-indigo-700"
                >
                    {isSubmitting ? 'Saving...' : 'Save'}
                </button>
            </form>
        </div>   
    )
}

export default Address