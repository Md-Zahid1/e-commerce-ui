import React from 'react'
import './css/LoginSignup.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
         <h1>Sign Up</h1>
         <div className='loginsignup-fields'>
          <input type='text' placeholder='your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='password' />
         </div> 
         <button>Contineu</button>
         <p className='loginsignup-login'>Already have an account? <span>Login here</span> </p>
         <div className='loginsignup-agree'>
            <input type='checkbox' name='' id=''/>
            <p>Buy Continuing, i agree to the term of use & privicy policy.</p>
         </div>
      </div>
    </div>
  )
}

export default LoginSignUp
