import React from 'react'
import { ArrowRight } from 'lucide-react';


const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between '>
        <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center text-1xl font-semibold'>{props.id+1}</h2>
        <div>
          <p className='text-shadow-2xs text-medium leading-relaxed text-white mb-13'>{props.intro}</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor: props.color}} className=' text-white font-medium  px-8 py-1 rounded-full '>{props.tag}</button>
            <button className=' text-white font-medium  px-3 py-1 rounded-full'><ArrowRight /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent