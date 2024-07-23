import React from 'react'
import "./SignIn.css"
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import instance from '../../../axios'

function SignIn() {
    const navigate = useNavigate()
    const[form,setForm] = useState('');
        
    
    const handler = async (e) =>{
        e.preventDefault()

        const signpaylod  =  {
            "name":form.name,
            "mobile":form.mobile,
            "address":form.address,
            "account_number":form.account_number,
        }
        const authpayload = {
            emailid:form.email,
            password:form.password,
        }
        var id
        try{
            await instance.post('auth/',authpayload).then((response)=>{
                if (response.data["status"]==='200'){
                    id = response.data["id"]
                    console.log(response.data)
                }
                else{
                    alert(response.data["msg"])
                }
                
            }).catch(e=>console.log(e))
        }catch(error){
            console.log(error)
        }
        
        try{
            await instance.post(`usersignin/${id}/`,signpaylod).then((response)=>{
                if(response.data["status"]==='200'){
                    console.log(response.data)
                    alert(response.data["msg"])
                    navigate('/')
                }
                else{
                    alert(response.data["msg"])
                }

            }).catch(e=>console.log(e))

        }catch(error){
            console.log(error)
        }
            
    }

    const handleInput = (e) =>{
        const {name,value} = e.target
        setForm(prevState=>({...prevState,[name]:value}))
    }
    
  return (
    <div>
        <form id="signup" onSubmit={handler}>

            <div className="header">
                <h3>Sign IN</h3>
                <p>You want to fill out this form</p>
            </div>

            <div className="sep"></div>
            <div className="inputs">
                <input type="text" name="name" placeholder="name" value={form.name} onChange={handleInput} autoFocus />
                <input type="number" name="mobile" placeholder="mobile" value={form.mobile} onChange={handleInput} autoFocus />
                <input type="email" name="email" placeholder="e-mail" value={form.email} onChange={handleInput} autoFocus />
                <input type="text" name="address" placeholder="address" value={form.address} onChange={handleInput} autoFocus />
                <input type="number" name="account_number" placeholder="account no." value={form.account_number} onChange={handleInput} autoFocus />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleInput} />
                <button id="submit" type='submit'>SIGN IN</button>
            </div>

        </form>
    </div>

  )
}

export default SignIn