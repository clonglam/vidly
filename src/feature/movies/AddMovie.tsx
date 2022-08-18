import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { fetchGenres, selectGenres } from '../genres/genresSlice'
import Select from 'react-select'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { usePrettyPrintedState } from './usePrettyPrintedState'

type Inputs = {
  title: string
  emails: string[]
  genreId: string
  numberInStock: number
  dailyRentalRate: number
  about: string
  pv: string
  coverImage: File
  featured: number
  description: string[]
}

const ParseTextarea = ({
  value = [],
  onChange,
  className,
}: {
  value: string[]
  onChange: any
  className?: string
}) => {
  const [text, setText] = React.useState<string>(value.join('\n'))

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    setText(value)
    onChange(value.split('\n'))
  }

  return <textarea className={className} onChange={handleChange} value={text} />
}

const AddMovie = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = usePrettyPrintedState()
  const { genreList } = useAppSelector((state) => state.genres)
  const [file, setFile] = useState<File>()

  useEffect(() => {
    dispatch(fetchGenres(''))
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit = (data) => {
    console.log(data)
    // setValue(data)
  }
  console.log(value)

  const fileSelected = (event) => {
    const file = event.target.files[0]
    setFile(file)
  }

  return (
    <div className='container pt-20 text-left space-x-5 gap-5'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-1/2 mx-auto flex flex-col items-start space-y-2'
      >
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Title
        </label>
        <Controller
          name='title'
          rules={{ required: true }}
          render={({ field }) => (
            <input
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              type='string'
              {...field}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
          control={control}
        />

        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Movie Description
        </label>
        <Controller
          name='description'
          render={({ field }) => {
            // exclude ref to avoid React ref-passing warning
            const { ref, ...nonRefField } = field
            return (
              <ParseTextarea
                {...nonRefField}
                className='h-[100px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              />
            )
          }}
          control={control}
        />

        <div className='flex'>
          <div className=''>
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Movie Description
            </label>
            <Controller
              render={({ field }) => {
                return (
                  <Select
                    options={[
                      { value: 'chocolate', label: 'Chocolate' },
                      { value: 'strawberry', label: 'Strawberry' },
                      { value: 'vanilla', label: 'Vanilla' },
                    ]}
                    onChange={({ value }) => {
                      field.onChange(value)
                    }}
                    value={{ value: field.value, label: field.value }}
                  />
                )
              }}
              name='genreId'
              control={control}
            />
          </div>
        </div>

        {/* <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Movie Title
        </label>
        <input
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          defaultValue=''
          placeholder='Movie Title'
          {...register('title', { required: true })}
        />

        <div className='flex space-x-5 justify-between'>
          <div className='flex flex-col grow'>
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
          </div>
          <div className='flex flex-col grow'>
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Feature Movie
            </label>
            <input
              type='number'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              {...register('featured', { required: true })}
            />
          </div>
        </div>

        <div className='flex space-x-5'>
          <div className='flex flex-col grow'>
   
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
          </div>

          <div className='flex flex-col grow'>
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
          </div>
        </div>
        <input type='file' accept='image/*' {...register('coverImage', { required: true })} />


        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          About
        </label>
        <input
          type='string'
          className='h-[150px] mt-1 px-3 py-2 leading-8 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          {...register('about', { required: true })}
        />
        {errors.about && (
          <span className='mt-2  text-pink-600 text-sm'>This field is required</span>
        )} */}
        <input type='submit' />
      </form>
    </div>
  )
}

export default AddMovie
