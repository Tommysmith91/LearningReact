import React from 'react'
import { useState,useEffect } from 'react';
import {Button, Modal,Box,Typography} from '@mui/material';
import ReusableForm from './Form';
import EmployeeService from '../ApiServices/EmployeeService';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const formFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter Name' },
    { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter Age', value: 0 },
    {name:'addressLine1',label:'Address Line 1', type:'text', placeholder: '64 Zoo Lane'},
    {name:'addressLine2',label:'Address Line 2', type:'text',placeholder:'Zoopington'},
    {name:'cityTown',label:'City/Town', type:'text',placeholder: 'Chester'},
    {name:'country',label:'Country', type:'text',placeholder:'United Kingdom'},
    {name:'postcode',label:'Postcode',type:'text',placeholder:'TR3 3SS'},
    {name:'startOfEmployment',label: 'Employment Start Date',type:'date'},
    {name:'hasRightToWork',label:'Has Right To Work In UK', type:'checkbox'}
   ]
function EmployeeEditModal(idObject){
    const [showModal,setShowModal] = useState(false);
    const employeeService = EmployeeService();
    const [employeeData,setEmployeeData] = useState(null);
    const {id} = idObject;
    useEffect(() => {
        let isMounted = true;
        
        async function fetchEmployeeData(){
            try{
                const response = await employeeService.GetEmployee(id);
                setEmployeeData(response.data);
            }
            catch(error){
                console.log(error);
            }
            
        };      
        if(showModal && id){
            fetchEmployeeData();
        }
        return () => {
            isMounted = false;
        }
    },[showModal,id]);

    function displayEditModal(){
        setShowModal(!showModal); 
        console.log(showModal)
    };
    function onSubmit(){

    };
    
    return(
    <>
    <Button variant="contained" onClick={displayEditModal}>Edit</Button>
    {showModal && employeeData &&
    (
    <Modal open={showModal}onClose={displayEditModal}>
        <Box sx={style}>            
            <ReusableForm formTitle="Edit Employee" onSubmit={onSubmit} fields={formFields}
    submitButtonText="Update" initialData={employeeData}/>
        </Box>
        </Modal>
   
    )}
    </>
    );
};


export default EmployeeEditModal;