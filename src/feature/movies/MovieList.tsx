import React, { useEffect } from 'react'
import MovieTable from '../../components/MovieTable'
import { fetchMovies } from '../movies/moviesSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchGenres } from '../genres/genresSlice'

const MovieList = () => {
  const dispatch = useAppDispatch()
  const { movies } = useAppSelector((state) => state.movies)
  // console.log('movie: ', movies)
  const genres = useAppSelector((state) => state.genres.genreList)
  useEffect(() => {
    dispatch(fetchMovies(''))
    dispatch(fetchGenres(''))
  }, [])

  // dispatch(apiCallBegan({ url: 'movies', onSuccess: 'movies/movieReceived' }))
  return (
    <div className='pt-[72px]'>
      {movies.length > 0 ? <MovieTable movies={movies} /> : 'There is no movie in the database'}
    </div>
  )
}

export default MovieList
