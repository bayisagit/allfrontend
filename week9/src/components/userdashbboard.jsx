import React from 'react'
import usenaviga
const userdashbboard = () => {
  return (
    <div>
        <h2>user dashboard</h2>
        <p>welcome user you have limited access</p>
        <button onClick={()=>{logout();navigate("/login");}}>Logout</button>
    </div>
  )
}

export default userdashbboard