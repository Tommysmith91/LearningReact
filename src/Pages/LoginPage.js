import React, { useState } from 'react';
import '../Styles/LoginPage.css';
import ReusableForm from '../Components/Form';

export default function LoginPage()
{    
   const formFields = [
    {  name: 'email', label: 'Email address', type: 'email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
   ]
   const onSubmit = (event) => {    
    console.log(event); 
    }
    return (
    <div className="login-page">  
    <ReusableForm formTitle="Login" fields={formFields} onSubmit={onSubmit} submitButtonText="Login" initialData={{}}/>
    </div>
    )
}