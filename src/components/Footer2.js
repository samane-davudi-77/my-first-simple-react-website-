import React from 'react';
import img1 from '../assest/images/img-2.jpg'
import './Myfooter.css'

const Footer2 = () => {
    return ( 
        <ul className="mylist">
            <li>
                <img src={img1} className="myfooterimg" />
                <img src={img1} className="myfooterimg" />
                <img src={img1} className="myfooterimg" />
            </li>
            
        </ul>
     );
}
 
export default Footer2;