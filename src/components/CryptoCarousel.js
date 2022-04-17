import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

function CryptoCarousel({coinData, newsData}) {
    console.log(newsData)
    const [topCrypto, setTopCrypto] = useState(coinData)
    const [topNews, setTopNews] = useState(newsData)
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}

    const coinItems = topCrypto.slice(0,10).map((coinData) => {
        return (
            <Link to='/prices'>
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
    const newsItems = topNews.slice(0,10).map((newsData) => {
        return (
            <Link to='/prices'>
                <img 
                src={newsData.image}
                alt={newsData.headline}
                height='80'
                style={{ marginBottom: 10}}
                  />
                <p className="text-decoration-none">{newsData.headline}</p>
            </Link>
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
        <div>
            <h2>Live Crypto Prices </h2>
            <AliceCarousel 
                 mouseTracking
                 infinite
                 autoPlayInterval={0}
                 animationDuration={2000}
                 disableDotsControls
                    responsive={responsive}
                    autoPlay
                    items={coinItems}
            />
            <h2>Trending News</h2>
            <AliceCarousel 
                 mouseTracking
                 infinite
                 autoPlayInterval={2000}
                 animationDuration={4000}
                 disableDotsControls
                    responsive={responsive}
                    autoPlay
                    items={newsItems}
            />
        </div>
    );
}

export default CryptoCarousel;