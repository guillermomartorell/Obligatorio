import React from 'react';
import { Link } from "react-router-dom";
import { Input } from 'antd';

function MainNav() {
    return (
        <li className="search_nav">
            <Input size="large" prefix={<Link to="/"/>} placeholder="Search all..."/>
        </li>
    );
}

export default MainNav;