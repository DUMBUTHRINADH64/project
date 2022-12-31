import Card from '../UI/Card';
import MedicineItem from './MedicineItem/MedicineItem';
import styled from 'styled-components';

const Container=styled.div`
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
   
`;


const AvailableMedicines = ({medicines:Medicines}) => {
  const medicinesList = Medicines.map((medicine) => (
    <MedicineItem
      key={medicine.id}
      id={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
    />
  ));
  return (
    <Container>
      <Card>
      <ul>{medicinesList}</ul>
      </Card>
    </Container>
  );
};

export default AvailableMedicines;