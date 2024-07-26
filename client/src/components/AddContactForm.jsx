import React, { useEffect, useState } from "react";
import { useContactContext } from "../context/ContactContext";

const AddContactForm = () => {
  const { contactForm, setContactForm, addContact } = useContactContext();
  const onChangeHandler = (e) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact(contactForm);
      setContactForm({ name: "", phoneNumber: "", email: "" }); // Reset form
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={contactForm.name}
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        type="number"
        placeholder="Phone number"
        name="phoneNumber"
        value={contactForm.phoneNumber}
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        type="text"
        placeholder="Email "
        name="email"
        value={contactForm.email}
        onChange={(e) => onChangeHandler(e)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContactForm;
