import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage"; 
import CreateEmployeeForm from "./Pages/CreateEmployeeForm"; 
import LoginPage from "./Pages/LoginPage";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () =>
{
  return (
    <BrowserRouter>
    <Navbar/>
    <main className="main-content" data-testid="main-content">
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