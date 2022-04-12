import React from 'react';
import { useEffect, useState } from 'react';

function CryptoPrices(props) {
    const [cryptoData, setCryptoData] = useState([])

    function integer(num){
        return parseInt((num).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  

    useEffect(() => {
        fetch('https://api.coinstats.app/public/v1/coins')
        .then((res) => res.json())
        .then(data => setCryptoData(data.coins))
        .catch(console.error);
        }, []);


    return (
        <div className="table-responsive">
            {/* <h1>Cryptocurrency Prices</h1> */}

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
                    {cryptoData.slice(0,10).map((element, index) => (
                        <tr key={element.volume}>
                            <td>{element.rank}</td>
                            <td><img src={element.icon} alt={element.id}/></td>
                            <td>{element.symbol}</td>
                            <td>{integer(element.price)}</td>
                            <td>{integer(element.priceChange1h)}</td>
                            <td>{integer(element.priceChange1d)}</td>
                            <td>{integer(element.priceChange1w)}</td>
                            <td>{integer(element.marketCap)}</td>
                            <td>{integer(element.volume)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

                    







        </div>
    );
}

export default CryptoPrices;