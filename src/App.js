import './App.css';
import CryptoNews from './components/CryptoNews';
import CryptoPrices from './components/CryptoPrices';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CoinbaseTransactions from './components/CoinbaseTransactions';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CryptoPrices/>
      <CryptoNews/>
      <CoinbaseTransactions/>
      <Footer/>
    </div>
  );
}

export default App;
