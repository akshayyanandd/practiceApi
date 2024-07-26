import React, { useEffect, useState } from "react";
import { useContactContext } from "../context/ContactContext";

const ListContacts = () => {
  const { contacts, deleteHandler, editHandler } = useContactContext();
  return (
    <ul className="ul">
      {contacts?.map((data) => (
        <li key={data._id}>
          <h4>{data.name}</h4>
          <div className="list-item">
            <p>{data.email}</p>
            <p>{data.phoneNumber}</p>
          </div>
          <div className="actions">
            <button onClick={() => editHandler(data)}>Edit</button>
            <button onClick={() => deleteHandler(data._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListContacts;
