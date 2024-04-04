import { cloneElement, ReactElement } from "react";
import useIsComponentVisibleOnClick from "../../hooks/useIsComponentVisibleOnClick";

interface PropsType {
    children: ReactElement
    icon: JSX.Element
}

const SideBar = ( { children, icon }: PropsType) => {

    const { ref: sideBarRef, isComponentsVisible: isSideBarVisible, setIsComponentVisible: setIsSideBarVisible } = useIsComponentVisibleOnClick(false)
    const ClonedChildren = cloneElement(children, { setIsSideBarVisible: setIsSideBarVisible  })

    return (
        <>
            {isSideBarVisible && <div onClick={() => setIsSideBarVisible(false)} className="fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-25"></div>}
            <div ref={sideBarRef}>
                <div onClick={() => setIsSideBarVisible(true)} className="cursor-pointer text-indigo-900">
                    {icon}
                </div>
                <main className={`z-10 fixed right-0 transition transform ease-in-out duration-300 ${isSideBarVisible ? 'translate-x-0' : ' translate-x-full'} top-0 h-full min-h-screen bg-white ml-auto w-full sm:w-[27rem] p-5`}>
                    { ClonedChildren }
                </main>
            </div>
        </>
    )
}

export default SideBar