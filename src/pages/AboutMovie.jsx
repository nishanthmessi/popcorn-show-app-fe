import { useLocation, Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { CommonContext } from "../App"
import LoginModel from "../components/LoginModel"

const AboutMovie = () => {
  const location = useLocation()
  const { movieId } = location.state
  
  //Get Specific Movie
  const commonContext = useContext(CommonContext)
  const [movie, setMovie] = useState([])

  const loadMovie = async () => {
    const res = await axios.get(`${commonContext.apiurl}/mba/api/v1/movies/${movieId}`)
    
    setMovie(res.data.data)  
  }

  useEffect(() => {
    loadMovie()
  }, [])

  return (
    <>
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{movie.name}</h1>
          <p className="mb-8 leading-relaxed">{movie.description}</p>
          <h1 className="font-bold text-xl">Cast</h1>
          <p className="font-medium">{movie.casts}</p>
          <br/>
          <h1 className="font-bold text-xl">Director</h1>
          <p className="font-medium">{movie.director}</p>
          <br/>
          <div className="flex justify-center gap-4">
            <label htmlFor="my-modal-3" className="nline-flex text-white btn btn-secondary border-0 py-2 px-6 focus:outline-none rounded text-lg">Book Tickets</label>
            <a href={movie.trailerUrl} target="_blank" className="inline-flex text-white btn btn-primary border-0 py-2 px-6 focus:outline-none rounded text-lg">Watch Trailer</a>
          </div>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <LoginModel/>
            </div>
          </div>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={movie.imageUrl}/>
        </div>
      </div> 
    </section>
    </>
  )
}

export default AboutMovie