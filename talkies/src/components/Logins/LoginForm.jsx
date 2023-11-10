import React from 'react'
import './Login.css'
const LoginForm = (props) => {
    const{label,errorMessage,onChange,id,...inputProps}=props;
  return (
    <> 
      <div className="formInput">
        <label htmlFor="">{label}</label>
        <input {...inputProps} onChange={onChange}/>
      </div>
    </>
  )
}

export default LoginForm