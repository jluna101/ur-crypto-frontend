import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CryptoNews(props) {
    const [newsData, setNewsData] = useState([])
    const newsKey =process.env.REACT_APP_NEWS_KEY;

    useEffect(() => {
        const url = `https://finnhub.io/api/v1/news?category=crypto&token=${newsKey}`;

        fetch(url)
        .then((res) => res.json())
        .then(data => setNewsData(data))
        .catch(console.error);
        }, []);

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