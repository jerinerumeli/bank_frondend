import React from 'react'
import "./Deposit.css"
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Deposit() {
  const navigate = useNavigate()
  const[amount,setAmount] = useState()
  const deposit=(e)=>{
      e.preventDefault()
      if(amount<'1'){
        window.alert("canot add the amount below 1 ")
      }else{
        window.alert("Deposited...",{amount})
        navigate('/balance')
      }
    }
  return (
    <div >

      <div>
        <h2>Deposite Money</h2>
        <p class="category-description">
          </p>

        <div class="item">
          
          <p class="price">₹</p>
          <form action="" onSubmit={deposit}>
              <input type="number" className='textbar' value={amount} onChange={(e)=>(setAmount(e.target.value))}/>
              <button type='submit' >Deposit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Deposit