import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import instance from '../../../axios';

function Login() {
    const navigate = useNavigate()
    const[auth,setAuth] = useState('');

    const handler = async (e)=>{
        e.preventDefault()
        const authpayload = {
            "emailid":auth.email,
            "password":auth.password,
        }
        try{
            const response = await instance.post(`userlogin/`,authpayload)
            if(response.data["status"]==='200'){
                const token = response.data["token"]
                alert(response.data["msg"])
                navigate('/balance')
            }else{
                alert(response.data["msg"])
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleInput = (e) =>{
        const{name,value} = e.target
        setAuth(prevState=>({...prevState,[name]:value}))
    }
  return (
    <div>
        <form id="signup" onSubmit={handler}>

            <div class="header">
                <h3>LOGIN</h3>
            </div>

            <div class="sep"></div>

            <div class="inputs">
                <input type="email" name="email" placeholder="e-mail" value={auth.name} onChange={handleInput}autoFocus />
                <input type="password" name="password" value={auth.password} onChange={handleInput} placeholder="Password" />
                <button id="submit" type="submit" >LOGIN</button>
            </div>

        </form>
    </div>
  )
}

export default Login