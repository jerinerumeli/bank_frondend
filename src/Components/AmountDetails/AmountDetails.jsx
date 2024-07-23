import React from 'react'
import DropDown from '../DropDown'

function AmountDetails() {
  return (
    <div>
        <div className="firstop"><DropDown data={"Amount Deposit"} /></div>
        <DropDown data={"Amount Withdrawal"}/>
        <DropDown data={"Check Balance"}/>
        <DropDown data={"Exit"}/>
    </div>
  )
}

export default AmountDetails