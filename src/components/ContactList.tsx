import React from 'react';
import { Link } from 'react-router-dom';

interface Contact {
  id: number;
  name: string;
  email: string;
  // Add other properties
}

interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            {/* Add other details */}
            <Link to={`/contacts/${contact.id}`}>View Details</Link>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
