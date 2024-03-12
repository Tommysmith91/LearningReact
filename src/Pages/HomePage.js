import React from "react";
import EmployeeService from '../ApiServices/EmployeeService';
import { useState,useEffect } from 'react';

export default function HomePage() {

   const [employees,setEmployees] = useState([]);
   const employeeService = EmployeeService();
   
   useEffect(() => {
    async function FetchEmployees(){
    try{

      const response = await employeeService.GetEmployees();
      setEmployees(response.data);
    }
    catch(error){
      console.log(error);
    }    
  }
  FetchEmployees();
   },[]);

    return (
      <div className='container'>
        <h1>Home </h1>
        <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
      </div>
    )
  } 
