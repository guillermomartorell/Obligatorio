
import React from 'react';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer>
            <ul>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Sitemap</Link></li>
                <li><Link to="#">All rights reserved to P@izo Publishing, LLC.</Link></li>
                <li><Link to="#">Powered by Manzana ®</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;