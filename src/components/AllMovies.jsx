import React from 'react'
import axios from 'axios';
import Listitem from './Listitem';
import Pagination from './Pagination';
import { useEffect , useState } from 'react';

const AllMovies = () => {

    const [shows, setShows] = useState([]);
    const [genre , setGenre ] = useState(null);
    const [page , setPage ] = useState(1);
    const [showsPerPage] =useState(15)

    const lastShowIndex =  page * showsPerPage;
    const firstShowIndex = lastShowIndex -showsPerPage;
    const currentShow = shows.slice(firstShowIndex, lastShowIndex)

    const paginate = pageNumber => setPage(pageNumber)
    const nextPage = () => setPage(prev => prev + 1)
    const prevPage = () => setPage(prev => prev - 1)



    useEffect(() => {
      axios.get('https://api.tvmaze.com/shows?page=0')
        .then(shows => {
          if(!genre){
           return setShows(shows.data)
          }
          setShows(shows.data.filter(item => item.genres?.includes(genre)))
        })
    }, [genre])

    const createPosters = (shows) => {
      return shows.map(post => {
        return (
              <Listitem 
                key={post.id + '_' + post.name}
                id={post.id}
                image={post.image ? post.image.medium :
                 'http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'  }
                name={post.name}
                rating={
                    post.rating.average
                      ? post.rating.average
                      : "No rating"
                  }
                  genres={post.genres}
                />
        );
      })
    }

 

    const setChengeRadio =  (e) => {
      setGenre((e.target.value))
      setPage(1)
    }

    return (
      <div className='mowies'>
      <div className='movies__top'> 
        <h1 className='movies__header'>ALL MOVIES</h1>
        <div className ='genre__container'>
          <input type="radio" value='Comedy' checked = {genre === 'Comedy'} onChange={setChengeRadio}/>
          <label for='Comedy'>Comedy</label>
          <input type="radio" value='Horror'checked = {genre === 'Horror'} onChange={setChengeRadio}/>
          <label for='Horror'>Horror</label>
          <input type="radio" value='Drama'checked = {genre === 'Drama'} onChange={setChengeRadio}/>
          <label for='Drama'>Drama</label>
          <input type="radio" value='Fantasy'checked = {genre === 'Fantasy'} onChange={setChengeRadio}/>
          <label for='Fantasy'>Fantasy</label>
          <input type="radio" value='Thriller'checked = {genre === 'Thriller'} onChange={setChengeRadio}/>
          <label for='Thriller'>Thriller</label>
          <input type="radio" value='Crime'checked = {genre === 'Crime'} onChange={setChengeRadio}/>
          <label for='Crime'>Crime</label>
          <input type="radio" value='Action'checked = {genre === 'Action'} onChange={setChengeRadio}/>
          <label for='Action'>Action</label>
        </div>
      </div>
          <div>
            {createPosters(currentShow)}
          </div>
      
          <div className='btn-group'>
          <button className='btn pgn_btn' onClick={prevPage}>Prev</button>
          <Pagination
          showsPerPage ={showsPerPage}
          totalShows = { shows.length}
          paginate = {paginate}
          />
          <button className='btn pgn_btn' onClick={nextPage}>Next</button>
          </div>
     
      </div>
    );
}

export default AllMovies
