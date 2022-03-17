import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { saveContact, exitContactForm, updateContact } from "../actions";
import { connect } from "react-redux";
import validator from 'validator';
import Error from "./error-component";
import ErrorTypes from "../errorTypes";

const ContactForm = ({ updateContactObj }) => {
  const contact =
        Object.keys(updateContactObj).length === 0
          ? { name: '', email: '' }
          : { ...updateContactObj };

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [isBlank, setIsBlank] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
    setIsBlank(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
    setIsBlank(false);
  };

  const handleSaveOrUpdate = () => {
    if (name.length === 0 || email.length === 0){
      setIsBlank(true);
      return;
    } else if (!validator.isEmail(email)) {
      setIsValidEmail(validator.isEmail(email));
      return;
    } 

     Object.keys(updateContactObj).length === 0
      ? dispatch(saveContact({ id: uuid(), name: name, email: email }))
      : dispatch(updateContact({ id: updateContactObj.id, name: name, email: email }));
  };

  const handleExit = () => {
    dispatch(exitContactForm());
  };
  return (
    <div className="contact-form-div">
      Name:{" "}
      <input
        className="form-control"
        type="text"
        value={name}
        onChange={handleName}
      />
      <br />
      Email:{" "}
      <input
        className="form-control"
        type="email"
        value={email}
        onChange={handleEmail}
      />
      <br />
      <button className="btn btn-success" onClick={handleSaveOrUpdate}>
        <i className="bi bi-save"></i>
      </button>
      <button className="btn btn-danger btn-custom" onClick={handleExit}>
        <i className="bi bi-x"></i>
      </button>
      { isBlank 
        ? <Error type={ErrorTypes.BLANK_EMAIL_NAME} />
        : <Error  />
      }

       { isValidEmail ?
         <Error  />
       : 
        <Error type={ErrorTypes.INVALID_EMAIL} />
      }

    </div>
  );
};

const mapStateToProps = (state) => {
  return { updateContactObj: state.updateContactObj };
};

export default connect(mapStateToProps)(ContactForm);
