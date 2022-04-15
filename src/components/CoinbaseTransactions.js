import React, { useState, useEffect } from 'react';

function CoinbaseTransactions(props, {signedIn}) {
    // const [coinbaseData, setCoinbaseData] = useState([])

    // useEffect(() => {
    //     const url = `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${process.env.COINBASE_CLIENT_ID}`;
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then(data => console.log(data))
    //     .catch(console.error);
    //     }, []);



    //   TESTING FOR COINBASE API 
//     const connectCB = async () => {
//     try {
//       const response = await fetch(`https://coinbase.com/oauth/authorize?resoinse_type=code&client_id=${process.env.COINBASE_CLIENT_ID}`)
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//     setTimeout(function(){
//         connectCB();
//     }, 2000);

    return (
        <div>
            <h2>Transactions</h2>
            <section>Date &nbsp; Price &nbsp; Status </section>
        </div>
    );
}

export default CoinbaseTransactions;