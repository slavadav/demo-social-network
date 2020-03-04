import React, {useState} from 'react'

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

    return (
        <ul className="pagination pagination-sm">
            <li className={ portionNumber <= 1 ? "page-item disabled" : "page-item"}>
                <button onClick={ () => { setPortionNumber(portionNumber - 1) } }
                        className="page-link" key="p">
                    <span>PREV</span>
                </button>
            </li>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <li className={currentPage === p ? "page-item active" : "page-item"} key={p}>
                            <button onClick={ (e) => {onChangePage(p)} } className="page-link">
                                {p}
                            </button>
                        </li>)
            })}
            <li className={ portionNumber >= portionCount ? "page-item disabled" : "page-item" }>
                <button onClick={ () => { setPortionNumber(portionNumber + 1) } }
                        className="page-link" key="n">
                        <span>NEXT</span>
                </button>
            </li>
        </ul>
    )
}


export default Paginator