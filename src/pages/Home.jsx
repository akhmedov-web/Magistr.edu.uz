import React from 'react'
import "../style/Home.css"
import HomeMain from '../components/Home/HomeMain'
import HomeBenefits from '../components/Home/HomeBenefits'
import HomeUsage from '../components/Home/HomeUsage'
import HomeProcess from '../components/Home/HomeProcess'
import HomeStatistic from '../components/Home/HomeStatistic'
import HomeAd from '../components/Home/HomeAd'
import HomeNews from '../components/Home/HomeNews'
import HomeDownloads from '../components/Home/HomeDownloads'

export default function Home() {
  return (
    <>
<div className="row"> <HomeMain/> </div>
<div className="row"><HomeBenefits/></div>
<div className="row"><HomeUsage/></div>
<div className="row"><HomeProcess/></div>
<div className="row"><HomeStatistic/></div>
<div className="row"><HomeAd/></div>
<div className="row"><HomeNews/></div>
<div className="row"><HomeDownloads/></div>
    </>
  )
}
