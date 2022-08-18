import { GenreType } from './../genres/genresSlice'
import { MovieSchema } from './../../interface/interface'
import { v4 as uuidv4 } from 'uuid'
import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import axios, { AxiosError } from 'axios'
import moment from 'moment'
import requests from './request'
import _ from 'lodash'

const MDB_BASE_PATH = 'https://api.themoviedb.org/3/'

export const fetchMovies = createAsyncThunk<
  MovieType[],
  string,
  { state: { movies: MoviesState } }
>('movies/fetchMoviesStatus', async (_, thunkAPI) => {
  const { lastFetch, movies } = thunkAPI.getState().movies

  const diffInMinutes = moment().diff(moment(lastFetch))
  if (diffInMinutes < 10) return movies

  try {
    const res = await axios({
      method: 'GET',
      url: `${MDB_BASE_PATH}_${requests.fetchNetflixOrignals}`,
    })
    return res.data
  } catch (err) {
    if (err.response.data) return thunkAPI.rejectWithValue(err.response.data)
    return thunkAPI.rejectWithValue(err.message)
  }
})

// export const addMovie = createAsyncThunk<
//   MovieType,
//   {
//     title: string
//     numberInStock: number
//     dailyRentalRate: number
//     genreId: string
//     coverImage: File
//   },
//   { state: { movies: MoviesState } }
// >(
//   'movies/addMovieStatus',
//   async ({ title, numberInStock, dailyRentalRate, genreId, coverImage }, thunkAPI) => {
//     const formData = new FormData()
//     formData.append('title', title)
//     formData.append('numberInStock', numberInStock as unknown as string)
//     formData.append('dailyRentalRate', dailyRentalRate as unknown as string)
//     formData.append('genreId', genreId)
//     formData.append('coverImage', coverImage[0])

//     console.log(formData)
//     try {
//       const res = await axios({
//         method: 'post',
//         url: 'http://localhost:3900/api/movies',
//         headers: { 'Content-Type': 'multipart/form-data' },
//         data: formData,
//       })
//       // console.log(res.data)
//       return res.data
//     } catch (err) {
//       if (err.response.data) return thunkAPI.rejectWithValue(err.response.data)
//       return thunkAPI.rejectWithValue(err.message)
//     }
//   },
// )

export type MovieType = {
  id: number
  name: string
  backdrop_path: string
  first_air_date: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: string
  poster_path: string
  vote_average: number
  numberInStock: number
  vote_count: number
  genre_ids: number[]
}

export interface MoviesState {
  movies: MovieType[]
  error: string | null | SerializedError
  lastFetch: number
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

// Define the initial state using that type
const initialState = {
  movies: [],
  error: null,
  status: 'idle',
  lastFetch: 0,
} as MoviesState

export const moviesSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //   movieRemoved(state: MoviesState, { payload }: PayloadAction<string>) {
    //     state.movies.filter((movie) => movie._id !== payload)
    //   },
    // },
    // extraReducers: (builder) => {
    //   builder.addCase(fetchMovies.pending, (state, { payload }) => {
    //     if (state.status === 'idle') {
    //       state.status = 'loading'
    //     }
    //   })
    //   // Add reducers for additional action types here, and handle loading state as needed
    //   builder
    //     .addCase(fetchMovies.fulfilled, (state, { payload }) => {
    //       state.movies = payload
    //       state.lastFetch = Date.now()
    //       state.status = 'succeeded'
    //     })
    //     .addCase(fetchMovies.rejected, (state, { payload }) => {
    //       if (state.status === 'loading') {
    //         state.status = 'idle'
    //       }
    //       state.error = payload
    //     })
    // // Reducer for Add Movie
    // .addCase(addMovie.fulfilled, (state, { payload }) => {
    //   state.movies.push(payload)
    //   console.log('There is a new movie added to the list')
    // })
    // .addCase(addMovie.rejected, (state, { payload }) => {
    //   state.error = payload
    // })
  },
})

// const { movieRemoved } = moviesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMovies = (state: RootState) => state.movies.movies

export default moviesSlice.reducer
