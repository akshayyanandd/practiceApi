import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [contactForm, setContactForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/v1/contacts/");
      const data = await res.json();
      console.log("Fetched contacts: ", data);
      setContacts(data.data);
    } catch (error) {
      console.error("Error fetching contacts: ", error);
      setContacts([]);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteHandler = async (id) => {
    console.log("id from delete ", id);
    try {
      const res = await fetch(`/api/v1/contacts/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        fetchContacts();
      }

      if (!data.success) {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = (contact) => {
    console.log("contact from edit ", contact);
    // Placeholder for edit logic
    //setContactForm(contact);
  };

  const addContact = async (newContact) => {
    try {
      const res = await fetch("/api/v1/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });

      const result = await res.json();
      console.log("Added contact response: ", result);

      if (result.success) {
        fetchContacts(); // Refetch all contacts after adding a new one
      }

      if (!result.success) {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error adding contact: ", error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        contactForm,
        setContactForm,
        deleteHandler,
        editHandler,
        addContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};

export default ContactContextProvider;
