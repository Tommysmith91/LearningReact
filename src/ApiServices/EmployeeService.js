import axios from 'axios'
import { useState } from 'react';

function EmployeeService()
{
    const API_BASE_URL = 'https://localhost:7211/'; //Just temp for now

    const employeeService = axios.create({baseURL: API_BASE_URL});

    const [employee,setEmployee] = useState(null);
    const [error,setError] = useState("");

const CreateEmployee = async (newEmployee) => {
    try {
        const response = await employeeService.post('/employees', newEmployee);
        return setEmployee(response.data);
    } catch (error) {
        setError('Error creating employee')
    }
};


return {
    employee,
    error,
    CreateEmployee
}
}

export default EmployeeService;
