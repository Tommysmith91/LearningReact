import '../Styles/App.css';
import ReusableForm from '../Components/Form';
import EmployeeService from '../ApiServices/EmployeeService';
import { useState } from 'react';


export default function CreateEmployeeForm() {
  const formFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter Name' },
    { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter Age', value: 0 },
    {name:'addressline1',label:'Address Line 1', type:'text', placeholder: '64 Zoo Lane'},
    {name:'addressline2',label:'Address Line 2', type:'text',placeholder:'Zoopington'},
    {name:'citytown',label:'City/Town', type:'text',placeholder: 'Chester'},
    {name:'country',label:'Country', type:'text',placeholder:'United Kingdom'},
    {name:'postcode',label:'Postcode',type:'text',placeholder:'TR3 3SS'},
    {name:'startofemployment',label: 'Employment Start Date',type:'date'},
    {name:'hasrighttowork',label:'Has Right To Work In UK', type:'checkbox'}
   ]
   const [resultMessage,setResultMessage] = useState('');
   const employeeService = EmployeeService();
   
  
   const onSubmit = async (event) => {
    try{
      console.log(event);
      await employeeService.CreateEmployee(event);
      setResultMessage(<p style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>Employee Successfully Created!</p>);
    }
    catch(error){
      setResultMessage(<p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Failed To Create Employee!</p>);
    }          
      
    };    
  return (
    <div>
      {resultMessage && <p>{resultMessage}</p>}
    <ReusableForm formTitle="Create Employee" onSubmit={onSubmit} fields={formFields}
    submitButtonText="Create" initialData={{}}/>
    </div>
  );
}


