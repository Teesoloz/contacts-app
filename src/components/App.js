import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';// A library for generating IDs for list items.

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]); // Add new "contact" to the "contacts list"
  };

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList); // Remove a "contact" to the "contacts list"
  };

  useEffect(() => {
    //Get stored data from the local storage if there is any and convert it to JS object
    const retrievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedData) {
      setContacts(retrievedData);
    }
  }, []);

  useEffect(() => {
    //Store data in the local storage in JSON format
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} deletebyId = {deleteContactHandler}/>
    </div>
  );
}

export default App;
