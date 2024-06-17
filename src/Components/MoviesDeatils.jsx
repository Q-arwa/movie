import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MoviesDeatils() {
    let parmas=useParams();
    let imgBaseUrl ='https://image.tmdb.org/t/p/w500';
    const [movieDetails, setMoviesDetails] = useState(null)

       async function getMoviesDetails(id){

      let {data}=  await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV%0244Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A&language=en-US`)

            setMoviesDetails(data)
        }
        useEffect(() => {

            getMoviesDetails(parmas.id)
          
        }, [])
        
  return (
    <>
        <div className="row mt-5">
            <div className="col-md-3">
                <img className='w-100' src={imgBaseUrl+movieDetails?.poster_path}/>
            </div>
            <div className="col-md-9">
                <h4>{movieDetails?.title}</h4>
                <p>{movieDetails?.overview}</p>
            </div>
        </div>
    
    </>
  )
}

export default MoviesDeatils