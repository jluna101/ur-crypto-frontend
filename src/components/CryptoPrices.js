import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function CryptoPrices(props, {signedIn}) {
    const coinstat = props.coinData;
    const [cryptoData, setCryptoData] = useState(coinstat)
    const [cryptoSearch, setCryptoSearch] = useState('')
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    console.log(cryptoSearch)

    return (
        <div className="table-responsive">
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
                    }).slice(0,10).map((element, index) => (
                        <tr key={element.volume}>
                            <td>{element.rank}</td>
                            <td><img src={element.icon} alt={element.id}/></td>
                            <td>{element.symbol}</td>
                            <td>${integer(element.price)}</td>
                            <td>{element.priceChange1h}%</td>
                            <td>{element.priceChange1d}%</td>
                            <td>{element.priceChange1w}%</td>
                            <td>${integer(element.marketCap)}</td>
                            <td>${integer(element.volume)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoPrices;