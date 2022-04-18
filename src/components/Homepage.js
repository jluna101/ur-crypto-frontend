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
function Homepage({signedIn, coinData, newsData, theme}) {
    /* === Title Tag === */
    document.title = '| Homepage'
    /* Variables */
    const [newCoinbaseData, setNewCoinbaseData] = useState(coinbaseData[0])
    const [coinbaseChartOptions, setCoinbaseChartOptions] = useState(coinbaseData[1]);
    const [newBinanceData, setNewBinanceData] = useState(binanceData[0])
    const [binanceChartOptions, setBinanceChartOptions] = useState(binanceData[1]);

    return (
        <div className="text-center">
            <h1 className='primary mb-5 h3'>Welcome to urCrypto</h1>
            <p className='mb-5 lead'>With 300 million+ overall crypto users worldwide. urCrypto has you covered to stay ahead!</p>
            <CryptoCarousel coinData={coinData} theme={theme} newsData={newsData} />
            <h2 className='mb-5 mt-5'>Number of Crypto Users by Exchange</h2>
            <div>
                <Bar style={{ marginLeft: 150, marginRight: 150}} options={coinbaseChartOptions} data={newCoinbaseData} />
                <Bar style={{ marginLeft: 150, marginRight: 150}}  options={binanceChartOptions} data={newBinanceData} />
            </div>
        </div>
    );
}

export default Homepage;