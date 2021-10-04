import React from 'react'
import { useState, useEffect  } from 'react';
import axios from 'axios';
import FavoriteItem from './FavoriteItem';

const FavItem = ({id}) => {

    const [favorite , setFavorite ] = useState('');

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then((doc) =>{
            console.log('doc.data', doc.data)
            return setFavorite(doc.data)
        })
    },[id])
   
    return (
        <div>
         <FavoriteItem
         name = {favorite.name}
         id = {favorite.id}
         image={favorite.image ? favorite.image.medium :
            'http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'  }
         />
        </div>
    )
}

export default FavItem
