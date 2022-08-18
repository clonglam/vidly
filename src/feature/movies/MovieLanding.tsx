import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Hero from '../../components/Hero'
import MovieRow from './MovieRow'
import requests from './request'

const MovieLanding = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>('0')
  const scrollRef = useRef(null)
  const scrollMovie = (scrollOffset: number) => {
    scrollRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className='bg-black'>
        <Hero />

        <MovieRow
          title='Netflix Orignal'
          fetchUrl={`${process.env.REACT_APP_MOVIE_API_BASE_URL}${requests.fetchNetflixOrignals}`}
          isLargeRow={true}
        />

        <MovieRow
          title='Trending Now'
          fetchUrl={`${process.env.REACT_APP_MOVIE_API_BASE_URL}${requests.fetchTrending}`}
        />

        <MovieRow
          title='Top Rated'
          fetchUrl={`${process.env.REACT_APP_MOVIE_API_BASE_URL}${requests.fetchTopRated}`}
        />
        <MovieRow
          title='Action Movies'
          fetchUrl={`${process.env.REACT_APP_MOVIE_API_BASE_URL}${requests.fetchActionMovies}`}
        />
        <MovieRow
          title='Comedy Movies'
          fetchUrl={`${process.env.REACT_APP_MOVIE_API_BASE_URL}${requests.fetchComedyMovies}`}
        />
        <MovieRow
          title='Documentaries'
          fetchUrl={`${process.env.REACT_APP_MOVIE_API_BASE_URL}${requests.fetchDocumentaries}`}
        />
        {/* Feature Movie
        <div className='h-[600px] w-full py-8 relative'>
          <h3 className='text-4xl text-white font-bold text-left ml-4 mb-3'>Featured Movie</h3>
          <div
            className='flex gap-5 overflow-x-scroll hideScrollBar transition-all duration-200'
            ref={scrollRef}
          >
            <MdArrowBackIosNew
              className='text-white text-3xl md:text-5xl shadow-xl hover:scale-105 absolute left-10 translate-y-24 md:translate-y-20'
              onClick={() => scrollMovie(-200)}
            />
            <MdArrowForwardIos
              className='text-white text-3xl md:text-5xl shadow-xl hover:scale-105  absolute right-10 translate-y-24 md:translate-y-20'
              onClick={() => scrollMovie(200)}
            />

            <img
              onClick={() => setSelectedMovie('1')}
              className='object-center object-cover h-[250px] aspect-video cursor-pointer'
              src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
            />
            <img
              onClick={() => setSelectedMovie('2')}
              className='object-center object-cover h-[250px] aspect-video'
              src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
            />
            <img
              onClick={() => setSelectedMovie('3')}
              className='object-center object-cover h-[250px] aspect-video'
              src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
            />
            <img
              className='object-center object-cover h-[250px] aspect-video'
              src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
            />
            <img
              className='object-center object-cover h-[250px] aspect-video'
              src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
            />
            <img
              className='object-center object-cover h-[250px] aspect-video'
              src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
            />
          </div>
          <div
            className={clsx(
              'bg-gray-800  transition-all duration-150 px-5',
              selectedMovie != '0' ? 'h-[600px]' : 'h-[0px]',
            )}
          ></div>
        </div> */}
      </div>
    </>
  )
}

export default MovieLanding
