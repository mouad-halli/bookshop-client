import { FormEvent, useContext, useState } from "react"
import Address from "./Address/Address"
import Information from "./Information/information"
import { updateUserSellerStatus } from "../../services/api/user"
import { userContext } from "../../Contexts/userContext"

const Settings = () => {

    const { user, handleUpdateUser } = useContext(userContext)
    const [isSeller, setIsSeller] = useState(user ? user.isSeller : false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await updateUserSellerStatus(isSeller)
            if (user)
                handleUpdateUser({...user, isSeller})
        } catch (error: unknown) {
            console.log(error)
        }
    }

    return (
        <main className="min-h-dvh mt-10">
            <div className=" font-primary w-11/12 sm:w-10/12 grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto ">
                <Information user={user} />
                <Address />
                <form className="" onSubmit={handleSubmit}>
                    <h1 className=" font-secondary text-xl font-semibold pb-4 pl-4">Settings</h1>
                    <div className="flex flex-col border p-5">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                className="sr-only peer"
                                type="checkbox"
                                onChange={(e) => setIsSeller(e.target.checked)}
                                checked={isSeller}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm  font-medium text-gray-500 ">Become Seller</span>
                        </label>
                        <button type="submit" className=" font-accent py-2.5 border md:w-min px-8 mt-4 border-indigo-600 text-indigo-700">Save</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Settings