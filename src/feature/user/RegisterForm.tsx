import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import bgImage from '../../img/signinBackground.jpg'
import clsx from 'clsx'
import Footer from '../../components/Footer'
import { registerUser, UserType } from './userSlice'
import { useAppDispatch } from '../../app/hooks'

export type FormValues = {
  name: string
  email: string
  password: string
}

const RegisterForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(registerUser(data))
  }

  return (
    <div
      className='w-screen min-h-[600px] md:min-h-screen bg-center bg-cover pt-[84px]'
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bgImage})`,
      }}
    >
      <div
        className={clsx(
          'w-screen min-h-[600px]  bg-black',
          'flex flex-col items-start mx-auto px-12 py-3 md:rounded-xl space-y-4 md:mb-20 ',
          'md:w-[400px] md:h-1/2 md:bg-black/[0.65]',
        )}
      >
        <p className='text-4xl font-bold text-white pt-6 pb-3'>Register</p>
        <form
          className='flex flex-col items-start space-y-7 w-full'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className='mt-1 px-3 py-2 h-[48px] bg-zinc-800  shadow-sm  placeholder-slate-400 placeholder-font-[400]
            focus:outline-none focus:bg-zinc-700 block w-full rounded-md sm:text-sm font-bold focus:ring-1 text-white'
            defaultValue=''
            placeholder='youremail@example.com'
            {...register('email')}
          />
          <input
            className='mt-1 px-3 py-2 h-[48px] bg-zinc-800  shadow-sm  placeholder-slate-400 placeholder-font-[400]
            focus:outline-none focus:bg-zinc-700 block w-full rounded-md sm:text-sm font-bold focus:ring-1 text-white'
            defaultValue=''
            placeholder='name'
            {...register('name')}
          />
          <input
            className='mt-1 px-3 py-2 h-[48px] bg-zinc-800  shadow-sm  placeholder-slate-400 
            focus:outline-none focus:bg-zinc-700 block w-full rounded-md sm:text-sm focus:ring-1 font-bold text-white'
            type='password'
            placeholder='Password'
            {...register('password')}
          />

          <input type='submit' className='w-full bg-red-700 h-[48px] py-2 rounded-md text-white' />
        </form>

        <div>
          <p className='text-zinc-500 font-[400] text-sm'>
            already have account?{' '}
            <Link className='text-white font-[600]' to='/login'>
              Login in now.
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RegisterForm
