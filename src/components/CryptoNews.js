import React, { useState } from 'react';

function CryptoNews(props, {signedIn}) {
    const [newsData, setNewsData] = useState(props.data)
        // converts unix timestamp to date
        function datetime(num){
            return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(num)}
    return (
        <section className="section gray-bg" id="blog">
        <div className="row justify-content-center">
            <h1 className="section-title">Latest Crypto News</h1>
            {newsData.slice(0,15).map((element, index) => (
                        <div key={element.id} className="w-50 p-3" >
                            <a href={element.url} target="_blank" rel="noreferrer noopener" >
                                <img className="img-fluid" src={element.image} alt={element.headline} />
                                <p>{element.source}</p>
                                <h2>{element.headline}</h2>
                                <p>{datetime((element.datetime)+'100')}</p>
                            </a>
                        </div>
                    ))}
        </div>
        </section>
    );
}

export default CryptoNews;