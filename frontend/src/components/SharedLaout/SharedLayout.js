import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import './sharedLayout.css'

function SharedLayout() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div>
        <Navbar />
        <div className='dashboard-page'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SharedLayout