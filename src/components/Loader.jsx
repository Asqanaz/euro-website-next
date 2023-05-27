import React from 'react'
import Spinner from '@/ui/spinner/Spinner'

export const Loader = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <Spinner size={24}/>
    </div>
  )
}
