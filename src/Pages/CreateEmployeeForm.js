import '../Styles/App.css';
import ReusableForm from '../Components/Form';


export default function CreateEmployeeForm() {
  const formFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter Name' },
    { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter Age' },
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


