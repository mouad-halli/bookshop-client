import { useMemo } from "react"
import { createRangeArr } from "../utils/helpers"

export const usePaginate = (
    currentPage: number,
    pageSize: number,
    totalCount: number,
    siblingCount = 1
    ) => {

    const pages =  useMemo(() => {
        const firstPage = 1
        const limitPagesNbr = 5 + (siblingCount * 2)
        const lastPage = Math.ceil(totalCount / pageSize)
        const DOTS = '...'

        if (lastPage <= limitPagesNbr)
            return createRangeArr(firstPage, lastPage)

        const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPage)
        const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPage)


        const showLeftDots = leftSiblingIndex > firstPage + 2
        const showRightDots = rightSiblingIndex < lastPage - 2

        console.log(showLeftDots, showRightDots)

        if (showLeftDots && showRightDots) {
            const middleRange = createRangeArr(leftSiblingIndex, rightSiblingIndex)
            return [firstPage, DOTS, ...middleRange, DOTS, lastPage]
        }

        if (showLeftDots && !showRightDots) {
            let rightRange = createRangeArr(
              lastPage - (limitPagesNbr - 2),
              lastPage
            );
            return [firstPage, DOTS, ...rightRange]
        }

        if (!showLeftDots && showRightDots) {
            let leftRange = createRangeArr(1, limitPagesNbr - 2)
            return [...leftRange, DOTS, lastPage]
        }

    }, [currentPage, pageSize, totalCount])

    return pages
}
