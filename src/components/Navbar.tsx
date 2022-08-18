import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { UserType } from '../feature/user/userSlice'
import UserControl from '../feature/user/UserControl'
interface Props {
  user: UserType
}

const Navbar = ({ user }: Props) => {
  const [showHandler, setshowHandler] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 100 ? setshowHandler(true) : setshowHandler(false),
    )
  }, [])

  const navItem = [
    { name: 'Movie List', path: '/' },
    { name: 'Add Moive', path: '/addmovie' },
    { name: 'Login', path: '/login' },
  ]

  return (
    <div
      className={clsx(
        'fixed top-0 w-full py-5 z-40 h-[80px] md:h-[60px] items-center transition-all ease-in duration-200',
        showHandler ? 'bg-black' : 'bg-transparent',
      )}
    >
      <div className='flex justify-between space-x-3 items-center px-8'>
        <img
          className='object-cover w-[100px] md:w-[120px] cursor-pointer glow transition-all ease-in duration-200'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
        />

        <UserControl user={user} />
      </div>
    </div>
  )
}

export default Navbar
