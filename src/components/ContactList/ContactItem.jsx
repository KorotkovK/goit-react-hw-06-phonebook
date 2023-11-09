import React from 'react';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li key={id}>
      {name}: {number} <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
