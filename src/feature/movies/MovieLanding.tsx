import React, { useRef } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
const MovieLanding = () => {
  const scrollRef = useRef(null)

  const scrollMovie = (scrollOffset: number) => {
    scrollRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className='bg-black min-h-screen'>
        {/* Hero */}
        <div className=' relative'>
          <img
            className=' w-full brightness-75 object-center object-cover h-[600px] translate-all duration-200 hover:brightness-50 '
            src='https://hbomax-images.warnermediacdn.com/images/GYdYmPQZFO7eZGAEAAAAT/tile.jpeg?size=1280x720&format=jpeg&partner=hbocom&v=d8f493641653b85904f84954b1e9d5d8&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1200'
          />
          <div className='absolute bottom-10 text-left container mx-auto ml-3 md:ml-20 translate-all duration-200 hover:bottom-20'>
            <p className=' text-3xl md:text-5xl font-bold text-white mb-3 w-45'>Free Guy</p>
            <p className=' hidden md:block text-lg font-[400]  text-slate-200 w-3/4 shadow-sm'>
              {`In "Free Guy," a bank teller who discovers he is actually a background player in an
            open-world video game, decides to become the hero of his own story... one he rewrites
            himself. Now in a world where there are no limits, he is determined to be the guy who
            saves his world his way... before it is too late.`}
            </p>
          </div>
        </div>

        {/* Feature Movie */}
        <div className='h-[600px] w-full py-8 '>
          <h3 className='text-4xl text-white font-bold text-left ml-4 mb-3'>Featured Movie</h3>
          <div className='flex gap-5 overflow-x-scroll hideScrollBar' ref={scrollRef}>
            <div className='absolute flex justify-between items-center w-full h-[250px] px-5'>
              <MdArrowBackIosNew
                className='text-white text-5xl shadow-xl hover:scale-105 transition-all duration-200'
                onClick={() => scrollMovie(-200)}
              />
              <MdArrowForwardIos
                className='text-white text-5xl shadow-xl hover:scale-105 transition-all duration-200'
                onClick={() => scrollMovie(200)}
              />
            </div>
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
        </div>
      </div>
    </>
  )
}

export default MovieLanding
