import React from 'react'
import { UserType } from './userSlice'

interface Props {
  user: UserType
}

const UserControl = ({ user }: Props) => {
  return (
    <div className=' text-white glow'>
      {user.name !== '' ? <p>{`hello ${user.name}`}</p> : <p>There is no user logined</p>}
    </div>
  )
}

export default UserControl
