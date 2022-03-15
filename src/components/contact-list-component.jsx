import React, {useState} from "react";
import { connect } from "react-redux";
import ContactDisplay from "./contact-display-component";

const ContactList = ({ contactsArray }) => {
  
  const [searchString, setSearchString] = useState('');
  //const[filteredContactsArray, setFilteredContactsArray] = useState(contactsArray);
  
  const handleSearchInput = (e) => {
    setSearchString(e.target.value);
   // setFilteredContactsArray( contactsArray.filter( contact => contact.email.includes(e.target.value))) ;
   
}
  

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
      {contactsArray.filter( contact => `${contact.email} ${contact.name}`.toLowerCase().includes(searchString.toLowerCase()))
                     .map((contact) => (<ContactDisplay key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { contactsArray: state.contactsArray };
};
export default connect(mapStateToProps)(ContactList);
