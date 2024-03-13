import axios from 'axios'
import { useState } from 'react';

function EmployeeService()
{
    const API_BASE_URL = 'https://localhost:7211/'; //Just temp for now

    const employeeService = axios.create({baseURL: API_BASE_URL});

    const [employee,setEmployee] = useState(null);

const CreateEmployee = async (newEmployee) => {
    try {
        const response = await employeeService.post('/employees', newEmployee);
        setEmployee(response.data);        
    } catch (error) {
        throw error;
    }
};
const DeleteEmployee = async(id) => {
    try{
        await employeeService.delete(`/employee/${id}`);        
    }catch(error){
        throw error;
    }
};
const GetEmployees = async () => {
    try
    {
       const response = await employeeService.get('/employees');
       console.log(response);
       return response;
       
    }
    catch(error){
        throw error;
    }
};
const UpdateEmployee = async (employeeForUpdate,id) => {
    try
    {
       const response = await employeeService.put(`/employees/${id}`,employeeForUpdate);
       console.log(response);
       return response;       
    }
    catch(error){
        throw error;
    }
};
const GetEmployee = async (id) => {
    try
    {
       const response = await employeeService.get(`/employees/${id}`);
       console.log(response);
       return response;       
    }
    catch(error){
        throw error;
    }
};

return {
    employee,
    CreateEmployee,
    DeleteEmployee,
    GetEmployees,
    UpdateEmployee,
    GetEmployee
}
}

export default EmployeeService;
