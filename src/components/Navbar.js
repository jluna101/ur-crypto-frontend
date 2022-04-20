import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Switch from 'react-js-switch';


function Navbar({signedIn, handleSignout, userInfo, theme, toggleTheme}) {
    function uppercaseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid ">
            <Link to='/homepage' className="text-decoration-none navbar-brand">urCrypto</Link>
            <Link to='/prices' className="text-decoration-none navbar-brand">Prices</Link>
            <Link to='/news' className="text-decoration-none navbar-brand">News</Link>
            {userInfo !== null ? (
							<NavItem className="navbar-brand">
								Welcome {uppercaseFirstLetter(userInfo.username)}!
							</NavItem>
						): <></>}
            {(signedIn === true) ? (
                <><Nav.Link className="text-decoration-none" onClick={handleSignout}>Signout</Nav.Link></>
                ):( 
                <>
                    <Link to='/' className="text-decoration-none navbar-brand">Sign-in</Link>
                    <Link to='/signup' className="text-decoration-none navbar-brand">Sign-up</Link>
                </>
                )}
            <Switch onChange={toggleTheme}/>
            </div>
        </nav>
    );
}

export default Navbar;

