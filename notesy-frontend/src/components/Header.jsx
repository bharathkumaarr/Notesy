import React from 'react'

function Header() {
  return (
    <div className='flex h-[10vh]'>

    <div className='w-1/4 border border-neutral-400/10 border-r-0 border-l-0'></div>

    <div className='flex text-xl justify-between items-center p-2 w-2/4 border border-neutral-400/10'>
      <div className=' pr-10 pl-10 w-max items-center'>
         <h1 className=''><a href="https://usenotesy.vercel.app">Notesy.</a></h1>
      </div>
      <div className='w-4 bg-neutral-200 rounded-full h-4 cursor-pointer'></div>
      <div className='flex pr-10 pl-10 w-max'>
        <button className='cursor-pointer text-center hover:scale-95 transition-all duration-300 ease-in-out hover:text-neutral-400/50 underline'>share</button>
      </div>
    </div>

    <div className='w-1/4 border border-neutral-400/10 border-r-0 border-l-0'></div>

    </div>
    
  )
}

export default Header
