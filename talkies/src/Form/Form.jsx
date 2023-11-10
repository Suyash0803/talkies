import React from 'react'
import Forms from '../components/Forms/Forms'
import { useRef,useState } from 'react'
const Form = () => {
    const usernameRef=useRef()
    
    const [values,setValues]=useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmpassword:""
    });
    const inputs=[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be of 3 -16 characters",
            label:"username",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,
        },
        {
            id:2,
            name:"email",
            type:"text",
            placeholder:"email",
            errorMessage:"It should be valid email address",
            label:"email",
            required:true,
        },
        {
            id:3,
            name:"birthday",
            type:"date",
            placeholder:"birthday",  
            label:"birthday",
            required:true,
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"password",
            errorMessage:"Password should be of 8-20 characters",
            label:"password",
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
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(usernameRef)
        // const data=new FormData(e.target)

    }
    const onChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
  return (
    <>
    <div className="app">
        
   <form action="" onSubmit={handleSubmit}>
   <h1>Register</h1>
    {inputs.map((input)=>(
        <Forms key={input.id} {...input} value={values[input.name]} onChange={onChange} />
    ))}
    
  
    <button class="b1">Submit</button>
   </form>
   </div>
   </>
  )
}

export default Form