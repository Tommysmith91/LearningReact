import { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../Styles/App.css';
import 'react-datepicker/dist/react-datepicker.css'

export default function CreateEmployeeForm() {
  const [formData,setFormData] = useState(
    {
      name:'',
      age:'',
      role:'',
      righttowork:false,
      date: new Date()
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
    const handleDateChange= (date) => {
      setFormData(previousData => ({
        ...previousData,
        date:date
      }));
    }
  return (
    <div class="login-container">
    <h2>Create Employee</h2>    
    <form onSubmit={onSubmit}>
      <div class="form-group">
      <label htmlFor="Name">Name:</label>
      <input className="form-control" type="text" name='name' id='name' value={formData.name} onChange={handleChange}/>
      </div>
      <div class="form-group">
      <label htmlFor="Age">Age:</label>
      <input className="form-control" type="text" name='age' id='age' value={formData.age} onChange={handleChange}/>
      </div>
      <div class="form-group">
      <label htmlFor="EmployeeRole">Role:</label>
      <select className="form-control" type="text" name='role' id='role' value={formData.role} onChange={handleChange}>
      <option value="">Select Role</option>
        <option value="administrator">Administrator</option>
        <option value="manager">Manager</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="hr">HR</option>
      </select>
      </div>
      <div class="form-group">
      <label htmlFor="StartDate">Start Date:</label>
      <DatePicker className="form-control" id="datepicker" onChange={handleDateChange} dateFormat="dd/MM/yyyy" placeholderText="Select A Date" selected={formData.date}/>
      </div>
      <div class="form-group">
      <label htmlFor="RightToWorkCheckBox">Do you have UK Right To Work</label>
      <input className="form-control" type="checkbox" name='righttowork' id='righttowork' checked={formData.righttowork} onChange={handleChange}/>
      </div>      
      <button type="submit" className="login-btn">Submit</button>      
    </form>
    </div>
  );
}


