import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import medicineimage from '../../images/medicines.jpg';
import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
const Container=styled.div` position: fixed;
top: 0;
left: 0;
width: 110%;
height: 5rem;
background-color:white;
color: black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10%;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 10;`;
const Header=(props)=>{
   const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
    return(
        <Fragment>
            <Container>
            <h1>MedicinesOrderApp</h1>
            <button class="bg-danger py-0.75rem px-3rem d-flex justify-content-around"
             onClick={logoutHandler}>logout</button>
            <HeaderCartButton onClick={props.onShowCart}/>
                
            </Container>
        
            <div style={{width:'100%',height:'25rem',overflow:'hidden'}}>
                <img style={{width:'110%',height:'100',objectfit:'cover'}}src={medicineimage} alt='a list of quality medicnes'/>
            </div>
        </Fragment>
    )
}
export default Header;