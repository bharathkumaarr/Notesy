import React from 'react'

function Footer() {
  return (
    <div className='flex h-[10vh]'>
      <div className='w-1/4 border border-neutral-400/10 border-r-0 border-l-0'></div>
      <div className='flex w-2/4 border border-neutral-400/10 items-center justify-center'><a href="https://x.com/bharathkumxr" target='_blank'>created by @<span className='hover:underline'>bharathkumxr</span> </a></div>
      <div className='w-1/4 border border-neutral-400/10 border-r-0 border-l-0'></div>
    </div>
  )
}

export default Footer
