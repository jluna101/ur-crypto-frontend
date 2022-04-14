import './App.css';
import CryptoNews from './components/CryptoNews';
import CryptoPrices from './components/CryptoPrices';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CoinbaseTransactions from './components/CoinbaseTransactions';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 
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
    getUserInfo();
  };
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  // handles signing out
  const handleSignout = async (event) => {
    setSignedIn(false);
    try{
      const response = await fetch(API_URL + 'token/logout/', {
        method: 'POST',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      if (response.status === 204) {
        setUserInfo(null)
        localStorage.removeItem('token');
        setSignedIn(false)
        alert('You have been successfully logged out');
        
        navigate('/')
      }
    } catch (error){
      console.log(error)
    }
    
  }

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
      // getUserInfo();
    }
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await fetch(API_URL + 'users/me/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      if (response.status === 200){
        const data = await response.json();
        setUserInfo(data);
        console.log('user data set')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Header coinData={cryptoData}/>
      <Navbar signedIn={signedIn} userInfo={userInfo} handleSignout={handleSignout}/>
      <Routes>
        <Route path='/'element={<Homepage signedIn={signedIn}/>}/>
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
