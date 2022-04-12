import React from 'react';
import { useEffect, useState } from 'react';

function CryptoPrices(props) {
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
        fetch('https://api.coinstats.app/public/v1/coins')
        .then((res) => res.json())
        .then(data => setCryptoData(data.coins))
        .catch(console.error);
        }, []);


    return (
        <div>
            <h1>Cryptocurrency Prices</h1>

            <table>
                <thead>
                    <tr>
                        <th className="opacity-0">.</th>
                        <th>Coin</th>&nbsp;
                        <th>Price</th>&nbsp;
                        <th>1h</th>&nbsp;
                        <th>24hr</th>&nbsp;
                        <th>7d</th>&nbsp;
                        <th>Market Cap</th>&nbsp;
                        <th>24h Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData.slice(0,10).map((element, index) => (
                    <tr>
                        <td><img  className="w-50 p-3" src={element.icon} alt="" /></td>
                        <td>{element.symbol}</td>&nbsp;
                        <td>{element.price}</td>&nbsp;
                        <td>{element.priceChange1h}</td>&nbsp;
                        <td>{element.priceChange1d}</td>&nbsp;
                        <td>{element.priceChange1w}</td>&nbsp;
                        <td>{element.marketCap}</td>&nbsp;
                        <td>{element.volume}</td>&nbsp;
                    </tr>
                    ))}
                </tbody>
            </table>

                    







        </div>
    );
}

export default CryptoPrices;