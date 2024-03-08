import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AppBar,Toolbar,Typography,Button} from '@mui/material';
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
const Navbar = () => {

 return (
   <header className="header">
    <AppBar position="static">
      <Toolbar className="container">     
       <div
         className={`nav__menu`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               <Button variant="contained"><HomeIcon style={{marginRight:'8px'}}/>Home</Button>
             </NavLink>
           </li>           
           <li className="nav__item">
             <NavLink
               to="/createemployeeform"
               className="nav__link"
             >
              <Button variant="contained"><Person2Icon/>Create Employee</Button>
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/favorite"
               className="nav__link"                
             >
              <Button variant="contained">Favourite</Button>
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/location"
               className="nav__link"
                
             >
              <Button variant="contained">Contact Us</Button>
             </NavLink>
           </li>
         </ul>       
        </div>
     </Toolbar>
     </AppBar>
   </header>
 );
};


export default Navbar;