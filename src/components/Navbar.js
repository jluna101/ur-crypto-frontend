import React, { useState } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Switch from 'react-js-switch';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


function Navbar({signedIn, handleSignout, userInfo, theme, toggleTheme}) {
    // Makes first letter of word Uppercase - NOT IN USE
        // TESTING - DROPDOWN MENU 
    const sidebarData = [
        {
            title: 'Prices',
            link: '/prices',
        },
        {
            title: 'News',
            link: '/news',
        },
        {
            title: 'Sign In',
            link: '/sigin',
        },
        {
            title: 'Sign Up',
            link: '/signup',
        },
    ]
    const [nav, setNav] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setNav(!nav); 
    }
    const removeNavHome = (e) => {
        e.preventDefault()
        setNav(false)
    }
    return (
        <div>
            {/* Signup Banner */}
            {(signedIn === false)&& 
            <div className='bg-primary pb-2 px-auto d-flex justify-content-center'>
                <Link to='/signup' className='text-white text-decoration-none'>
                    <p className='py-0 mt-1 mb-0'> Sign up for full access</p> 
                </Link>
            </div>}
            <nav className="bg-white text-black border-bottom border-grey pb-2 px-5 w-100">
            <div className="d-flex justify-content-evenly align-items-center">
                <Link to='/' className="text-decoration-none text-primary fs-3 fw-bold logo">urCrypto</Link>
                <Link id='nav' to='/prices' className="text-decoration-none text-black ">Prices</Link>
                <Link id='nav' to='/news' className="text-decoration-none text-black ">News</Link>
            {(signedIn === true) ? (
                <>
                    <Nav.Link id='nav' className="text-decoration-none text-danger" onClick={handleSignout}>
                        Sign out
                    </Nav.Link>
                </> ):(
                    <div className='d-flex align-items-center'>
                        <Link id='nav' to='/signin' className="text-decoration-none text-black">Sign-in</Link>
                        <Link id='nav' to='/signup' className="text-decoration-none text-black p-1"><Button variant='primary'>Sign-up</Button></Link>
                    </div>
                )}
                {/* <Switch Change={toggleTheme}/> */}
                <button className='n-btn dropdown' onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
            </div>
            
        </nav>
            {/* TEST */} 
            <div className='dropdown'>
            {nav == true? 
                <div className='sidebar'>
                    <ul onClick={handleSubmit} className='sidebarList'>
                            <Link to='/prices' className='link'>
                                <li className='row' 
                                id={window.location.pathname == '/prices'? "active":""}
                                >Prices</li>
                            </Link>
                            <Link to='/news' className='link'>
                                <li className='row' 
                                id={window.location.pathname == '/news'? "active":""}
                                >News</li>
                            </Link>
                            {(signedIn == false)?
                            <> 
                            <Link to='/signin' className='link'>
                                <li className='row' 
                                id={window.location.pathname == '/signin'? "active":""}
                                >Sign In</li>
                            </Link>
                            <Link to='/signup' className='link'>
                                <li className='row' 
                                id={window.location.pathname == '/signup'? "active":""}
                                >Sign Up</li>
                            </Link> </>:<>
                            <Nav.Link className="text-decoration-none text-danger" onClick={handleSignout}>
                        Sign out
                    </Nav.Link></>}
                    </ul>
                </div>
                : <></>}
            </div>
            
        </div>
    );
}

export default Navbar;

