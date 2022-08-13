import { combineReducers } from 'redux'
import moviesReducer from '../feature/movies/moviesSlice'
import genreReducer from '../feature/genres/genresSlice'
import userReducer from '../feature/user/userSlice'

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genreReducer,
  user: userReducer,
})

export default rootReducer
