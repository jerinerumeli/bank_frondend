import React from 'react'
import "./DropDown.css"
import {useNavigate} from "react-router-dom"

function DropDown(props) {
  const navigate = useNavigate()
  return (
    <div>
      <button class="favorite styled" type="button" onClick={()=>{
        if(props.data==="Customer Login"){
          navigate('/login')
        }else if(props.data==="New Customer Signin"){
          navigate('/signin')
        }
        else if(props.data==="Exit"){
          navigate('/')
        }
        else if(props.data==="exit"){
          alert("Exited Apllication Successfully")
        }
        else if(props.data==="Amount Deposit"){
          navigate('/deposit')
        }
        else if(props.data==="Amount Withdrawal"){
          navigate('/withdrawal')
        }
        else if(props.data==="Check Balance"){
          navigate('/balance')
        }
      }}>{props.data}</button>
    </div>
  )
}

export default DropDown