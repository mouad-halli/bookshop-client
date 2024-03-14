import { GrClose } from "react-icons/gr";

const SideBar = ( { isVisible, setIsComponentVisible}: any) => {

    return (
        <main className={`z-10 fixed right-0 transition transform ease-in-out duration-300 ${isVisible ? 'translate-x-0' : ' translate-x-full'} top-0 h-full min-h-screen bg-white ml-auto w-96 p-5`}>
            <div className="w-full flex justify-end">
                <GrClose onClick={() => setIsComponentVisible(false)} className="cursor-pointer" size={25} />
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center gap-y-6">
                <h1 className="text-3xl font-semibold">Your Cart is Empty</h1>
                <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg px-8 py-3 text-center">
                    Continue Shopping
                </button>
            </div>
        </main>
    )
}

export default SideBar