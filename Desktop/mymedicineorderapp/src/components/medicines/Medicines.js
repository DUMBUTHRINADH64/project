import { Fragment } from 'react';

import styled from 'styled-components';
import AvailableMedicines from './AvailableMedicines';
import Mediciness from './MedicineItem/MedicineDetails'
const Container=styled.div` text-align: center;
max-width: 45rem;
width: 90%;
margin: auto;
margin-top: -10rem;
position: relative;
background-color: #0892e7;
color: white;
border-radius: 14px;
padding: 1rem;
box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);`;
const Medicines = ({medicines}) => {
  return (
    <Fragment>
       <Container>
      <h2 class="mt-0" style={{fontsize:'2rem'}}>Quality Medicines, Delivered To You</h2>
      <p>
        Choose your medicine from our broad selection of available medicines
        and get relief from diseases by staying at your location.
      </p>
      <p>
        All our medicines are of high quality and imported from the industries itself. 
        All the medicines are recently manufactured,no expired medicines in the cart.
      </p>
    </Container>
       <AvailableMedicines medicines={medicines} />
    </Fragment>
  );
};

export default Medicines;