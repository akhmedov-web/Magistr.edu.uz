import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivilegeInform() {
  return (
    <div className='w-100'>
      PrivilegeInform
      <div className="w-100 stepperFooter d-flex justify-content-end align-items-center px-4 bg-light">
        <Link to="/stepper/specialty" className='stepperFooterBtn btn btn-primary d-flex align-items-center justify-content-center'>Keyingi qadam</Link>
      </div>
    </div>
  )
}
