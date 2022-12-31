import { useState} from 'react';
import Header from '../Layout/Header'
import Cart from '../Cart/Cart';
import Medicines from '../medicines/Medicines';
import CartProvider from '../store/CartProvider';
function HomePage() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Medicines/>
      </main>
    </CartProvider>
  );
}

export default HomePage;
