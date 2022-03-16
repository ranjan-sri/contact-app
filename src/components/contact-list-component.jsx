import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import ContactDisplay from "./contact-display-component";
import ErrorTypes from "../errorTypes";
import Error from "./error-component";
const ContactList = ({ contactsArray }) => {
  
  const [searchString, setSearchString] = useState('');
  const[filteredContactsArray, setFilteredContactsArray] = useState(contactsArray);
  
  const handleSearchInput = (e) => {
    setSearchString(e.target.value);
   // setFilteredContactsArray( contactsArray.filter( contact => contact.email.includes(e.target.value))) ;
   
}
  useEffect( () => {
    setFilteredContactsArray( contactsArray.filter( contact => `${contact.email} ${contact.name}`.toLowerCase().includes(searchString.toLowerCase())));
  },[contactsArray,searchString]);

  return (
    <div className="contact-list-div">
     {
     contactsArray.length !== 0 
     ?
     <div className="search-div">
     <input type="text" placeholder="Search Contacts.." onChange={handleSearchInput} value={searchString} className="form-control" />
     </div>
      :
      <></>
     }
      {
      // contactsArray.filter( contact => `${contact.email} ${contact.name}`.toLowerCase().includes(searchString.toLowerCase()))
      filteredContactsArray.map((contact) => (<ContactDisplay key={contact.id} contact={contact} />))
      }
      {
        filteredContactsArray.length === 0 ? <Error type={ErrorTypes.No_SEARCH_RESULTS} /> : <Error />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return { contactsArray: state.contactsArray };
};
export default connect(mapStateToProps)(ContactList);
