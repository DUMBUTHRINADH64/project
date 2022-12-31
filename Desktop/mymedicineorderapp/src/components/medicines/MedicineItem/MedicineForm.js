import {useRef,useState} from "react";

import Input from "../../UI/Input";
import 'bootstrap/dist/css/bootstrap.css';
const MedicineForm = (props) => {
  const [amountIsValid,setAmountIsValid]=useState(true);
  const amountInputRef=useRef();

  const submitHandler=event=>{
    event.preventDefault();
  const enteredAmount=amountInputRef.current.value;
  
  const enteredAmountNumber=+enteredAmount;
 
  if(enteredAmount.trim().length===0 || enteredAmount<=0){
    setAmountIsValid(false);
    return;
  }
  if(enteredAmount>0)
  setAmountIsValid(true);
  props.onAddToCart(enteredAmountNumber);
 };
  return (
    
      <div>
        <Input
         ref={amountInputRef}
          label="Quantity"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "0",
            step: "1",
            defaultValue: "0",
          }}
        />
        <button type="button" class="btn btn-primary ms-5 " onClick={submitHandler}>+ Add</button>
        {!amountIsValid && <p>please enter a valid amount</p>}
      </div>
  
  );
};
export default MedicineForm;
