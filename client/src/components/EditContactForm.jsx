import React, { useEffect, useState } from "react";
import { useContactContext } from "../context/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

const EditContactForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  //console.log(params.id);

  const { contactForm, setContactForm, editHandler, getSingleContactById } =
    useContactContext();
  const onChangeHandler = (e) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    (async () => {
      const data = await getSingleContactById(params.id);
      console.log(data);
      setContactForm(data);
    })();
  }, []);

  //const getSingleContactData = await getSingleContactById(params.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editHandler(contactForm);
      setContactForm({ name: "", phoneNumber: "", email: "" });
      navigate("/"); // Reset form
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Contact Form</h1>
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
      <button type="submit">Edit Contact</button>
    </form>
  );
};

export default EditContactForm;
