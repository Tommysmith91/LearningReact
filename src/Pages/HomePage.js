import React from "react";
import EmployeeService from '../ApiServices/EmployeeService';
import { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography,Button} from '@mui/material';

export default function HomePage() {

   const [employees,setEmployees] = useState([]);
   const employeeService = EmployeeService();
   const [deleted,setDeleted] = useState(false);

   
   
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
   },[deleted]);

   const handleDeletedEmployee = async(employeeId) => {
    try{
      await employeeService.DeleteEmployee(employeeId);
      setDeleted(true);
    }
    catch(error){
      console.log(error);
    }
   }

    return (
      <div className='container'>        
        <TableContainer component={Paper}>
            <Table aria-label="Employee table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Has Right To Work</TableCell>
                        <TableCell>Start Of Employment</TableCell>
                        <TableCell>Address Line 1</TableCell>
                        <TableCell>Address Line 2</TableCell>
                        <TableCell>City/Town</TableCell>
                        <TableCell>Postcode</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell>{employee.name}</TableCell>
                            <TableCell>{employee.age}</TableCell>
                            <TableCell>{employee.hasRightToWork ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{employee.startOfEmployment}</TableCell>
                            <TableCell>{employee.addressLine1}</TableCell>
                            <TableCell>{employee.addressLine2}</TableCell>
                            <TableCell>{employee.cityTown}</TableCell>
                            <TableCell>{employee.postcode}</TableCell>
                            <TableCell>{employee.country}</TableCell>
                            <TableCell><Button variant="contained" sx={{backgroundColor: '#FF0000',color:"#FFF"}} onClick={async () => { await handleDeletedEmployee(employee.id);}}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    )
  } 
