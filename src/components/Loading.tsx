import {LoaderCircle } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className=''>
        <div>
          <LoaderCircle className='animate-spin' size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Loading