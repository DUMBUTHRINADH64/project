import { useState} from 'react';
import Header from '../Layout/Header'
import Cart from '../Cart/Cart';
import Medicines from '../medicines/Medicines';
import CartProvider from '../store/CartProvider';



function HomePage({addMedicine,medicines}) {
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
        <Medicines addMedicine={addMedicine} medicines={medicines}   />
      </main>
    </CartProvider>
  );
}

export default HomePage;
