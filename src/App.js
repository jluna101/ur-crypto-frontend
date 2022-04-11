import './App.css';
import CryptoNews from './components/CryptoNews';
import CryptoPrices from './components/CryptoPrices';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CoinbaseTransactions from './components/CoinbaseTransactions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/prices'element={<CryptoPrices/>} />
        <Route path='/news' element= {<CryptoNews/>} /> 
        <Route path='/transactions' element= {<CoinbaseTransactions/>} /> 
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
