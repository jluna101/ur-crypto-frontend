import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpModal from './SignUpModal';

function CryptoPrices(props) {
    /* === Title Tag === */
    document.title = '| Prices'
    /* Variables */
    const coinstat = props.coinData;
    const [cryptoData, setCryptoData] = useState(coinstat)
    const [cryptoSearch, setCryptoSearch] = useState('')
    const [signedIn, setSignedIn] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('token')){
          setSignedIn(true)
        }
      }, []);

    // Adding commas to number ex. 1,000
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    return (
        <div className="row justify-content-center table-responsive">
            <div className="text-center">
                <h1 className="text-center">Search a Currency</h1>
                <input 
                    type="text"
                    placeholder='Search..'
                    className="text-center"
                    onChange={event => setCryptoSearch(event.target.value)}
                />
            </div>
            <table className="table tablie-light table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="opacity-0">.</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>1h</th>
                        <th>24hr</th>
                        <th>7d</th>
                        <th>Market Cap</th>
                        <th>24h Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData.filter((element) => {
                        if (cryptoSearch === ''){
                            return element
                        } else if (element.name.toLowerCase().includes(cryptoSearch.toLowerCase())){
                            return element
                        }
                    }).slice(0,30).map((element, index) => (
                            
                            <tr key={element.volume}>
                                <td>{element.rank}</td>
                                <td><img height='40'src={element.icon} alt={element.id}/></td>
                                <td><Link style={{ textDecoration: 'none' }} to={`/prices/${element.name}`}>{element.symbol}</Link></td>
                                <td>{(signedIn === false)? <div style={{ filter: 'blur(3px)', pointerEvents: 'none' }}>${integer(element.price)}</div>:<div>${integer(element.price)}</div>}</td>
                                <td>{element.priceChange1h}%</td>
                                <td>{element.priceChange1d}%</td>
                                <td>{element.priceChange1w}%</td>
                                <td>{(signedIn === false)? <div style={{ filter: 'blur(3px)', pointerEvents: 'none' }}>${integer(element.marketCap)}</div>:<div>${integer(element.marketCap)}</div>}</td>
                                <td>{(signedIn === false)? <div style={{ filter: 'blur(3px)', pointerEvents: 'none' }}>${integer(element.volume)}</div>:<div>${integer(element.volume)}</div>}</td>
                            </tr>
                            
                    ))}
                </tbody>
            </table>
            { signedIn === false? <SignUpModal/>: null }
        </div>
    );
}

export default CryptoPrices;