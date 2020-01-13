import React, {useState} from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onChangePage, portionSize = 10, }) => {
    let pagesAmount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesAmount/portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    //debugger
    return (
        <div className={s.paginator}>
            <button onClick={ () => { setPortionNumber(portionNumber - 1) } }
                    disabled={ portionNumber <= 1 }>PREV</button>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={currentPage === p ? s.selectedPage : s.pageNumber}
                    onClick={ (e) => {onChangePage(p)} } key={p}>{p}</span>
            })}
            <button onClick={ () => { setPortionNumber(portionNumber + 1) } }
                    disabled={ portionNumber >= portionCount }>NEXT</button>
        </div>
    )
}


export default Paginator