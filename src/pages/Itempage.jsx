import React from 'react'
import ShowsContext from '../context/shows/showsContext'
import { useContext, useEffect  } from 'react';
import Navbar from '../components/Navbar';
import firebase from '@firebase/app-compat'
import db from '../Firebase/firebase';


const Itempage = ({match}) => {

    const {getSingleShow, singleShow, loading } =  useContext(ShowsContext);

    useEffect(() => {
        getSingleShow(match.params.id)
    }, [])

    const removeTags = (text) => {
        if (text === null || text === ''){
            return false;
        } else {
            text = text.toString()
        } 
        return text.replace(/(<([^>]+)>)/gi, '')
    }

    const addFavorite = () => {
        const userId = firebase.auth().currentUser.uid
        db.collection('users').doc( userId).update({
            favorites: firebase.firestore.FieldValue.arrayUnion(singleShow.id)
          })
    }

    return (
        <div className='container '>
        <Navbar/>
        { loading ? <h2>Loading...</h2> : 
        <div className = 'item '>
            <img src = {singleShow.image ? singleShow.image.medium : 
            'http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png' } 
            alt = {singleShow.name} />
            <div className = "item__info">
                <h1>{singleShow.name}</h1>
                {singleShow.genres && singleShow.genres.map(genre => (
                    <span key = {genre} className = 'item__genre'> {genre}</span>
                ))}
                <p>
                    <strong>Status:</strong>
                    {singleShow.status && singleShow.status}
                </p>
                <p>
                    <strong>Rating:</strong>
                    {singleShow.rating ? singleShow.rating.average
                      : "No rating :("}
                </p>
                <p className='item__text'>{singleShow.summary && removeTags(singleShow.summary)}</p>
                <button 
                className='btn'
                onClick = {addFavorite}>Add to favorite <i class="fas fa-heart"></i></button>
            </div>
        </div> }
        </div>
    )
}

export default Itempage
