import React from 'react';
import {Link} from "react-router-dom"
import './Myfooter.css'


const Footer1 = () => {
    return ( 
        <ul className="mylist">
        <li >
            <Link className="text-light p-5" to="/">first subject</Link>
        </li>
        <li className="mt-4">
            <Link className="text-light p-5 " to="/">second subject</Link>
        </li>
        <li className="mt-4">
            <Link className="text-light p-5 " to="/">third subject</Link>
        </li>
        <li className="mt-4">
            <Link className="text-light p-5 " to="/">forth subject</Link>
        </li>
    </ul>
     );
}
 
export default Footer1;