import React from 'react';
import { Link } from "react-router-dom";
import { Input } from 'antd';

function MainNav (props){
    const { Search } = Input;
    return (
        <li className="search_nav">
            <Link to="#"></Link>
            <Search size="large" prefix="🍎" suffix="manzana" placeholder="Search all..."/>
        </li>
    );
}

export default MainNav;