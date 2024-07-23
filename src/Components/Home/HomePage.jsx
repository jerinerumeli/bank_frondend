import React from 'react'
import DropDown from '../DropDown'
import "./HomePage.css"

function HomePage() {
  return (
    <div>
        <div className="firstop"><DropDown data={"Customer Login"} /></div>
        <DropDown data={"New Customer Signin"}/>
        <DropDown data={"exit"}/>
    </div>
  )
}

export default HomePage