import React, { useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import { MovieType } from '../feature/movies/moviesSlice'
import requests from '../feature/movies/request'
import Skelton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Hero = () => {
  function truncate(string: string, n: number) {
    return string.length > n ? string.substring(0, n - 1) + '...' : string
  }

  const [movie, setMovie] = useState<MovieType>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(false)
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_MOVIE_API_BASE_URL}${requests.fetchNetflixOrignals}`,
        )
        setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
        setLoading(true)
        return res
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  console.log('Herro Data')
  console.log(movie)

  return (
    <>
      {loading ? (
        <div
          className='relative h-1/4 object-contain top-0 min-h-[600px]'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url("${process.env.REACT_APP_MOVIE_IMAGE_BUCKET}${movie?.backdrop_path}")`,
            backgroundPosition: 'center center',
          }}
        >
          <div className='absolute top-1/2 text-left container mx-auto ml-3 md:ml-10 translate-all duration-200'>
            <p className=' text-3xl md:text-5xl font-bold text-white mb-3 w-1/2'>
              {movie.name || movie.original_name || <Skelton />}
            </p>

            <div className='flex items-center space-x-10 mb-3'>
              <button
                className={clsx(
                  'bg-zinc-700/[0.5] text-white cursor-pointer font-[700] px-5 py-2 outline-none rounded-sm text-sm ',
                  'md:text-md md:px-8 md:py-2 transition-all duration-150',
                  'hover:bg-zinc-200/[0.8] hover:text-zinc-900',
                )}
              >
                Play
              </button>

              <button
                className={clsx(
                  'bg-zinc-700/[0.5] text-white cursor-pointer font-[700] px-5 py-2 outline-none rounded-sm text-sm ',
                  'md:text-md md:px-8 md:py-2 transition-all duration-150',
                  'hover:bg-zinc-200/[0.8] hover:text-zinc-900',
                )}
              >
                My List
              </button>
            </div>
            <p className=' md:block text-md font-[600] text-slate-200 w-3/4 leading-5 h-[80px]'>
              {truncate(movie.overview, 150) || <Skelton count={4} />}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default Hero
