import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({image, name, rating, id, genres}) => {
    return (
        <Link to = {`/item/${id}`} className='listitem'>
            <img src = {image} alt={name}></img>
            <div className='listitem__info'>
                <h4 className='info__name'>{name}</h4>
                <h4 className='info__rating'>{rating}</h4>
                <div className='info__genres'>{(genres.length === 0) ? 
                <div className='ganres_ganre'>Genre not found</div> 
                : genres.map(ganre => (
                    <div className='ganres_ganre'>{ganre}</div>
                )) }</div>
            </div>
        </Link>
    )
}

export default Listitem
