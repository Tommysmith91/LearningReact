import axios from 'axios'

const API_BASE_URL = 'localhost/'; //Just temp for now

const employeeService = axios.create({baseURL: API_BASE_URL});

export const PostEmployeeData = async (requestData) => {
    
        const response = await employeeService.post('',requestData)
        .then(response => {
            console.log("Successful Request");
        })
        .catch(error => {
            console.error("Request Failed");
        });
    
};