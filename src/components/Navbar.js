import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleclick = () => {
        setClick(!click);
    }
    const closeMobilemenu = () => {
        setClick(false);
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton()
        console.log(showButton)
    }, [])
    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Link to="/login" className="navbar-brand text-light" onClick={closeMobilemenu} >
                        ثبت نام
                    </Link>
                    <Link to="/" className="navbar-logo" onClick={closeMobilemenu}>
                        بلاگ من <i className="fab fa-typo3" />
                    </Link>

                    <div className="menu-icon" onClick={handleclick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : ' nav-menu'}>

                        <li className="nav-item">
                            <Link to="/signup" className="nav-links" onClick={closeMobilemenu} >
                                ورود</Link>

                        </li>

                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobilemenu} >
                                محصولات
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-links" onClick={closeMobilemenu} >
                                گالری
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobilemenu} >
                                خانه
                            </Link>
                        </li>

                    </ul>
                </div>

            </nav>

        </>
    )
}

export default Navbar;