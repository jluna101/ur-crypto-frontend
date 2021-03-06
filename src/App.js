import './App.css';
import CryptoNews from './components/CryptoNews';
import CryptoPrices from './components/CryptoPrices';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom'; 
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useEffect, useState, createContext } from 'react';
import API_URL from './apiConfig';
import CryptoDetails from './components/CryptoDetails';
import Switch from 'react-js-switch';
import AliceCarousel from 'react-alice-carousel';

function App() {
  const [theme, setTheme] = useState('light')
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
  // Light & Dark mode toggle
  const toggleTheme = () => {
    setTheme((current) => (current === 'light'? 'dark' : 'light'));
  }
  // Signout Handle
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

  // News API 
  useEffect(() => {
    const url = `https://finnhub.io/api/v1/news?category=cryptocurrency&token=${newsKey}`;
    fetch(url)
    .then((res) => res.json())
    .then(data => setNewsData(data))
    .catch(console.error);
    }, []);
  // Price Data API
  useEffect(() => {
      fetch('https://api.coinstats.app/public/v1/coins')
      .then((res) => res.json())
      .then(data => setCryptoData(data.coins))
      .catch(console.error);
      }, []);

  // Checking if token is in local storage
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSignedIn(true)
    }
  }, []);
  // Setting userInfo to state
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
      }
    } catch (error) {
      console.log(error)
    }
  }  
  // test 
  const responsive = {
    0: {
        items: 2,
    },
    512: {
        items: 4,
    },
};
function numColor(num){
  return num > 0 ? <p className="text-success pt-1">{num}%</p>:<p className="text-danger pt-1">{num}%</p>
}
function integer(num){
  return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
  
const coinItems = cryptoData.filter((element) => {
  if (element.price > 1.1){
      return element
  }
  }).slice(0,50).map((cryptoData) => {
      return (
          <div className='d-flex align-items-center opacity-50'>
              <p id={theme} className='hover my-1 py-0 text-primary'>{cryptoData.symbol} ${integer(cryptoData.price)}</p>
          </div>
          )
  })
  console.log(cryptoData)
  

  return (
    <div id={theme}>
      <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={100}
        animationDuration={50000}
        disableDotsControls
            responsive={responsive}
            autoPlay
            items={coinItems}
        disableButtonsControls
      />
      <Navbar signedIn={signedIn} theme={theme} toggleTheme={toggleTheme} userInfo={userInfo} handleSignout={handleSignout}/>
      <Routes>
        <Route path='/'element={<Homepage coinData={cryptoData} theme={theme} newsData={newsData} signedIn={signedIn} setSignedIn={setSignedIn} />
      }
        />
        <Route path='/prices'element={<CryptoPrices theme={theme} coinData={cryptoData}/>}/>
        <Route path='/prices/:id' element={<CryptoDetails signedInData={signedIn} coinData={cryptoData}/>} />
        <Route path='/news' element={<CryptoNews dataForNews={newsData}/>}/> 
        <Route path='/signin' element={<SignIn handleSetSignedIn={handleSetSignedIn}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
