import React from 'react'
import Navbar from '../components/Navbar'
import FavItem from '../components/FavItem'
import firebase from '@firebase/app-compat'
import db from '../Firebase/firebase';
import { useState, useEffect } from 'react';

const Library = () => {

    const [favorites, setFavorites] = useState([]);

    const docRef = db.collection("users").doc(firebase.auth().currentUser.uid);

    useEffect(() => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data().favorites);
             return setFavorites(doc.data().favorites)
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [docRef])

    return (
        <div className='container-fluid'>
        <div className="container librarypage">
        <Navbar/>
        <div className='favitems'>
            {favorites.map((id) =>  (<FavItem id={id}></FavItem>))}
        </div>
        </div>
        </div>
    )
}

export default Library
