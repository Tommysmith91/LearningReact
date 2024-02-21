import { useState } from 'react';
import './App.css';

function JobApplicationHeader(){
  return (
    <h1>Job Application Form</h1>
  );
}
export default function CreateEmployeeForm() {
  const [formData,setFormData] = useState(
    {
      name:'',
      age:'',
      righttowork:false
    });
    const onSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
    };
    const handleChange = (event) => {
      const {name,value,type,checked} = event.target;
      setFormData(previousData => ({
        ...previousData,
        [name]: type === 'checkbox' ? checked : value
      }));

    }
  return (
    <div>
    <JobApplicationHeader />
    <form onSubmit={onSubmit}>
      <label htmlFor="Name">Name:</label><br/>
      <input type="text" name='name' id='name' value={formData.name} onChange={handleChange}/><br/>
      <label htmlFor="Age">Age:</label><br/>
      <input type="text" name='age' id='age' value={formData.age} onChange={handleChange}/><br/>
      <label htmlFor="RightToWorkCheckBox">Do you have UK Right To Work</label><br/>
      <input type="checkbox" name='righttowork' id='righttowork' checked={formData.righttowork} onChange={handleChange}/>
      <br/>
      <input type="submit"/>
    </form>
    </div>
  );
}
