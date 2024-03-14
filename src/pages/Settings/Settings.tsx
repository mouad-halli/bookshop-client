import { FormEvent, useRef } from "react"
import Address from "./Address/Address"
import Information from "./Information/information"

const Settings = () => {

    const isSellerRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!isSellerRef.current)
            return
        try {
            console.log(isSellerRef.current.value)
            
        } catch (error: unknown) {
            console.log(error)
        }
    }

    return (
        <main className="min-h-dvh mt-10">
            <div className="w-11/12 sm:w-10/12 grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto ">
                <Information />
                <Address />
                <form className="" onSubmit={handleSubmit}>
                    <h1 className="text-xl font-semibold font-Archivo pb-4 pl-4">Settings</h1>
                    <div className="flex flex-col border p-5">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm  font-medium text-gray-500 ">Become Seller</span>
                        </label>
                        <button type="submit" className="py-2.5 border md:w-min px-8 mt-4 border-indigo-600 text-indigo-700">Save</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Settings