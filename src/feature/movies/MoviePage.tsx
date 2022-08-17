import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'
import Footer from '../../components/Footer'
import { BiCameraMovie } from 'react-icons/bi'

const MoviePage = () => {
  const params = useParams()
  useAppDispatch()

  return (
    <>
      <div className='z-0 flex flex-col gap-y-10 bg-zinc-900'>
        <div className='relative'>
          <img
            className='w-full brightness-75 object-center object-cover h-[600px]'
            src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
          />
          <div className='absolute bottom-10  text-left container mx-auto ml-3 md:ml-20 '>
            <p className=' text-3xl md:text-5xl font-bold text-white mb-3 w-45'>Free Guy</p>
            <p className=' hidden md:block text-lg font-[400]  text-slate-200 w-3/4 shadow-sm'>
              {`In "Free Guy," a bank teller who discovers he is actually a background player in an
            open-world video game, decides to become the hero of his own story... one he rewrites
            himself. Now in a world where there are no limits, he is determined to be the guy who
            saves his world his way... before it is too late.`}
            </p>
          </div>
        </div>

        <div className='container mx-auto py-5 px-3 text-left '>
          <div className='About py-5 md:px-8'>
            <h3 className='text-4xl font-semibold text-slate-900 shadow-sm text-left mb-5'>
              About
            </h3>
            <p className='font-light'>
              {`Free Guy is a 2021 American action-comedy film directed and produced by Shawn Levy from
            a screenplay by Matt Lieberman and Zak Penn, and a story by Lieberman. The film stars
            Ryan Reynolds, Jodie Comer, Lil Rel Howery, Utkarsh Ambudkar, Joe Keery, and Taika
            Waititi. It tells the story of a bank teller who discovers that he is a non-player
            character in a massively multiplayer online game who then partners with a player to find
            evidence that a gaming company's CEO stole the player's game's source code. Filming took
            place in Massachusetts and California from May to July of 2019.`}
            </p>
          </div>

          <div className='flex flex-col justify-center text-center py-10 bg-red-800 my-10 shadow-sm hover:shadow-lg hover:scale-105 duration-200  transition-all'>
            <h2 className='font-bold text-slate-100 text-3xl'>It is now alvaiable on Vidly </h2>
            <p className='font-normal text-slate-100 text-lg'>
              Rent this movie This weekend come and enjoy the movie with your family
            </p>
          </div>

          <div className='flex gap-5 py-5 flex-col md:flex-row justify-between mb-5'>
            <iframe className='grow aspect-video' src='https://www.youtube.com/embed/tgbNymZ7vqY' />
            <div className='grow py-3'>
              <h3 className='text-3xl font-semibold text-slate-900 text-left mb-2'>
                Watch the Opening Scene
              </h3>
              <p className='text-lg font-light text-slate-900 text-left mb-5 w-[42ch]'>
                Try and Expreience the opening scene of <span className='italic'>Free Guy </span>,
                to feel how great is it
              </p>
            </div>
          </div>

          <div className='py-5'>
            <h3 className='text-4xl font-semibold text-slate-900 shadow-sm text-left mb-5'>
              Watch It now
            </h3>
            <div className='hover:shadow-lg hover:scale-105 duration-200  transition-all px-5 py-3 shadow-md bg-red-800 flex items-center space-x-3 text-white rounded-xl w-[180px] cursor-pointer'>
              <BiCameraMovie className='text-3xl' />
              <div className='flex flex-start flex-col'>
                <p className='w-20ch font-semibold text-sm'>Available on</p>
                <p className='w-20ch text-lg font-bold'>Vidly</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-10'>Discover other Commedy Movie</div>
      </div>
      <Footer />
    </>
  )
}

export default MoviePage
