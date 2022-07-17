import React from 'react'
import "../style/Home.css"
import HomeNavbar from '../components/Home/HomeNavbar'
import HomeMain from '../components/Home/HomeMain'
import HomeBenefits from '../components/Home/HomeBenefits'
import HomeUsage from '../components/Home/HomeUsage'
import HomeProcess from '../components/Home/HomeProcess'

export default function Home() {
  return (
    <div className='container'>
<div className="row"> <HomeNavbar/> </div>
<div className="row"> <HomeMain/> </div>
<div className="row"><HomeBenefits/></div>
<div className="row"><HomeUsage/></div>
<div className="row"><HomeProcess/></div>
    </div>
  )
}
