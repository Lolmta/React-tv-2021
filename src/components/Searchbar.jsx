import React from 'react'
import { useState , useContext } from 'react'
import ShowsContext from '../context/shows/showsContext'

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const showsContext = useContext(ShowsContext);
    const { searchShows } = showsContext;
    const onSearchHandler = (e) => {
      e.preventDefault();
      searchShows(searchTerm);
    };

    const clearSearchHandler = (e) => {
        e.preventDefault();
        searchShows('');
      };

    return (
        <div className='searchbar'> 
            <form className='searchbar__form'>
                <input type='text' placeholder="Search from TV"
                value = {searchTerm}
                onChange ={(e) => setSearchTerm(e.target.value)}
                /> 
                <div className='btn-group'>
                <button
                 className='btn btn-block'
                 onClick={onSearchHandler}>
                     SEARCH
                </button>
                <button
                 className='btn btn-block'
                 onClick={clearSearchHandler}>
                     CLEAR
                </button>
                </div>
                
            </form>
        </div>
    )
}

export default Searchbar
