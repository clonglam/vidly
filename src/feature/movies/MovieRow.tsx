import axios from 'axios'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { MovieType } from './moviesSlice'

interface Props {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

const MovieRow = ({ title, fetchUrl, isLargeRow = false }: Props) => {
  const [movies, setMovies] = useState<MovieType[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await axios.get(fetchUrl)
        setMovies(res.data.results)
        setLoading(false)
        return res
      } catch (err) {
        console.error(err)
        setLoading(true)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='text-white text-left ml-5'>
      <h3 className='text-3xl py-3 mt-5 font-bold'>{title}</h3>

      {loading ? (
        <p>Loading</p>
      ) : (
        <div className='flex space-x-3 overflow-x-scroll overflow-y-hidden hideScrollBar '>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={
                isLargeRow
                  ? 'ratio-video max-w-[300px] w-1/4 object-contain transition-all duration-300 ease-in-out hover:scale-105'
                  : 'ratio-video max-w-[500px] w-1/4 object-contain transition-all duration-300 ease-in-out hover:scale-105'
              }
              src={
                isLargeRow
                  ? `${process.env.REACT_APP_MOVIE_IMAGE_BUCKET}${movie.poster_path}`
                  : `${process.env.REACT_APP_MOVIE_IMAGE_BUCKET}${movie.backdrop_path}`
              }
              alt={movie.name}
            />
          ))}
        </div>
      )}

      {/*       
      ({
  // <img src={`${process.env.REACT_APP_MOVIE_IMAGE_BUCKET}${movie?.backdrop_path}`}}></img>)}
  ))
      })} */}
    </div>
  )
}

export default MovieRow
