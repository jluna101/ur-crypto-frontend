import React, { useState } from "react";

function Header(props) {
  const data = props.coinData;
    function integer(num){
        return parseInt((num).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}   
  return (
    <div>
        {(data.length > 1)? 
        <nav className="navbar py-0">
          <ul className="nav-item m-2">BTC PRICE: ${integer(data[0].price)}</ul>
          <ul className="nav-item m-2">ETH Price: ${integer(data[1].price)}</ul>
          <ul className="nav-item m-2">Solana Price: ${integer(data[6].price)}</ul>
          <ul className="nav-item m-2">ETC Price: ${integer(data[27].price)}</ul>
        </nav>: <div>Loading</div>}
    </div>
  );
}

export default Header;