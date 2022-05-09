import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Switch from 'react-js-switch';
import Button from 'react-bootstrap/Button'


function Navbar({signedIn, handleSignout, userInfo, theme, toggleTheme}) {
    // Makes first letter of word Uppercase - NOT IN USE
    return (
        <div>
            {/* Signup Banner */}
            {(signedIn === false)&& 
            <div className='bg-primary pb-2 px-auto d-flex justify-content-center'>
                <Link to='/signup' className='text-white text-decoration-none'>
                    <p className='py-0 mt-1 mb-0'> Sign up for full access</p> 
                </Link>
            </div>}
        <nav className="bg-white text-black border-bottom border-grey pb-2 px-5">
            <div className="d-flex justify-content-between align-items-center">
            <Link to='/' className="text-decoration-none text-primary fs-3 fw-bold">urCrypto</Link>
            <Link to='/prices' className="text-decoration-none text-black">Prices</Link>
            <Link to='/news' className="text-decoration-none text-black">News</Link>
            {(signedIn === true) ? (
                <>
                    <Nav.Link className="text-decoration-none text-danger" onClick={handleSignout}>
                        Signout
                    </Nav.Link>
                </> ):(
                    <div className='d-flex align-items-center'>
                    <Link to='/signin' className="text-decoration-none text-black">Sign-in</Link>
                    <Link to='/signup' className="text-decoration-none text-black p-1"><Button variant='primary'>Sign-up</Button></Link>
                    </div>
                )}
                {/* <Switch Change={toggleTheme}/> */}
            </div>
            
        </nav>

        </div>
    );
}

export default Navbar;

