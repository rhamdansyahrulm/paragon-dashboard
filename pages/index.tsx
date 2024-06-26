import React from 'react'
import Navbar from '../Components/Navbar'
import ProductDashboard from '../Components/ProductDashboard'
import LeftNav from '../Components/LeftNav'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='w-full h-full flex'>
        <LeftNav />
        <ProductDashboard />
      </div>
    </>
  )
}

export default HomePage