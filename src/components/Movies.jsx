import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CommonContext } from "../App"
import MoviesList from "./MoviesList"

const Movies = () => {
  const commonContext = useContext(CommonContext)
  const [movies, setMovies] = useState([])

  const loadMovies = async () => {
    const res = await axios.get(`${commonContext.apiurl}/mba/api/v1/movies`)
    
    setMovies(res.data.data)  
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-10 max-w-screen-xl m-auto'>
        {movies.map((movie) => (
           <MoviesList key={movie._id} movie={movie}/>
        ))}
      </div>
    </>
  )
}

export default Movies