import {Link} from 'react-router-dom'
export default function HomePage() {
    return (
      <div className='container'>
        <h1>Home </h1>
        <p>
          <Link to=''>Home</Link>
          <Link to='/CreateEmployeeForm'>Create Employee</Link>
        </p>
      </div>
    )
  } 
