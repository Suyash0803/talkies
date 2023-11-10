import React from 'react'
import './Form.css'
const Forms = (props) => {
  const {label,errorMessage,onChange,id,...inputProps}=props;
  return (
    <>
    <div className="formInput">
     <label htmlFor="">{label}</label>
     <input {...inputProps} onChange={onChange}/>
    </div>
 </>
  )
}

export default Forms