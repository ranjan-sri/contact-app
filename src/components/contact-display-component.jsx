import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../actions";

const ContactDisplay = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact));
  const handleEdit = () => dispatch(editContact(contact));

  return (
    <div className="contact-display-div border">
      <h2> {contact.name}</h2>
      <h3>
        <span>
          <i class="bi bi-envelope"></i>
        </span>
        <span> {contact.email}</span>
      </h3>
      <button className="btn btn-danger btn-custom" onClick={handleDelete}>
        <i class="bi bi-trash"></i>
      </button>
      <button className="btn btn-primary btn-custom" onClick={handleEdit}>
        <i class="bi bi-pencil-square"></i>
      </button>
    </div>
  );
};

export default ContactDisplay;
