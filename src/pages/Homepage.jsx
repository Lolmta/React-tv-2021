import React from 'react'
import Searchbar from '../components/Searchbar'
import ShowsContext from '../context/shows/showsContext'
import Listitem from '../components/Listitem'
import Navbar from '../components/Navbar'

import { useContext } from 'react'
import AllMovies from '../components/AllMovies'

const Homepage = () => {
    const showsContext = useContext(ShowsContext);
    const {loading , shows } =showsContext

    return (
        <div className='container-fluid'>
            <div className='container'>
            <Navbar/>
            <Searchbar/>
            {loading ? <h2>Loading...</h2> : 
            <div>
                {shows.map(item => (
                <Listitem 
                key={item.show.id}
                id={item.show.id}
                image={item.show.image ? item.show.image.medium :
                 'http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'  }
                name={item.show.name}
                rating={
                    item.show.rating.average
                      ? item.show.rating.average
                      : "No rating :("
                  }
                  genres={item.show.genres}
                />
                ))}
            </div>
            }
        <AllMovies/>
            </div>
        </div>
    )
}

export default Homepage
