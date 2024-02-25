import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage"; 
import CreateEmployeeForm from "./Pages/CreateEmployeeForm"; 
import LoginPage from "./Pages/LoginPage";
const App = () =>
{
  return (
    <BrowserRouter>
    <Navbar/>
    <main className="main-content">
    <Routes>
      <Route exact path='/' element={<LoginPage/>}/>
      <Route path='/homepage' element={<HomePage/>} />
      <Route path='/createemployeeform' element={<CreateEmployeeForm/>} />
      
    </Routes>
    </main>
    </BrowserRouter>
  )
}
export default App;