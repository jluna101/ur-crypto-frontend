import React, { useState } from 'react';
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
    /* === Title Tag === */
    document.title = '| Homepage'
    /* Variables */
    const [newCoinbaseData, setNewCoinbaseData] = useState(coinbaseData[0])
    const [coinbaseChartOptions, setCoinbaseChartOptions] = useState(coinbaseData[1]);
    const [newBinanceData, setNewBinanceData] = useState(binanceData[0])
    const [binanceChartOptions, setBinanceChartOptions] = useState(coinbaseData[1]);

    return (
        <div className="text-center">
            <h1>Welcome to urCrypto!</h1>
            <h3>The future is here</h3>
            <p>With over 300 million crypto users worldwide urCrypto has you covered to stay ahead!</p>
            <CryptoCarousel coinData={coinData} newsData={newsData} />
            <h2>Number of Crypto Users by Exchange</h2>
            <div>
                <Bar style={{ marginLeft: 150, marginRight: 150}} options={coinbaseChartOptions} data={newCoinbaseData} />
                <Bar style={{ marginLeft: 150, marginRight: 150}}  options={binanceChartOptions} data={newBinanceData} />
            </div>
        </div>
    );
}

export default Homepage;