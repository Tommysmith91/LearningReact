import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

 return (
   <header className="header">
     <nav className="nav container">
       <div
         className={`nav__menu`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>           
           <li className="nav__item">
             <NavLink
               to="/createemployeeform"
               className="nav__link"
             >
               Create Employee
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/favorite"
               className="nav__link"
                
             >
               Favorite
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/location"
               className="nav__link"
                
             >
               Location
             </NavLink>
           </li>
         </ul>       
        </div>
     </nav>
   </header>
 );
};


export default Navbar;