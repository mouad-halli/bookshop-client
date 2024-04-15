import { useEffect, useRef, useState } from 'react'

const useIsComponentVisibleOnHoverHook = (initialIsVisible: boolean) => {
    
    const [isComponentsVisible, setIsComponentVisible] = useState<boolean>()
    
    const ref: any = useRef(null)

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false)
        }
    }

    useEffect(() => {
        setIsComponentVisible(initialIsVisible)
        document.addEventListener('mouseover', handleClickOutside, true)
        return () => {
            document.removeEventListener('mouseover', handleClickOutside, true)
        }
    }, [])
    
    return { ref, isComponentsVisible, setIsComponentVisible }
}

export default useIsComponentVisibleOnHoverHook