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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

function Homepage({signedIn}) {
    const [coinbaseData, setcoinbaseData] = useState({
        datasets:[],
    })
    const [binanceData, setBinanceData] = useState({
        datasets:[],
    })

    const [chartOptions, setChartOptions] = useState({});
    // data from https://www.businessofapps.com/data/coinbase-statistics/
    useEffect(() => {
        setcoinbaseData({
            labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
            datasets: [
                {
                    label: 'Users',
                    data: [1000000, 2000000, 5000000, 13000000, 22000000, 30000000, 35000000, 56000000, 89000000],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: 'rgba(53, 162, 235, 0.4',
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: 'Coinbase Users'
                }
            }
        })
    })
// data from https://www.businessofapps.com/data/binance-statistics/
    useEffect(() => {
        setBinanceData({
            labels: ['2017', '2018', '2019', '2020', '2021'],
            datasets: [
                {
                    label: 'Users',
                    data: [1500000, 1330000, 1650000, 21500000, 28600000, 30000000],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: 'rgba(53, 162, 235, 0.4',
                },
            ],
        });
    })


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
            <h2>Number of Crypto Users by Exchange</h2>
            <Bar options={chartOptions} data={coinbaseData} />
            <Bar options={chartOptions} data={binanceData} />
        </div>
    );
}

export default Homepage;