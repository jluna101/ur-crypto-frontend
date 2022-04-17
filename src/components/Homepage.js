import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { binanceData } from '../data/binanceData.js';
import { coinbaseData } from '../data/coinbaseData.js';
import CryptoCarousel from './CryptoCarousel';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

function Homepage({signedIn, coinData, newsData}) {
    // console.log(coinData)
    const [newCoinbaseData, setNewCoinbaseData] = useState(coinbaseData[0])
    const [coinbaseChartOptions, setCoinbaseChartOptions] = useState(coinbaseData[1]);

    const [newBinanceData, setNewBinanceData] = useState(binanceData[0])
    const [binanceChartOptions, setBinanceChartOptions] = useState(coinbaseData[1]);

    return (
        <div className="text-center">
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
            <CryptoCarousel coinData={coinData} newsData={newsData} />
            <h2>Number of Crypto Users by Exchange</h2>
            <div>
                <Bar options={coinbaseChartOptions} data={newCoinbaseData} />
                <Bar options={binanceChartOptions} data={newBinanceData} />
            </div>
        </div>
    );
}

export default Homepage;