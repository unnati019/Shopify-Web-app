import './App.css';
import Header from './common/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from "./components/flashDeals/Data";
import { useState } from 'react';
import Cart from './common/Cart/Cart';
import Shdata from './components/Shop/Shdata';
import Footer from './common/footer/Footer';


function App() {
  const {productItems} = Data;
  const { shopItems } = Shdata;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit){
      setCardItem(cartItem.map((item)=>
      (item.id === product.id? 
        {...productExit,qty:productExit.qty+1} : item)))
    }else{
      setCardItem([...cartItem,{...product, qty : 1 }])
    }
  }
  
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty===1){
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    }else{
      setCardItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty: productExit.qty-1} : item)))
    }
  }
  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route exact path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route exact path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} />
        </Routes> 
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
