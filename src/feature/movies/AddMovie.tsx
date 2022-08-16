import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { fetchGenres, selectGenres } from '../genres/genresSlice'
import { addMovie } from './moviesSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

type Inputs = {
  title: string
  genreId: string
  numberInStock: number
  dailyRentalRate: number
  about: string
  pv: string
  coverImage: File
}

const AddMovie = () => {
  const dispatch = useAppDispatch()
  const { genreList } = useAppSelector((state) => state.genres)
  const [file, setFile] = useState<File>()

  useEffect(() => {
    dispatch(fetchGenres(''))
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addMovie(data))
  }

  const fileSelected = (event) => {
    const file = event.target.files[0]
    setFile(file)
  }

  //   console.log(watch('title')) // watch input value by passing the name of it

  return (
    <div className='container pt-20 '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-1/2 mx-auto flex flex-col items-start space-y-2'
      >
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Movie Title
        </label>
        <input
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          defaultValue=''
          placeholder='Movie Title'
          {...register('title', { required: true })}
        />
        {/* Geners */}
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Genres
        </label>
        <select {...register('genreId')}>
          {genreList.map(({ _id, name: title }) => (
            <option key={_id} value={_id}>
              {title}
            </option>
          ))}
        </select>
        {/* Number In Stock */}
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Number In Stock
        </label>
        <input
          type='number'
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          {...register('numberInStock', { required: true })}
        />
        {errors.numberInStock && (
          <span className='mt-2  text-pink-600 text-sm'>This field is required</span>
        )}
        {/* Number In Stock */}
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Daily Rental Rate
        </label>
        <input
          type='number'
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          {...register('dailyRentalRate', { required: true })}
        />
        {errors.numberInStock && (
          <span className='mt-2  text-pink-600 text-sm'>This field is required</span>
        )}
        <input type='file' accept='image/*' {...register('coverImage', { required: true })} />{' '}
        {/* <p> onchange</p>
        <input onChange={fileSelected} type='file' accept='image/*'></input> */}
        <input type='submit' />
      </form>
    </div>
  )
}

export default AddMovie
