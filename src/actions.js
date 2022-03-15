import ContactActionTypes from "./types"


export const addContact = () => ({
    type: ContactActionTypes.ADD_CONTACT,
})
export const saveContact = (contact) => ({
    type: ContactActionTypes.SAVE_CONTACT,
    payload: contact,
})

export const exitContactForm = () => ({
    type: ContactActionTypes.EXIT_CONTACT_FORM,
})

export const deleteContact = (contact) => ({
    type: ContactActionTypes.DELETCT_CONTACT,
    payload: contact,
})

export const editContact = contact => ({
    type: ContactActionTypes.EDIT_CONTACT,
    payload: contact,
})

export const updateContact = contact => ({
    type: ContactActionTypes.UPDATE_CONTACT,
    payload: contact,
})