import React, { useState } from 'react'

interface Props {
  showAddGenre: boolean
}
const AddGenre = ({ showAddGenre }: Props) => {
  const [genreName, setGenreName] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log('submited data:', genreName)
    setGenreName('')
  }

  return (
    <>
      {showAddGenre && (
        <div className='container'>
          <div className='mx-auto w-1/2 min-h-[600px] bg-gray-300 absolute h-1/2'>
            Add New Genre
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Input a Genere tpye'
                name='genreName'
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddGenre
