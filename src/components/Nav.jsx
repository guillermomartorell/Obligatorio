import React from 'react';
import MainNav from './MainNav'
import {
    Link,
    useLocation
  } from "react-router-dom";

function Nav (props){
    const location = useLocation();
    let navSwitch = ""
    if (location.pathname === '/'){
        navSwitch = <MainNav/>
    }

    
    return (
    <nav className="mainNav">
    <ul>
        <li>
            <Link className="home" to="#"></Link>
        </li>
        {navSwitch}
        <li className="nav_profile">
            <img src="./img/avatar.png" alt="" className="profile_pic" width="100%" height="100%"/>
            <span className="profile_name">The_g_m</span>
            <ul className="profile_drop">
                <li><Link className="droplink red" to='#'>Profile</Link></li>
                <li><Link to='#' className="droplink green">Campaigns</Link></li>
                <li><Link to='#' className="droplink orange">Sign Out</Link></li>
            </ul>
        </li>
    </ul>
    </nav>
    );
}

export default Nav;