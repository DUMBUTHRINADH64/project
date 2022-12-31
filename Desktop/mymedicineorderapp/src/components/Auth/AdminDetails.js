
import NewMedicine from "./newMedicine";

import AvailableMedicines from "../medicines/AvailableMedicines";
import { useState } from "react";

const Medicines = [
  {
    id: 'm1',
    name: 'Paracetmol',
    description: 'Fever',
    price: 30.91,
  },
  {
    id: 'm2',
    name: 'Azithromycin',
    description: 'Corana',
    price: 112.51,
  },
  {
    id: 'm3',
    name: 'Cetrizine',
    description: 'Cold',
    price: 25.91,
  },
  {
    id: 'm4',
    name: 'BenedrylSyrup',
    description: 'Cough',
    price: 123,
  },
];

const AdminDetails = () => {

  const [medicines,setMedicines] = useState(Medicines);

  const addMedicine = (medicine)=>{
    const data= [...medicines];
    data.push(medicine);
    setMedicines(data);
  }

  return (
    <div class="text-center">
      <br />
      <NewMedicine addMedicine={addMedicine}/>
      <AvailableMedicines medicines={medicines}/>
    </div>
  );
};
export default AdminDetails;
