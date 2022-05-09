import React, { useState, useEffect } from 'react';
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
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)
function Homepage({signedIn, setSignedIn, coinData, newsData, theme}) {
    console.log('Homepage')
    /* === Title Tag === */
    document.title = '| Homepage'
    /* Variables */
    const [newCoinbaseData, setNewCoinbaseData] = useState(coinbaseData[0])
    const [coinbaseChartOptions, setCoinbaseChartOptions] = useState(coinbaseData[1]);
    const [newBinanceData, setNewBinanceData] = useState(binanceData[0])
    const [binanceChartOptions, setBinanceChartOptions] = useState(binanceData[1]);
    useEffect(() => {
        if (localStorage.getItem('token')){
        setSignedIn(true)
        }
    }, []);
    // Adding commas to number ex. 1,000
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    // Turns integer green/red depending on whether it's positive or negative
    function numColor(num){
        return num > 0 ? <p className="text-success pt-1">{num}%</p>:<p className="text-danger pt-1">{num}%</p>
    }
    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };
    // News displaying on carousel - filter generic images from bloomberg
    const newsItems = newsData.filter((element) => {
        if (element.image !== 'https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png'){
            return element
        }
        }).slice(0,5).map((newsData) => {
            return (
                <div id={theme} >
                    { signedIn === false ?
                    <Link id='link' to='/news'>
                        <img 
                        src={newsData.image}
                        alt={newsData.headline}
                        height='80'
                        className='shadow-lg'
                        style={{ marginBottom: 10, borderRadius: 5}}/>
                        <p className='text-muted px-2 hover'>{newsData.headline}</p>
                    </Link>
                    :
                        <a id='link'
                            href={newsData.url}
                            target="_blank"
                            rel="noreferrer noopener">
                        <img 
                            src={newsData.image}
                            alt={newsData.headline}
                            height='80'
                            className='shadow-lg hover'
                            style={{ marginBottom: 10}}/>
                        <p id={theme} className='hover text-muted px-2'>{newsData.headline}</p>
                    </a>}
                </div>
            )
        })
        // Coins to display on carousel
    const coinItems = coinData.filter((element) => {
        if (element.price > 1.1){
            return element
        }
        }).slice(0,10).map((coinData) => {
            return (
                <Link id='link' to={`/prices/${coinData.name}`}>
                    <img 
                    src={coinData.icon}
                    alt={coinData.name}
                    height='80'
                    style={{ marginBottom: 10}}
                    className='hover'
                    />
                    <p id={theme} className='hover text-muted'>{coinData.symbol}{numColor(integer(coinData.priceChange1d))}</p>
                </Link>
                )
        })
    return (
        <div className="text-center">
            <h1 className='primary my-5 h1'>Welcome to urCrypto</h1>
            <p className='mb-5 lead'>With 300 million+ overall crypto users worldwide. urCrypto has you covered to stay ahead!</p>
            <h2 id={theme} className='mt-5 hover'>24hr Crypto Price Change </h2>
            <p className='mb-5'>For additional financial metrics&nbsp;
                <Link to='/prices' style={{textDecoration: 'none'}}>
                    read more
                </Link>
            .</p>
            <AliceCarousel 
                mouseTracking
                infinite
                autoPlayInterval={0}
                animationDuration={2500}
                disableDotsControls
                    responsive={responsive}
                    autoPlay
                    items={coinItems}
                disableButtonsControls
                className='hover'
            />
            <h2 id={theme} className='mt-5 hover'>Trending News</h2>
            <p className='mb-5'>Be the first to see trending news by clicking&nbsp;
                    <Link style={{textDecoration: 'none'}} to='/news'>
                    here
                    </Link>
            .</p>
            <AliceCarousel 
                mouseTracking
                infinite
                autoPlayInterval={2000}
                animationDuration={4000}
                disableDotsControls
                    responsive={responsive}
                    autoPlay
                    items={newsItems}
                disableButtonsControls
                className='hover'
            />
            <h2 className='mb-5 mt-5'>Number of Crypto Users by Exchange</h2>
            <div>
                <Bar style={{ marginLeft: 150, marginRight: 150}} options={coinbaseChartOptions} data={newCoinbaseData} />
                <Bar style={{ marginLeft: 150, marginRight: 150}}  options={binanceChartOptions} data={newBinanceData} />
            </div>
        </div>
    );
}

export default Homepage;