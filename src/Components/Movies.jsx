import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Movies() {
  const [movies, setMovies] = useState([])
  let imgBaseUrl ='https://image.tmdb.org/t/p/w500';

   async function getTrending(){

    let {data} =  await  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`)
           setMovies(data.results) 
    }

    useEffect(() => {
      
        getTrending()
        
    
      
    }, [])
    
  return (
<>

<div className="row gy-5 mt-5">
           
            {movies.map((movie)=><div className='col-md-2 mb-3 text-center'>

                  <Link to={`/movieDetails/${movie.id}`}>
                  
                <img className='w-100' src={imgBaseUrl+ movie.poster_path} />
                <h5 >{movie.title}</h5>
                  
                  </Link>  
            </div>)}
        </div>
</>
  )
}

export default Movies