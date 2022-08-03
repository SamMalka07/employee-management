import React from "react";
import { connect } from "react-redux";

const EditModal = (props) => {
  const {
    data: { id, name, title, contact },
  } = props;

  return (
    <div>
      <h1>Update</h1>
      <form className="p-4">
        <div>
          <label htmlFor="">Name</label>
          <br />
          <input type="text" value={name} />
        </div>
        <div>
          <label htmlFor="">Title</label>
          <br />
          <input type="text" value={title} />
        </div>
        <div>
          <label htmlFor="">Contact</label>
          <br />
          <input type="text" value={contact} />
        </div>
        <div className="mt-4">
          <button className="px-2 bg-blue-600 rounded-md">Update</button>
          <button className="px-2">Cancel</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(EditModal);
