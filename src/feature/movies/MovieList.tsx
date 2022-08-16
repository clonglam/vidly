import React, { useEffect } from 'react'
import MovieTable from '../../components/MovieTable'
import { fetchMovies } from '../movies/moviesSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchGenres } from '../genres/genresSlice'

const MovieList = () => {
  const dispatch = useAppDispatch()
  const { movies, status: MoiveStatus } = useAppSelector((state) => state.movies)
  // console.log('movie: ', movies)
  const genres = useAppSelector((state) => state.genres.genreList)
  useEffect(() => {
    dispatch(fetchMovies(''))
    dispatch(fetchGenres(''))
  }, [])

  // dispatch(apiCallBegan({ url: 'movies', onSuccess: 'movies/movieReceived' }))
  return (
    <>
      {MoiveStatus === 'succeeded' ? (
        <div className='pt-[72px]'>
          <img src={`${movies[0].coverImg}`} />
          {movies.length > 0 ? <MovieTable movies={movies} /> : 'There is no movie in the database'}
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  )
}

export default MovieList
