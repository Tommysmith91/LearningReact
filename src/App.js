import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import HomePage from "./HomePage"; 
import CreateEmployeeForm from "./CreateEmployeeForm"; 
const App = () =>
{
  return (
    <BrowserRouter>
    <Navbar/>
    <main className="main-content">
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/createemployeeform' element={<CreateEmployeeForm/>} />
    </Routes>
    </main>
    </BrowserRouter>
  )
}
export default App;