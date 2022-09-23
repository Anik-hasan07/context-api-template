import React, { useContext } from 'react'
import { Context } from '../lib/Context'

const Profile = () => {
    const{userName}=useContext(Context)
  return (
    <div>
      <h2>Welcome Mr.</h2>
      <h2>{userName}</h2>
     
    </div>
  )
}

export default Profile
