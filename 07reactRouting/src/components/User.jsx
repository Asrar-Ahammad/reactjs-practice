import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <>
        <div className="h-[70vh] w-full flex items-center justify-center">
            <p className='text-3xl'>User : {userid}</p>
        </div>
    </>
  )
}

export default User