import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const MoviesList = ({ movie }) => {
  const [movieId, setMovieID] = useState('')

  const getMovieId = () => {
    let getID = movie._id
    setMovieID(getID)
  }

  useEffect(() => {
    getMovieId()
  }, [])

  return (
    <>
    <div className="flex flex-wrap items-center justify-center text-black">
      <div className="flex-shrink-0 mx-4 mb-6 relative overflow-hidden rounded-md max-w-sm shadow-lg">
        <div className="relative flex items-center justify-center">     
          <img className="relative w-60" src={movie.imageUrl} alt="shopping item"/>
        </div>
        <div className="flex justify-center mt-1">
          <Link to='/movie-overview' className="btn btn-block btn-neutral rounded-md"  state={{ movieId: movieId }}>
            View
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default MoviesList