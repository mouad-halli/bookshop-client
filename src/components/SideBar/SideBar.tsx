import { ReactElement } from "react";

interface PropsType {
    children: ReactElement
    isSideBarVisible: boolean
}

const SideBar = ( { children, isSideBarVisible}: PropsType) => {

    return (
        <main className={`z-10 fixed right-0 transition transform ease-in-out duration-300 ${isSideBarVisible ? 'translate-x-0' : ' translate-x-full'} top-0 h-full min-h-screen bg-white ml-auto w-full sm:w-[27rem] p-5`}>
            { children }
        </main>
    )
}

export default SideBar