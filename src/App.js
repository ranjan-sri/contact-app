import { connect } from 'react-redux';
import './App.css';
import AddContact from './components/add-contact-component';
import ContactForm from './components/contact-form-component';
import ContactList from './components/contact-list-component'

function App( {isAddContactFlag}) {
  return (
    <div className='app-div '>
     <h1 className='border'> Contacts</h1>
     {
       isAddContactFlag
         ? <ContactForm />
         : <>
              <AddContact />
              <ContactList />
           </>
     }
    </div>
  );
}

const mapStateToProps = (state) => {
       return { isAddContactFlag: state.isAddContactFlag,}

}
export default connect(mapStateToProps)(App);
