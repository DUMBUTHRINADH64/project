import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddMedicineForm = (props) => {
  const [medicineName, setMedicineName] = useState('');
  const [medicinedescription, setMedicineDescription] = useState('');
  const [price,setPrice] = useState('');
 

  const NameChangeHandler = (event) => {
    setMedicineName(event.target.value);
    
  };

  const DescriptionChangeHandler = (event) => {
    setMedicineDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault();
    // {
    //   id: 'm1',
    //   name: 'Paracetmol',
    //   description: 'Fever',
    //   price: 30.91,
    // },
    const data = {
      id:uuidv4(),
      name:medicineName,
      description:medicinedescription,
      price:price-0
    }

    props.addMedicine(data);

  };

  return (
    <form onSubmit={submitHandler}>
      <div className='d-flex justify-content-between h-50'>
        <div>
          <label>medicinename</label>
          <input
            type='text'
            value={medicineName}
            onChange={NameChangeHandler}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type='text'
            value={medicinedescription}
            onChange={DescriptionChangeHandler}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type='number'
            min='1'
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={props.onCancel} className=" bg-danger text-white" >Cancel</button>
        <button type='submit' class="bg-success">Add Medicines</button>
      </div>
    </form>
  );
};

export default AddMedicineForm;