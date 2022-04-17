import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

function CryptoCarousel({coinData, newsData}) {
    const [topCrypto, setTopCrypto] = useState(coinData)
    const [topNews, setTopNews] = useState(newsData)
    // Below function added commas every third place
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}

    const coinItems = topCrypto.filter((element) => {
        if (element.price > 1){
            return element
        }
    }).slice(0,30).map((coinData) => {
        return (
            <Link to={`/prices/${coinData.name}`}>
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
    const newsItems = topNews.filter((element) => {
        if (element.image !== 'https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png'){
            return element
        }
    }).slice(0,10).map((newsData) => {
        return (
            <a 
                href={newsData.url}
                target="_blank"
                rel="noreferrer noopener">
                <img 
                src={newsData.image}
                alt={newsData.headline}
                height='80'
                style={{ marginBottom: 10}}/>
                <p className="text-decoration-none">{newsData.headline}</p>
            </a>
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
            <Link to='/prices'>
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
            />
            <Link to='/news'>
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
            />
        </div>
    );
}

export default CryptoCarousel;