import './App.css';
import CryptoNews from './components/CryptoNews';
import CryptoPrices from './components/CryptoPrices';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CoinbaseTransactions from './components/CoinbaseTransactions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useEffect, useState } from 'react';

function App() {
  const [cryptoData, setCryptoData] = useState([])
  const [newsData, setNewsData] = useState([])
  const newsKey =process.env.REACT_APP_NEWS_KEY;
    //API for CryptoNews
  useEffect(() => {
    const url = `https://finnhub.io/api/v1/news?category=crypto&token=${newsKey}`;
    fetch(url)
    .then((res) => res.json())
    .then(data => setNewsData(data))
    .catch(console.error);
    }, []);
    //API for CryptoPrices and Header
  useEffect(() => {
      fetch('https://api.coinstats.app/public/v1/coins')
      .then((res) => res.json())
      .then(data => setCryptoData(data.coins))
      .catch(console.error);
      }, []);

  return (
    <div>
      <Header coinData={cryptoData}/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/prices'element={<CryptoPrices coinData={cryptoData}/>}/>
        <Route path='/news' element={<CryptoNews data={newsData}/>}/> 
        <Route path='/transactions' element={<CoinbaseTransactions/>}/> 
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
