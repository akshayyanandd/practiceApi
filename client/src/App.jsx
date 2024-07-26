import React, { useEffect, useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ListContacts from "./components/ListContacts";

const App = () => {
  return (
    <div className="container">
      <h1>Add Contact</h1>
      <AddContactForm />
      <ListContacts />
    </div>
  );
};

export default App;
