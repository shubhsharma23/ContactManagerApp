import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

interface ContactDetailsProps {}

interface Contact {
  id: string;
  // Other properties
}

const fetchContact = async (id: string) => {
  const response = await fetch(`your-api-endpoint/${id}`); // Replace with your API endpoint
  return response.json();
};

const ContactDetails: React.FC<ContactDetailsProps> = () => {
  const { id } = useParams<{ id: string | undefined }>();
  
  if (!id) {
    return <div>Contact ID not provided</div>;
  }

  const contactData = useQuery<Contact>(['contact', id], () => fetchContact(id));

  if (contactData.isLoading) {
    return <div>Loading...</div>;
  }

  if (contactData.isError) {
    return <div>Error fetching contact</div>;
  }

  const contact = contactData.data;

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>ID: {contact.id}</p>
      {/* Render other contact details */}
    </div>
  );
};

export default ContactDetails;
