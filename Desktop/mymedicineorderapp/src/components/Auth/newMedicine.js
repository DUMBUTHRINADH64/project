import React, { useState } from 'react';
import AddMedicineForm from './AddMedicineForm';


const NewMedicine = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div  className="h-50 bg-warning text-center " style={{}}>
      {!isEditing && (
        <button onClick={startEditingHandler} class="bg-success">Add New Medicines</button>
      )}
      {isEditing && (
        <AddMedicineForm
          addMedicine={props.addMedicine}
          onCancel={stopEditingHandler}
        />
        
      )}
    </div>
  );
};

export default NewMedicine;