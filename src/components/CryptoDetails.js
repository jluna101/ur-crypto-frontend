import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SignUpModal from './SignUpModal';

function CryptoDetails(props) {
    /* Variables */
    const { id } = useParams();
    const [coin, setCoin] = useState([])
    /* === Title Tag === */
    document.title = `| ${id} Details`
    const [signedIn, setSignedIn] = useState(false)
    // Adding commas to number ex. 1,000
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    // Turns integer to green or red depending on whether it's positive or negative
    function numColor(num){
        return num < 0 ? <th className="text-success">{num}%</th>:<th className="text-danger">{num}%</th>
    }
    useEffect(() => {
        if (localStorage.getItem('token')){
            setSignedIn(true)
        }
    }, []);
    // Calling Crypto API
    useEffect(() => {
        fetch(`https://api.coinstats.app/public/v1/coins/${id.toLowerCase()}`)
        .then((res) => res.json())
        .then(data => setCoin(data.coin))
        .catch(console.error);
        }, []);
        
    return (
        <div className="row justify-content-center">
            {signedIn === false ? 
            <div style={{ filter: 'blur(2.5px)', pointerEvents: 'none' }} className="text-center">
            <img src={coin.icon} alt="" />
            <h1>{coin.name}'s Market Summary</h1>
            <h2>Price: ${integer(coin.price)}</h2>
            <table className="table tablie-light table-hover">
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>{(coin.rank)}</th>
                    </tr>
                    <tr>
                        <th>1 Hour Change</th>
                        {numColor(coin.priceChange1h)}
                    </tr>
                    <tr>
                        <th>24 Hour Change</th>
                        {numColor(coin.priceChange1d)}
                    </tr>
                    <tr>
                        <th>1 Week Change</th>
                        {numColor(coin.priceChange1w)}
                    </tr>
                    <tr>
                        <th>Market Cap</th>
                        <th>${integer(coin.marketCap)}</th>
                    </tr>
                    <tr>
                        <th>24h Trading Volume</th>
                        <th>${integer(coin.volume)}</th>
                    </tr>
                    <tr>
                        <th>Total Supply Mined</th>
                        <th>{(((coin.availableSupply/coin.totalSupply)*100).toFixed(2))}%</th>
                    </tr>
                    <tr>
                        <th>Circulating Supply</th>
                        <th>{integer(coin.availableSupply)} {coin.symbol}</th>
                    </tr>
                    <tr>
                        <th>Max Suppy</th>
                        <th>{integer(coin.totalSupply)} {coin.symbol}</th>
                    </tr>

                </thead>
            </table>
            <a href={coin.twitterUrl} className="text-primary" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
            <a href={coin.websiteUrl} target="_blank" rel="noreferrer noopener">Website</a>
            </div>
            : 
            <div className="text-center">
            <img src={coin.icon} alt="" />
            <h1>{coin.name}'s Market Summary</h1>
            <h2>Price: ${integer(coin.price)}</h2>
            <table className="table tablie-light table-hover">
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>{(coin.rank)}</th>
                    </tr>
                    <tr>
                        <th>1 Hour Change</th>
                        {numColor(coin.priceChange1h)}
                    </tr>
                    <tr>
                        <th>24 Hour Change</th>
                        {numColor(coin.priceChange1d)}
                    </tr>
                    <tr>
                        <th>1 Week Change</th>
                        {numColor(coin.priceChange1w)}
                    </tr>
                    <tr>
                        <th>Market Cap</th>
                        <th>${integer(coin.marketCap)}</th>
                    </tr>
                    <tr>
                        <th>24h Trading Volume</th>
                        <th>${integer(coin.volume)}</th>
                    </tr>
                    <tr>
                        <th>Total Supply Mined</th>
                        <th>{(((coin.availableSupply/coin.totalSupply)*100).toFixed(2))}%</th>
                    </tr>
                    <tr>
                        <th>Circulating Supply</th>
                        <th>{integer(coin.availableSupply)} {coin.symbol}</th>
                    </tr>
                    <tr>
                        <th>Max Suppy</th>
                        <th>{integer(coin.totalSupply)} {coin.symbol}</th>
                    </tr>

                </thead>
            </table>
            <a href={coin.twitterUrl} className="text-primary" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
            <a href={coin.websiteUrl} target="_blank" rel="noreferrer noopener">Website</a>
            </div>
            }
            { signedIn === false? <SignUpModal/>: null }
        </div>
    );
}

export default CryptoDetails;