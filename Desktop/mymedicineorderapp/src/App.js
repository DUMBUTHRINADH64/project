import { Switch, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import Layout from './components/Layout/Layout';
import AuthForm from './components/Auth/AuthForm';
import Admin from './components/Auth/Admin';
import AdminDetails from './components/Auth/AdminDetails';
import AuthContext from './components/store/auth-context';
import HomePage from './components/HomePage/Homepage';

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

function App() {

  const [medicines,setMedicines] = useState(Medicines);

  const addMedicine = (medicine)=>{
    const data= [...medicines];
    data.push(medicine);
    setMedicines(data);
  }

  const deleteMedicine = (id) => {
    const items = [...medicines];
    const filteredItems = items.filter(item => item.id != id);
    setMedicines(filteredItems);
  }

  const updateMedicine = (newMedicine) => {
    const items = [...medicines];
    const index = items.findIndex(item => item.id === newMedicine.id);
    const item = items[index];
    item.name = newMedicine.name;
    item.description = newMedicine.description;
    item.price = newMedicine.price;
    items[index] = item;
    setMedicines(items);
    // console.log("update")
    
  }

  const  authctx=useContext(AuthContext);
  return (
    <Layout>
      <Switch>
      <Route path='/auth'>
          <AuthForm />
        </Route>
        <Route path='/admin' exact><Admin/></Route>
        <Route path='/adminlogin' exact><AdminDetails
          medicines={medicines} addMedicine={addMedicine} deleteMedicine={deleteMedicine}
          updateMedicine={updateMedicine}
        /></Route>
        {authctx.isLoggedIn && <Route path='/' exact>
          <HomePage
            medicines={medicines}
            addMedicine={addMedicine}
          />
        </Route>
}
      </Switch>
    </Layout>
  );
}

export default App;
