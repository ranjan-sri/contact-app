import ContactActionTypes from "./types";



const INITIAL_STATE = {
   contactsArray : [ 
     ],
    isAddContactFlag: false,
    updateContactObj : {},
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case ContactActionTypes.ADD_CONTACT:
            return {
                ...state,
                isAddContactFlag: true,
                updateContactObj : {},
            }

       case ContactActionTypes.EXIT_CONTACT_FORM:
                return {
                    ...state,
                    isAddContactFlag: false,
                }    


        case ContactActionTypes.SAVE_CONTACT:
             return {
                 ...state,
                 contactsArray: [...state.contactsArray, action.payload],
                 isAddContactFlag: false,
             }
        
        case ContactActionTypes.DELETCT_CONTACT:
            return {
                    ...state,
                    contactsArray: [...state.contactsArray].filter( contact => contact.id !== action.payload.id ),
                    isAddContactFlag: false,
                }

        case ContactActionTypes.UPDATE_CONTACT:
            return {
                    ...state,
                    contactsArray: [...state.contactsArray].map( contact => contact.id === action.payload.id ? action.payload : contact),
                    isAddContactFlag: false,
                    updateContactObj : {},
                }

        case ContactActionTypes.EDIT_CONTACT:
            return {
                    ...state,
                    isAddContactFlag: true,
                    updateContactObj: action.payload,
                }        

                default:
                return state     
        }
    } 

 export default Reducer;   