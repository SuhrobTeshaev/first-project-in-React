import React from "react";
import classes from './header.module.css';

const Header = () => {
   return( <div className={classes.header}>
        <div className={classes.header_line}>
            <div>
                <a href="#">
                <img src="https://pngimg.com/d/batman_PNG41.png" alt="logo" />
                </a>
                </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contacts</a></li>
                <li><a href="#">search</a></li>
                <li><a href="#">sign in</a></li>
            </ul>
        </div>
    </div>
   )
}

export default Header;