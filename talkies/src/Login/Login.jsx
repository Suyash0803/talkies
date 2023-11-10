import React, { useState } from 'react'
import Forms from '../components/Forms/Forms';
import LoginForm from '../components/Logins/LoginForm';

const Login = () => {
    const [values,setValues]=useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:""
    });
    const inputs=[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be of 3-16 characters",
            label:"username",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"It should be valid email address",
            label:"email",
            required:true,
        },
        {
            id:3,
            name:"birthday",
            type:"Date",
            placeholder:"Birthday",
            label:"birthday",
            required:true,
        },
        {
            id:4,
            name:"password",
            type:"Password",
            placeholder:"password",
            label:"password",
            errorMessage:"password should be of 8-16 characters including special characters and capital letters",
            pattern:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$",
            required:true,
        },
        {
            id:5,
            name:"ConfirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"Enter the password entered above",
            label:"ConfirmPassword",
            pattern:values.password,
            required:true,
        }
        
    ]
    const onChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
  return (
    <>
      <div className="app">
        <form action="">
            <h1>Login</h1>
            {inputs.map((input)=>(
                <LoginForm key={input.id}{...input} value={values[input.name]} onChange={onChange}/>
            ))}
            <button className='b1'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login