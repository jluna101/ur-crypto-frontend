import React from 'react';
import { Link } from 'react-router-dom';

function Homepage({signedIn}) {
    return (
        <div>
            <h1>Welcome to urCrypto!</h1>
            <div>
                Expore your favorite cryptocurrencies and see how they're doing.&nbsp; 
                <Link to ='/prices' >
                    <button type="button" className="btn btn-primary">See Prices</button>
                </Link> 
            </div>
            <div>Stay on top of the latest crypto news in real time! &nbsp;  
                <Link to ='/news' >
                    <button type="button" className="btn btn-primary">See News</button>
                </Link> 
            </div>
        </div>
    );
}

export default Homepage;