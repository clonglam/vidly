import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
}

const Header = ({ title = 'Vidy - movie database' }: Props) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title> {title} </title>
      </Helmet>
    </>
  )
}

export default Header
