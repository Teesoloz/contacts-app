import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {

    const deleteContact=(id)=>{
        props.deletebyId(id);
    }
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} deleteHandler={deleteContact}/>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
}
