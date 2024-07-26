import React, { useEffect, useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ListContacts from "./components/ListContacts";
import { Route, Routes } from "react-router-dom";
import EditContactForm from "./components/EditContactForm";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="container">
              <h1>Add Contact</h1>
              <AddContactForm />
              <ListContacts />
            </div>
          </>
        }
      />
      <Route path="/editContact/:id" element={<EditContactForm />} />
    </Routes>
  );
};

export default App;
