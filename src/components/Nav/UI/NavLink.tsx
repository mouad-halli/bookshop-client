import useIsComponentVisibleOnHoverHook from "../../../hooks/useIsComponentVisibleOnHover"
import Dropdown from "./Dropdown"
import { GENRES } from '../../../constants/book'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface PropsType {
    linkText: string
    direction: string
}

const NavLink = ( {linkText, direction} : PropsType) => {

    const { ref, isComponentsVisible, setIsComponentVisible } = useIsComponentVisibleOnHoverHook(false)

    const [dropDownContent, setDropDownContent] = useState<string[]>([])

    useEffect(() => {
        if (linkText === 'genres')
            setDropDownContent(Object.values(GENRES))
    }, [])

    return (
        <div className="group">
            <Link to={direction}>
                <li
                    onMouseOver={() => dropDownContent.length > 0 && setIsComponentVisible(true)}
                    className=" pb-4 px-1 border-b-2 border-transparent group-hover:border-indigo-900">
                    {linkText}
                </li>
            </Link>
            {dropDownContent.length > 0 && isComponentsVisible && <Dropdown dropDownRef={ref} content={dropDownContent} /> }
        </div>
    )
}

export default NavLink