import React from 'react';

function CoinbaseTransactions({signedIn}) {
    /* === Title Tag === */
    document.title = `| Transactions`

    return (
        <div>
            <h2>Transactions</h2>
            <section>Date &nbsp; Price &nbsp; Status </section>
        </div>
    );
}

export default CoinbaseTransactions;