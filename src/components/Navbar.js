import React, { useEffect, useState } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Switch from 'react-js-switch';

function Navbar({signedIn, handleSignout, userInfo, theme, toggleTheme}) {
    function uppercaseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to='/' className="text-decoration-none"><a className="navbar-brand">urCrypto</a></Link>
            <Link to='/prices' className="text-decoration-none"><a className="navbar-brand " >Prices</a></Link>
            <Link to='/news' className="text-decoration-none"><a className="navbar-brand">News</a></Link>
            <Link to='/transactions' className="text-decoration-none"><a className="navbar-brand">Transactions</a></Link>
            {userInfo !== null ? (
							<NavItem className="navbar-brand">
								Welcome {uppercaseFirstLetter(userInfo.username)}!
							</NavItem>
						): <></>}
            {(signedIn === true) ? (
                <><Nav.Link className="text-decoration-none" onClick={handleSignout}>Signout</Nav.Link></>
            ):( 
            <>
            <Link to='/signin' className="text-decoration-none"><a className="navbar-brand">Sign-in</a></Link>
            <Link to='/signup' className="text-decoration-none"><a className="navbar-brand">Sign-up</a></Link>
            </>
            )}
            <Switch className="navbar-brand" onChange={toggleTheme}/>

            </div>
        </nav>
    );
}

export default Navbar;

