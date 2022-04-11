import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <section>
                <Link className="text-decoration-none" to='/'>urCrypto</Link>&nbsp;
                <Link className="text-decoration-none" to='/prices'>Prices</Link>&nbsp;
                <Link className="text-decoration-none" to='/news'>News</Link>&nbsp;
                <Link className="text-decoration-none" to='/transactions'>Transactions</Link>&nbsp;
                <Link className="text-decoration-none" to='/signin'>Sign-In </Link>&nbsp;
                <Link className="text-decoration-none" to='/signup'>Sign-Up </Link>&nbsp;
            </section>
        </div>
    );
}

export default Navbar;