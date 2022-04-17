import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CryptoDetails(props) {
    /* Variables */
    const { id } = useParams();
    const [coin, setCoin] = useState([])
    // Calling Crypto API
    useEffect(() => {
        fetch(`https://api.coinstats.app/public/v1/coins/${id.toLowerCase()}`)
        .then((res) => res.json())
        .then(data => setCoin(data.coin))
        .catch(console.error);
        }, []);
    console.log(coin)
    return (
        <div>
            <h1>{coin.name}</h1>
        </div>
    );
}

export default CryptoDetails;