import React,{useRef, useState} from "react";
import classes from './Checkout.module.css'
const isEmpty=value=>value.trim()===''
const isNotFiveChars=value=>value.trim().length!==5

function Checkout(props){
    const [formInputsValidity,setFormInputsValidity]=useState(
        {
            name:true,
            street:true,
            city:true,
            postalCode:true
        }
    );
    const nameInputRef=useRef();
    const streetInputRef=useRef();
    const cityInputRef=useRef();
    const postalInputRef=useRef();
    const confirmHandler=(event)=>{
event.preventDefault();
     const enteredName=nameInputRef.current.value;
     const enteredStreet=streetInputRef.current.value;
     const enteredPostal=postalInputRef.current.value;
     const enteredCity=cityInputRef.current.value;
     const enteredNameIsValid=!isEmpty(enteredName);
     const enteredStreetIsValid=!isEmpty(enteredStreet);
     const enteredPostalIsValid=!isNotFiveChars(enteredPostal);
     const enteredCityIsValid=!isEmpty(enteredCity);
     setFormInputsValidity({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        city:enteredCityIsValid,
        postalCode:enteredPostalIsValid
     })
     const formIsValid=enteredNameIsValid&&enteredStreetIsValid&&enteredPostalIsValid&&enteredCityIsValid;
     if(!formIsValid)
     {
        return;
     }
     props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        postalCode:enteredPostal,
        city:enteredCity
     })
     
    }
    return(
       <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            {!formInputsValidity.name&&<p>Please Enter A Valid Name!</p>}
            <input type="text" id="name" ref={nameInputRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="street">Street</label>
            {!formInputsValidity.street&&<p>Please Enter A Valid Street!</p>}
            <input type="text" id="street" ref={streetInputRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="Postal">Postal Code</label>
            {!formInputsValidity.postalCode&&<p>Please Enter A Valid postalCode!</p>}
            <input type="text" id="Postal"ref={postalInputRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="City">City</label>
            {!formInputsValidity.city&&<p>Please Enter A Valid City!</p>}
            <input type="text" id="City" ref={cityInputRef}></input>
        </div>
        <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        </div>
       
       </form>
    )
};
export default Checkout;