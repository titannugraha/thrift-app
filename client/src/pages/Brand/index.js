import React from 'react'
import { Outlet } from 'react-router-dom'

const Brand = () => {
  return (
    <>
     <div className="main-brand-body">
      <div className="main-brand-card">
        <Outlet></Outlet>
      </div>
    </div>
    </>
  )
}

export default Brand