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

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/prices'element={<CryptoPrices/>} />
        <Route path='/news' element={<CryptoNews/>} /> 
        <Route path='/transactions' element={<CoinbaseTransactions/>} /> 
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
