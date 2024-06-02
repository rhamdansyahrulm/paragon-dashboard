import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[7vh] bg-slate-700 flex'>
      <div className='w-[20vw] pt-2 pl-5'>
        <h2 className='text-1xl font-bold text-slate-200'>Paragon Dashboard</h2>
        <h2 className='text-1xl font-bold text-slate-200'>Product</h2>
      </div>
      <div className='w-[60vw] py-4 pl-2'>
        <h2 className='text-2xl font-bold text-slate-200'>Product Review</h2>
      </div>
      <div className='w-[20vw] py-5'>
        <img src="" alt="" />
        <h2 className='font-bold text-slate-200'>Profile</h2>
      </div>
    </div>
  )
}

export default Navbar