import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from './feature/movies/MovieList'
import AddMovie from './feature/movies/AddMovie'
import AddGenre from './feature/genres/AddGenre'
import Header from './components/Header'
import Login from './feature/user/Login'
import RegisterForm from './feature/user/RegisterForm'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/addmovie' element={<AddMovie />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
