import '../Styles/App.css';
import ReusableForm from '../Components/Form';


export default function CreateEmployeeForm() {
  const formFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter Name' },
    { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter Age' },
    {name:'addressline1',label:'Address Line 1', type:'text', placeholder: '64 Zoo Lane'},
    {name:'addressline2',label:'Address Line 2', type:'text',placeholder:'Zoopington'},
    {name:'city/town',label:'City/Town', type:'text',placeholder: 'Chester'},
    {name:'country',label:'Country', type:'text',placeholder:'United Kingdom'},
    {name:'postcode',label:'Postcode',type:'text',placeholder:'TR3 3SS'},
    {name:'employmentstartdate',label: 'Employment Start Date',type:'date'},
    {name:'hasrighttowork',label:'Has Right To Work In UK', type:'checkbox'}
   ]
    const onSubmit = (event) => {      
      console.log(event);
    };    
  return (
    <div>
    <ReusableForm formTitle="Create Employee" onSubmit={onSubmit} fields={formFields}
    submitButtonText="Create"/>
    </div>
  );
}


