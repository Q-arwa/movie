import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [movies, setMovies] = useState([])
    const [TvShows, setTvShows] = useState([])
    const [Person, setPerson] = useState([])

    let imgBaseUrl ='https://image.tmdb.org/t/p/w500';

   async function getTrending(Type,callback){

    let {data} =  await  axios.get(`https://api.themoviedb.org/3/trending/${Type}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`)
           callback(data.results.slice(0,10)) 
    }

    useEffect(() => {
      
        getTrending('movie',setMovies)
        getTrending('tv',setTvShows)
        getTrending('person',setPerson)
    
      
    }, [])
    

  return (
    <>

        <div className="row gy-5 mt-5">
            <div className="col-md-4">
            <div className="brdr my-4 w-50"></div>
            <h2>Trending</h2>
            <h2>Movies</h2>
            <h2>To Watch Now</h2>
            <p className='text-muted'>Most Watched Movies By Day</p>
            <div className="brdr my-4 w-100"></div>
            </div>
            {movies.map((movie)=><div className='col-md-2 mb-3 text-center'>

                  <Link to={`/movieDetails/${movie.id}`}>
                  
                <img className='w-100' src={imgBaseUrl+ movie.poster_path} />
                <h5 >{movie.title}</h5>
                  
                  </Link>  
            </div>)}
        </div>
    

        <div className="row gy-5 mt-5">
            <div className="col-md-4">
            <div className="brdr my-4 w-50"></div>
            <h2>Trending</h2>
            <h2>Tvshows</h2>
            <h2>To Watch Now</h2>
            <p className='text-muted'>Most Watched Tvshows By Day</p>
            <div className="brdr my-4 w-100"></div>
            </div>
            {TvShows.map((tv)=><div className='col-md-2 mb-3 text-center'>

                <img className='w-100' src={imgBaseUrl+ tv.poster_path} />
                <h5 >{tv.name}</h5>
            </div>)}
        </div>

        <div className="row gy-5 mt-5">
            <div className="col-md-4">
            <div className="brdr my-4 w-50"></div>
            <h2>Trending</h2>
            <h2>Actors</h2>
            <h2>To Watch Now</h2>
            <p className='text-muted'>Most Watched Actros By Day</p>
            <div className="brdr my-4 w-100"></div>
            </div>
            {Person.map((people)=><div className='col-md-2 mb-3 text-center'>

                <img className='w-100' src={imgBaseUrl+ people.profile_path} />
                <h5 >{people.name}</h5>
            </div>)}
        </div>
    </>
  )
}

export default Home