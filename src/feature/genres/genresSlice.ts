import { createSlice, PayloadAction, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { v4 as uuid, v4 } from 'uuid'
import moment from 'moment'

export const fetchGenres = createAsyncThunk<
  GenreType[],
  string,
  { state: { genres: GenresState } }
>('genres/fectchGenresStatus', async (_, thunkAPI) => {
  const { lastFetch, status, genreList } = thunkAPI.getState().genres
  const diffInMinutes = moment().diff(moment(lastFetch))
  if (diffInMinutes < 10) return genreList

  const res = await fetch('http://localhost:3900/api/genres')
  const data = await res.json()
  return data
})

export type GenreType = {
  _id: string
  name: string
}

export interface GenresState {
  genreList: GenreType[]
  error: string | null | undefined
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  lastFetch: number
}

// Define the initial state using that type
const initialState: GenresState = {
  genreList: [],
  error: null,
  status: 'idle',
  lastFetch: 0,
}

export const genresSlice = createSlice({
  name: 'genres',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    genereAdded(state: GenresState, { payload }: PayloadAction<string>) {
      const newGenre = {
        _id: v4(),
        name: payload,
      }
      state.genreList.push(newGenre)
    },
    genereRemoved(state: GenresState, { payload }: PayloadAction<string>) {
      state.genreList.filter((genere) => genere._id !== payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state, { payload }) => {
      if (state.status === 'idle') {
        state.status = 'loading'
      }
    })

    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchGenres.fulfilled, (state, { payload }) => {
        // Add user to the state array
        console.log(payload)
        state.genreList = payload
        state.lastFetch = Date.now()
        state.status = 'succeeded'
      })

      .addCase(fetchGenres.rejected, (state, action) => {
        // const { requestId } = action.meta
        if (state.status === 'loading') {
          state.status = 'idle'
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          state.error = action.error.message!
        }
      })
  },
})

const { genereAdded, genereRemoved } = genresSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectGenres = (state: RootState) => state.genres.genreList
export const selectGenres = createSelector(
  (state: RootState) => state.genres.genreList,
  (genreList) => genreList,
)
export default genresSlice.reducer
