import React from "react";
import { NavLink } from "react-router-dom";
import classes from './navbar.module.css';

const Navbar = () => {
 return (  
     <div className={classes.bar}>
        <ul>
            <li>
                <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                <NavLink to='/dialog'>Message</NavLink>
                </li>
                <li>
                <NavLink to='/users'>Users</NavLink>
                </li>
                <li>
                <a href="#">Groups</a>
                </li>
                <li>
                <a href="#">Music</a>
                </li>
        </ul>

    </div>
)}

export default Navbar;