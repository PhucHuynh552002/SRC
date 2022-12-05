import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Trainee SSN..."
          name="Tssn"
          value={editFormData.Tssn}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter  Date of Birth..."
          name="DoB"
          value={editFormData.DoB}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Photo URL..."
          name="Photo"
          value={editFormData.Photo}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="Company_ID"
          required="required"
          placeholder="Enter an Company_ID..."
          name="Company_ID"
          value={editFormData.Company_ID}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
