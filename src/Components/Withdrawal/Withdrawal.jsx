import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Withdrawal() {
  const navigate = useNavigate()
  const[amount,setAmount] = useState()
  const withdraw=(e)=>{
    e.preventDefault()
    if(amount<'1'){
      window.alert("canot withdraw the amount below 1 ")
    }else{
      window.alert("Money Withdrawed...")
      navigate('/balance')
    }
  }
  return (
    <div >

      <div>
        <h2>Withdraw Money</h2>
        <p class="category-description">
          </p>

        <div class="item">
          
          <p class="price">₹</p>
          <form action="" onSubmit={withdraw}>
              <input type="number" className='textbar' value={amount} onChange={(e)=>(setAmount(e.target.value))}/>
              <button type='submit' >Withdraw</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Withdrawal