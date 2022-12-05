import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Tssn}</td>
      <td>{contact.DoB}</td>
      <td>{contact.Photo}</td>
      <td>{contact.Company_ID}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
