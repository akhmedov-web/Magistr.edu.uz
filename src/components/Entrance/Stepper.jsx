import React from 'react'
import { Outlet,Link } from 'react-router-dom'
export default function Stepper() {
  return (
    <div>   
        <div className='steppers d-flex w-100 justify-content-around'>
            <Link to="" className="steppper">1</Link>
            <Link to="educations" className="steppper">2</Link>
            <Link to="specialty" className="steppper">3</Link>
            <Link to="privilege" className="steppper">4</Link>
        </div>
        <Outlet/>
        </div>
  )
}
