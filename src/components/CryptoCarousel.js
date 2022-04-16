import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

function CryptoCarousel({coinData}) {
    console.log(coinData)
    const [topCrypto, setTopCrypto] = useState(coinData)
    const items = topCrypto.slice(0,10).map((coinData) => {

        return (
            <Link to='/'>
                {/* <img 
                src={coinData.icon}
                alt={coinData.name}
                height='80'
                style={{ marginBottom: 10}}
                  /> */}
                Name: {coinData.name}
                
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
            Carousel
            <AliceCarousel 
                 mouseTracking
                 infinite
                 autoPlayInterval={1000}
                 animationDuration={1500}
                 disableDotsControls
                    responsive={responsive}
                    autoPlay
                    items={items}


            />
        </div>
    );
}

export default CryptoCarousel;