// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from './ContactsSlice/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const addContactHandler = (contact) => {
    dispatch(addContact(contact));
  };

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const updateFilterHandler = (filter) => {
    dispatch(updateFilter(filter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={updateFilterHandler} />
      <ContactList contacts={contacts} onDeleteContact={deleteContactHandler} />
    </div>
  );
};

export default App;
