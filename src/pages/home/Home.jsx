import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Home.css";
import data from "./components/mock-data.json" 
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Tssn: "",
    DoB: "",
    Photo: "",
    Company_ID: "",
  });

  const [editFormData, setEditFormData] = useState({
    Tssn: "",
    DoB: "",
    Photo: "",
    Company_ID: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Tssn: addFormData.Tssn,
      DoB: addFormData.DoB,
      Photo: addFormData.Photo,
      Company_ID: addFormData.Company_ID,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Tssn: editFormData.Tssn,
      DoB: editFormData.DoB,
      Photo: editFormData.Photo,
      Company_ID: editFormData.Company_ID,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Tssn: contact.Tssn,
      DoB: contact.DoB,
      Photo: contact.Photo,
      Company_ID: contact.Company_ID,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar pageTitle="Workers" />
    {/* <div className="app-container"> */}
    <h2>Add a trainee</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Tssn"
          required="required"
          placeholder="Enter Tssn.."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="DoB"
          required="required"
          placeholder="Enter trainee's date of birth..."
          onChange={handleAddFormChange}
        />
        <input
          type="url"
          name="Photo"
          required="required"
          placeholder="Enter photo url..."
          onChange={handleAddFormChange}
        />
        <input
          type="Company_ID"
          name="Company_ID"
          required="required"
          placeholder="Enter an Company_ID..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Tssn</th>
              <th>DoB</th>
              <th>Photo</th>
              <th>Company_ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

     
    </div>
    </div>
    // </div>
  );
};

export default Home;
