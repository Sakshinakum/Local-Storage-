import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const Login = ({onLogin}) => {

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    
          if(email === 'admin@admin.com' && password === 'Admin@123'){
            localStorage.setItem('isAuthenticated', 'true');
            onLogin();
            alert("Login Successfully");
            navigate("/dashboard");
          }
          else{
            alert("Invalid user and password");
          }
  }
      
  return (
    <div className='login-page'>
      <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
          <h2>login</h2>
          <input  {...register("email", 
            { 
              required: {value: true, message: 'This field is required'}, 
              pattern: {value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ , message: 'At least one character ,followed by the “@” symbol, then the domain part'}
            })} 
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email-adress' type='email'/>
            {errors.email && <p className='error-msg'>{errors.email.message}</p>}

          <input {...register("password", 
            { 
              required: {value: true, message: 'This field is requird'},
              pattern:  {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/, message: 'At least 8 characters, one uppercase letter, one lowercase letter , one digit, one special character'}

            })} 
            value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type='password' />
            {errors.password && <p className='error-msg'>{errors.password.message}</p>}
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login