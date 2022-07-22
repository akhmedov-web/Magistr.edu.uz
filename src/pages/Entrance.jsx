import React from 'react'
import {Outlet} from "react-router-dom"
import "../style/Entrance.css"

export default function Entrance() {
  return (
    <div style={{backgroundColor:"#F2F3F7"}}><Outlet/></div>
  )
}
