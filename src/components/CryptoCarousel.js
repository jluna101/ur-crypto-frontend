import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

function CryptoCarousel({coinData, newsData}) {
    /* Variables */
    const [topCrypto, setTopCrypto] = useState(coinData)
    const [topNews, setTopNews] = useState(newsData)
    const [signedIn, setSignedIn] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('token')){
          setSignedIn(true)
        }
      }, []);
    // Adding commas to number ex. 1,000
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    // Coins to display on carousel
    const coinItems = topCrypto.filter((element) => {
        if (element.price > 1){
            return element
        }
        }).slice(0,30).map((coinData) => {
            return (
                <Link style={{ textDecoration: 'none' , color: 'inherit'}} to={`/prices/${coinData.name}`}>
                    <img 
                    src={coinData.icon}
                    alt={coinData.name}
                    height='80'
                    style={{ marginBottom: 10}}
                    />
                    <p>{coinData.name}: ${integer(coinData.price)}</p>

                </Link>
                )
        })
    // News to display on carousel
    const newsItems = topNews.filter((element) => {
        if (element.image !== 'https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png'){
            return element
        }
        }).slice(0,10).map((newsData) => {
            return (
                <div>
                    { signedIn === false ?
                    <Link style={{ textDecoration: 'none' , color: 'inherit'}} to='/news'>
                        <img 
                        src={newsData.image}
                        alt={newsData.headline}
                        height='80'
                        className='shadow-lg'
                        style={{ marginBottom: 10, borderRadius: 5}}/>
                        <p >{newsData.headline}</p>
                    </Link>
                    :
                        <a style={{ textDecoration: 'none' , color: 'inherit'}}
                            href={newsData.url}
                            target="_blank"
                            rel="noreferrer noopener">
                        <img 
                            src={newsData.image}
                            alt={newsData.headline}
                            height='80'
                            className='shadow-lg'
                            style={{ marginBottom: 10}}/>
                        <p >{newsData.headline}</p>
                    </a>}
                </div>
            )
        })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    return (
        <div style={{ textDecoration: 'none' , color: 'inherit'}} >
            <Link style={{ textDecoration: 'none' , color: 'inherit'}} to='/prices'>
                <h2>Live Crypto Prices </h2>
            </Link>
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
            />
            <Link style={{ textDecoration: 'none' , color: 'inherit'}} to='/news'>
                <h2>Trending News</h2>
            </Link>
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
            />
        </div>
    );
}

export default CryptoCarousel;