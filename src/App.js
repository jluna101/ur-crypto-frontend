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
import API_URL from './apiConfig';

function App() {
  const [cryptoData, setCryptoData] = useState([])
  const [newsData, setNewsData] = useState([])
  const newsKey =process.env.REACT_APP_NEWS_KEY;
  const [signedIn, setSignedIn] = useState(false)
  const handleSetSignedIn = (token) => {
    localStorage.setItem('token', token);
    setSignedIn(true);
  };

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

  // checking if there's a token in local storage
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSignedIn(true)
    }
  })



  return (
    <div>
      <Header signedIn={signedIn} coinData={cryptoData}/>
      <Navbar/>
      <Routes>
        <Route path='/homepage'element={<Homepage signedIn={signedIn}/>}/>
        <Route path='/prices'element={<CryptoPrices signedIn={signedIn} coinData={cryptoData}/>}/>
        <Route path='/news' element={<CryptoNews signedIn={signedIn} data={newsData}/>}/> 
        <Route path='/transactions' element={<CoinbaseTransactions signedIn={signedIn}/>}/> 
        <Route path='/signin' element={<SignIn handleSetSignedIn={handleSetSignedIn}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
