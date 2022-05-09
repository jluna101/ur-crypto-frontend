import React, { useState, useEffect} from 'react';
import SignUpModal from './SignUpModal';


function CryptoNews({dataForNews}) {
    /* === Title Tag === */
    document.title = 'News | urCrypto'
    /* Variables */
    const [newsData, setNewsData] = useState(dataForNews)
    const [signedIn, setSignedIn] = useState(false)
    console.log(dataForNews)
    // Converts unix timestamp to date
    function datetime(num){
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(num)}
    useEffect(() => {
        if (localStorage.getItem('token')){
          setSignedIn(true)
        }
      }, []);
    return (
        <section className="section gray-bg" id="blog">
        <div className="row justify-content-center mx-2 px-5" >
            <h1 className="section-title text-center py-5">Latest Crypto News</h1>
            {newsData.filter((element) => {
                if (element.image !== 'https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png'){
                    return element
                }
            }).slice(0,100).map((element, index) => (
                        <div key={element.id} className="w-50 p-3" >
                        { signedIn === false ? 
                            <div style={{ filter: 'blur(2.5px)', pointerEvents: 'none' }} className='d-flex  w-75 text-muted flex-column align-self-start'>
                                <img className="rounded-lg w-100" src={element.image} alt={element.headline} />
                                <p>{element.source}</p>
                                <h2 className='text-black fw-normal fs-6 align-items-center'>{element.headline}</h2>
                                <p>{datetime((element.datetime)+'100')}</p>
                            </div>
                            :
                            <a style={{ textDecoration: 'none' , color: 'inherit'}} href={element.url} target="_blank" rel="noreferrer noopener" >
                                <div className='d-flex  w-75 text-muted flex-column align-self-start'>
                                    <img className="rounded-lg w-100 shadow hover" src={element.image} alt={element.headline} />
                                    <p>{element.source}</p>
                                    <h2 className='text-black fw-normal fs-6 align-items-center hover'>{element.headline}.</h2>
                                    <p>{datetime((element.datetime)+'100')}</p>
                                </div>
                            </a>}
                        </div>
                    ))}
                    { signedIn === false? <SignUpModal/>: null }
        </div>
        </section>
    );
}

export default CryptoNews;