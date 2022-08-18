import React from 'react'
import { GenreType } from '../feature/genres/genresSlice'
import { MovieType } from '../feature/movies/moviesSlice'
import TableHeader from './TableHeader'

interface Props {
  movies: MovieType[]
}

const MovieTable = ({ movies }: Props) => {
  const tableHead = [
    {
      title: 'Movie Title',
    },
    {
      title: 'number In Stock',
    },
    {
      title: 'daily Rental Rate',
    },
    {
      title: 'genre',
    },
    {
      title: 'Edit',
    },
    {
      title: 'Remove',
    },
  ]
  return (
    <table className='table-auto w-full px-5'>
      {/* <thead>
        <tr className='text-lg'>
          {tableHead.map(({ title }) => (
            <th key={`table_header_${title}`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {movies.map(({ _id, title, numberInStock, dailyRentalRate, genre }) => (
          <tr key={_id}>
            <td>{title}</td>
            <td>{numberInStock}</td>
            <td>{dailyRentalRate}</td>
            <td>{genre.name}</td>
          </tr>
        ))}
      </tbody> */}
    </table>
  )
}

export default MovieTable
