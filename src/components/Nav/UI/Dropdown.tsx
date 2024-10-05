import { Link } from "react-router-dom"

interface PropsType {
    dropDownRef: any
    content: string[]
}

const Dropdown = ( {dropDownRef, content}: PropsType ) => {

    return (
        // <div ref={dropDownRef} className=" z-10 bg-white inset-x-0 mx-auto absolute max-w-[60rem] h-[40dvh] drop-shadow-md rounded-md flex">
        <div ref={dropDownRef} className=" z-10 bg-white text-base inset-x-0 mx-auto absolute max-w-[60rem] md:max-h-[20rem] drop-shadow-md rounded-md flex">
            <ul className=" w-full flex flex-col flex-wrap gap-y-5 p-8 ">
                {content.map((genre, i) =>
                    <Link key={i} to={`/search?genre=${genre}`}>
                        <li key={i}><span className=" pb-2 px-1 border-b-2 border-transparent hover:border-indigo-900">{genre}</span></li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default Dropdown