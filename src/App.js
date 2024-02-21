import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
// We will create these two pages in a moment
import HomePage from "./HomePage"; 
import CreateEmployeeForm from "./CreateEmployeeForm"; 
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/createemployeeform' element={<CreateEmployeeForm/>} />
    </Routes>
    </BrowserRouter>
  )

}