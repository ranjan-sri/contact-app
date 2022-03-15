import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { saveContact, exitContactForm, updateContact } from "../actions";
import { connect } from "react-redux";

const ContactForm = ({ updateContactObj }) => {
  const contact =
    Object.keys(updateContactObj).length === 0
      ? { name: "", email: "" }
      : { ...updateContactObj };

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [isBlank, setIsBlank] = useState(false);

  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveOrUpdate = (e) => {
    name.length === 0 || email.length === 0
      ? setIsBlank(true)
      : Object.keys(updateContactObj).length === 0
      ? dispatch(saveContact({ id: uuid(), name: name, email: email }))
      : dispatch(
          updateContact({ id: updateContactObj.id, name: name, email: email })
        );
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
        <i class="bi bi-save"></i>
      </button>
      <button className="btn btn-danger btn-custom" onClick={handleExit}>
        <i class="bi bi-x"></i>
      </button>
      {isBlank ? (
        <div className="alert alert-danger">
          {" "}
          Email and Name cannot be empty. Click <span><i class="bi bi-x"></i></span> instead.{" "}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { updateContactObj: state.updateContactObj };
};

export default connect(mapStateToProps)(ContactForm);
