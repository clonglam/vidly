import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from './feature/movies/MovieList'
import AddMovie from './feature/movies/AddMovie'
import Header from './components/Header'
import Login from './feature/user/Login'
import RegisterForm from './feature/user/RegisterForm'
import Navbar from './components/Navbar'
import { getCurrentUser } from './feature/user/userSlice'
import { useAppSelector, useAppDispatch } from './app/hooks'
import './styles/App.css'
import MoviePage from './feature/movies/MoviePage'
import MovieLanding from './feature/movies/MovieLanding'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])
  const user = useAppSelector((state) => state.user)

  return (
    <>
      <Header />
      <Navbar user={user.currentUser} />
      <div className='App z-0'>
        <Routes>
          <Route path='/' element={<MovieLanding />} />
          <Route path='/addmovie' element={<AddMovie />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/movie/:id' element={<MoviePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
