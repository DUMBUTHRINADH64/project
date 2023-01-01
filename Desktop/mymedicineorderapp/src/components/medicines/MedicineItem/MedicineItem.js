import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import MedicineForm from './MedicineForm';
import AuthContext from '../../store/auth-context';
const MedicineItem = (props) => {
  const cartCtx=useContext(CartContext);
  const authCtx=useContext(AuthContext);
  const price = `Rs${props.price.toFixed(2)}`;
  const addToCartHandler=amount=>{
   cartCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
   });
  }
  return (
    <li class="d-flex justify-content-between m-1rem border-bottom-1px border-bottom border-warning">
      <div>
        <h3 class="form-outline mb-0.25rem">{props.name}</h3>
        <div class="fw-bold">{props.description}</div>
        <div class='fs-4' style={{color: '#f87c00'}}>{price}</div>
        
      </div>
      <div>

        {authCtx.isLoggedIn && <MedicineForm onAddToCart={addToCartHandler}/>}
        {!authCtx.isLoggedIn && 
        <div><button onClick={() => props.editHandler({
                                              id:props.id,
                                              name:props.name,
                                              price: props.price,
                                              description:props.description
                                            })} class="bg-secondary" >edit</button>
        <button onClick={() => props.deleteHandler(props.id)} class='bg-danger'>delete</button></div>}
      </div>
    </li>
  );
};

export default MedicineItem;