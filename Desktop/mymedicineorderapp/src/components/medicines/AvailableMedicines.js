import Card from '../UI/Card';
import MedicineItem from './MedicineItem/MedicineItem';
import styled from 'styled-components';
import Modal from '../UI/Modal';
import { useState } from 'react';

const Container=styled.div`
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
   
`;


const AvailableMedicines = ({ medicines: Medicines,deleteMedicine ,updateMedicine}) => {

  const ondelete = (id) => {
    deleteMedicine(id);
  }

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const setModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const editHandler = (data) => {
    setShowModal(true);
    setModalData(data);
    console.log(data);
  }

  const updateMedicines = (data) => {
    updateMedicine(data);
    setShowModal(false);
    setModalData(null);
  }
  


  const medicinesList = Medicines.map((medicine) => (
    <MedicineItem
      key={medicine.id}
      id={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
      deleteHandler={ondelete}
      editHandler={editHandler}
    />
  ));
  return (
    <Container>
      {showModal && <Modal onClose={closeModal}>
        <h1>Edit</h1>
        <EditMedicine id={modalData.id} name={modalData.name} description={modalData.description} price={modalData.price} updateMedicines={updateMedicines} />
      </Modal>}
      <Card>
        <ul>{medicinesList}</ul>
      </Card>
    </Container>
  );
};

const EditMedicine = (props) => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);

  const submitHandler = (event) => {
    event.preventDefault();
    props.updateMedicines({id:props.id, name, description, price });
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type={'text'} onChange={ (event) => setName(event.target.value) } value={name} />
      <label>Description</label>
      <input type={'text'} onChange={(event) => setDescription(event.target.value)} value={description} />
      
      <label>Price</label>
      <input type={'number'} onChange={(event) => setPrice(event.target.value)} value={price} />
      
      <button type='submit'>Update</button>
    </form>
  )
}

export default AvailableMedicines;