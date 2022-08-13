import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navItem = [
    { name: 'Movie List', path: '/' },
    { name: 'Add Moive', path: '/addmovie' },
    { name: 'Login', path: '/login' },
  ]
  return (
    <div className={clsx('px-5 w-full py-2 absolute')}>
      <div className='flex container mx-auto justify-between space-x-3 items-center'>
        <Link className='font-bold text-red-700 text-5xl' to='/'>
          Vidly
        </Link>

        <div className='flex flex-end space-x-3 items-center'>
          {navItem.map(({ name, path }) => (
            <Link key={`nav_Item ${name}`} to={path}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
