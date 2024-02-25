import React, { useState } from 'react';
import '../Styles/LoginPage.css';

export default function LoginPage()
{    
   const [loginData,setLoginData] = useState({
    email: '',
    password: ''
   });
   const onSubmit = (event) => {
    event.preventDefault(); 
    console.log(loginData); 
    }
    const handleChange = (event) => {
        const {name,value} = event.target;
        setLoginData(previousData => ({
          ...previousData,
          [name]: value
        }))
    }
    return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input autoFocus type="email" className="form-control" name="email" id="email" placeholder="Enter email" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" onChange={handleChange}/>
        </div>
        <button type="submit" className="login-btn">Login</button>
    </form>
    </div>
    )
}