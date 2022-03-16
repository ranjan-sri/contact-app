import React from "react";
import ErrorTypes from "../errorTypes";

const Error = ({ type }) => {
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
      case ErrorTypes.No_SEARCH_RESULTS:
        return (
          <div className="alert alert-danger">
            {" "}
            No matches found. Try again{" "}
          </div>
        );
    default:
      return <></>;
  }
};

export default Error;
