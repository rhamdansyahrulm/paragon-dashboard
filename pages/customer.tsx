import React from 'react'
import Navbar from '../Components/Navbar'
import LeftNav from '../Components/LeftNav'
import CustomerDashboard from '../Components/CustomerDashboard'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='w-full h-full flex'>
        <LeftNav />
        <CustomerDashboard />
      </div>
    </>
  )
}

export default HomePage