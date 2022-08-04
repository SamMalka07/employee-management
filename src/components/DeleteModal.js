import React from "react";
import { connect } from "react-redux";
import { deleteEmployee } from "../actions/employeeActions";
import { toast } from "react-toastify";

const DeleteModal = (props) => {
  const handleDelete = () => {
    props.deleteEmployee(props.id);
    handleClose();

    toast.success("Successfully Deleted", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleClose = () => {
    props.closeModal();
  };

  return (
    <div className="p-4">
      <p>Are you sure you want to delete EmpID: {props.id} ?</p>
      <div className="mt-4">
        <button
          onClick={handleDelete}
          className="bg-rose-700 hover:bg-rose-600 rounded-md shadow-xl px-3 mr-3 text-rose-50"
        >
          Submit
        </button>
        <button
          onClick={handleClose}
          className="bg-gray-800 hover:bg-gray-700 rounded-md shadow-xl px-3 mr-3 text-rose-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmployee: (id) => {
      dispatch(deleteEmployee(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(DeleteModal);
