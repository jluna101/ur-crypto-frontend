import React, { useEffect } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar({signedIn, handleSignout, userInfo}) {
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

            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="navbar-brand btn btn-outline-secondary" type="submit">Search</button>
            </form> */}
            </div>
        </nav>
    );
}

export default Navbar;

{/* <Link className="text-decoration-none" to='/'>urCrypto</Link>&nbsp;
<Link className="text-decoration-none" to='/prices'>Prices</Link>&nbsp;
<Link className="text-decoration-none" to='/news'>News</Link>&nbsp;
<Link className="text-decoration-none" to='/transactions'>Transactions</Link>&nbsp;
<Link className="text-decoration-none" to='/signin'>Sign-In </Link>&nbsp;
<Link className="text-decoration-none" to='/signup'>Sign-Up </Link>&nbsp; */}