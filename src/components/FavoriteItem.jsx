import React from 'react'
import { Link } from 'react-router-dom'

const FavoriteItem = ({ name, id, image}) => {
    return (
        <Link to = {`/item/${id}`} className='listitem'>
        <img src = {image} alt={name}></img>
        <h4 className='info__name'>{name}</h4>
    </Link>
    )
}

export default FavoriteItem
