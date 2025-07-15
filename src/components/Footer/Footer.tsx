const Footer = () => {
    return (
        <footer className="w-full h-[23dvh] bg-slate-100 dark:bg-neutral-900 px-24">
            <section className="h-full flex items-center justify-center gap-x-24">
                <div className="flex flex-col text-gray-600 text-sm gap-y-1 ">
                    <h1 className="text-black font-semibold text-base uppercase">about</h1>
                    <a className="cursor-pointer hover:underline">Out story</a>
                    <a className="cursor-pointer hover:underline">Privacy policy</a>
                    <a className="cursor-pointer hover:underline">Terms and conditions</a>
                </div>
                <div className="flex flex-col text-gray-600 text-sm gap-y-1 ">
                    <h1 className="text-black font-semibold text-base uppercase">shop</h1>
                    <a className="cursor-pointer hover:underline">Contact us</a>
                    <a className="cursor-pointer hover:underline">FAQ</a>
                    <a className="cursor-pointer hover:underline">Account</a>
                </div>
                <div className="flex flex-col text-gray-600 text-sm gap-y-1 ">
                    <h1 className="text-black font-semibold text-base uppercase">stay in the loop</h1>
                    <form>
                        <input type="text" placeholder="Enter your email" className="w-full h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        <button type="button" className="mt-2 w-full h-10 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors uppercase">Subscribe</button>
                    </form>
                </div>
            </section>
        </footer>
    )
}

export default Footer