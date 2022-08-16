import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { UserType } from '../feature/user/userSlice'
import UserControl from '../feature/user/UserControl'

interface Props {
  user: UserType
}

const Navbar = ({ user }: Props) => {
  const navItem = [
    { name: 'Movie List', path: '/' },
    { name: 'Add Moive', path: '/addmovie' },
    { name: 'Login', path: '/login' },
  ]
  return (
    <div className={clsx('px-5 w-full py-2 -mb-20')}>
      <div className='flex container mx-auto justify-between space-x-3 items-center'>
        <Link className='font-bold text-red-700 text-5xl' to='/'>
          Vidly
        </Link>
        {user.name ? (
          <div className='flex flex-end space-x-3 items-center'>
            {navItem.map(({ name, path }) => (
              <Link key={`nav_Item ${name}`} to={path}>
                {name}
              </Link>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        <UserControl user={user} />
      </div>
    </div>
  )
}

export default Navbar
