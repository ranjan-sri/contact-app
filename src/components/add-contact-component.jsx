import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions';
const AddContact = () => {
    const dispatch = useDispatch();
    
    const handleAddContact = () => {
        dispatch(addContact());
    }
  return (
    <div className='add-contact-div'>
        <button className="btn btn-success" onClick={handleAddContact}> Add Contact</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return { isAddContactFlag: state.isAddContactFlag,}

}
export default connect(mapStateToProps)(AddContact);