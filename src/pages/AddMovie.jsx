import { useState, useContext } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CommonContext } from '../App'

const AddMovie = () => {
  const [movieName, setMovieName] = useState()
  const [description, setDescription] = useState()
  const [casts, setCasts] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [trailerUrl, setTrailerUrl] = useState()
  const [language, setLanguage] = useState()
  const [director, setDirector] = useState()
  const [producer, setProducer] = useState()
  const [releaseStatus, setReleaseStatus] = useState()

  const commonContext = useContext(CommonContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const movieData = {
      movieName,
      description,
      casts,
      imageUrl,
      trailerUrl,
      language,
      director,
      producer,
      releaseStatus,
    }

    await Axios.post(
      `${commonContext.apiurl}/mba/api/v1/movies`,
      movieData
    ).then(() => {
      navigate('/')
    })
  }

  return (
    <div className='flex flex-col justify-center items-center pt-6 pb-6'>
      <h1 className='text-2xl font-medium mb-14 '>Add new movie</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col sm:flex-row gap-12'>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Movie Name*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Description*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-12'>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Casts*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={casts}
              onChange={(e) => setCasts(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Image Url*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-12'>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Trailer Url*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={trailerUrl}
              onChange={(e) => setTrailerUrl(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Language*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-12'>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Director*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Producer*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={producer}
              onChange={(e) => setProducer(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-6 items-start mb-8'>
            <label className='text-lg font-medium'>Release Status*</label>
            <input
              type='text'
              className='border-2 rounded-xl py-2 px-2 w-80 border-zinc-600'
              value={releaseStatus}
              onChange={(e) => setReleaseStatus(e.target.value)}
              required
            />
          </div>
        </div>
        <button className='btn-primary p-3 rounded-lg' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddMovie
