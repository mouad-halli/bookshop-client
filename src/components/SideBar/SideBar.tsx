import { ReactElement } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

interface PropsType {
    children: ReactElement
    icon: JSX.Element
    className?: string
}

const SideBar = ( { children, icon, className }: PropsType) => {

    return (
        <Sheet>
            <SheetTrigger className={className}>
                {icon}
            </SheetTrigger>
            <SheetContent className={`p-0 ${className}`}>
                {children}
            </SheetContent>
        </ Sheet>
    )

    // return (
    //     <>
    //         {isSideBarVisible && <div onClick={() => setIsSideBarVisible(false)} className="fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-25"></div>}
    //         <div ref={sideBarRef}>
    //             <div onClick={() => setIsSideBarVisible(true)} className="cursor-pointer text-dark-green">
    //                 {icon}
    //             </div>
    //             <main className={`z-10 fixed right-0 transition transform ease-in-out duration-300 ${isSideBarVisible ? 'translate-x-0' : ' translate-x-full'} top-0 h-full min-h-screen bg-white ml-auto w-full sm:w-[27rem]`}>
    //                 { ClonedChildren }
    //             </main>
    //         </div>
    //     </>
    // )
}

export default SideBar