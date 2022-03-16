import React from "react";
import ErrorTypes from "../errorTypes";

const Error = ({ type, message }) => {
  switch (type) {
    case ErrorTypes.BLANK_EMAIL_NAME:
      return (
        <div className="alert alert-danger">
          Email and/or name cannot be empty. 
        </div>
      );
    case ErrorTypes.INVALID_EMAIL:
      return (
        <div className="alert alert-danger">
          {" "}
          Email is invalid. Please enter a valid email{" "}
        </div>
      );
    default:
      return <></>;
  }
};

export default Error;
