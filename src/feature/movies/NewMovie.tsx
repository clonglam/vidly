import React from 'react'

interface Props {}

const NewMovie = (props: Props) => {
  return (
    <div>
      <form className='flex flex-col'>
        <label htmlFor='title'>Movie Title</label>
        <input type='text' name='title' placeholder='Type in new movie title' autoFocus />

        <label htmlFor='numberInStock'>numberInStock</label>
        <input type='number' name='numberInStock' placeholder='Type in newnumberInStock' />

        <label htmlFor='dailyRentalRate'>dailyRentalRate</label>
        <input type='number' name='dailyRentalRate' placeholder='daily Rental Rate' />
      </form>
    </div>
  )
}

export default NewMovie
