import React from 'react'

const Pagination = ({showsPerPage, totalShows, paginate}) => {
    const pageNumbers = []

    for( let i=1; i <= Math.ceil(totalShows/showsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <div className='pageitem'>
                            <div  onClick={() => paginate(number)}>
                                {number} 
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination
