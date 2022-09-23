import React, { useContext } from 'react'
import { Context } from '../lib/Context'

const Login = () => {
    const{setuserName,setShowProfile}=useContext(Context)

  return (
    <div>
      <input type="text" placeholder="enter your name" onChange={(e)=>{
        setuserName(e.target.value)

      }}/><br></br><br></br>
      <input type="text" placeholder="password"/><br></br> <br></br>
      <button onClick={()=>{
        setShowProfile(true)
      }}>Login</button>
    </div>
  )
}

export default Login
