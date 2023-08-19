import React, { useState } from 'react';

interface ContactFormProps {
  onSaveContact: (contact: Contact) => void;
}

interface Contact {
  name: string;
  email: string;
  // Add other properties
}

const ContactForm: React.FC<ContactFormProps> = ({ onSaveContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    const newContact: Contact = { name, email };
    onSaveContact(newContact);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {/* Add other input fields */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ContactForm;
