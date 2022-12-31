import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const Style1=styled.div` position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 20;
background-color: rgba(0, 0, 0, 0.75);`;
const Style2=styled.div` position: fixed;
top: 20vh;
left: 5%;
width: 90%;
background-color: white;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;`;
const Backdrop = (props) => {
  return <Style1 onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <Style2>
      <div>{props.children}</div>
    </Style2>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;