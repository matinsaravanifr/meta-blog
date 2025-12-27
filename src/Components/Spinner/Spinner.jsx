import React from 'react'

export default function Spinner() {
  return (
    <div className='w-full flex items-center justify-center mt-10 mb-10 '>

    <div class="inline-block w-20 h-20 relative text-blue-500 ">
        <div class="absolute inset-0 m-2 w-16 h-16 rounded-full border-[6.4px] border-current border-r-transparent border-l-transparent animate-[spin_1.2s_linear_infinite]"></div>
    </div>
    </div>

  )
}
