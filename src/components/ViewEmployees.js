import React, { useState } from "react";
import { connect } from "react-redux";
import { selectId } from "../actions/employeeActions";
import Modal from "./Modal";

const ViewEmployees = (props) => {
  const { employees } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [handlingData, setHandlingData] = useState({});

  const deleteHandler = (e, id) => {
    e.preventDefault();
    setIsModalOpen(true);
    setHandlingData({ id, type: "DELETE" });
  };

  const editHandler = (e, data) => {
    e.preventDefault();
    props.selectedId(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setHandlingData({});
  };

  return (
    <>
      <table className="w-full text-center mt-10">
        <thead className=" bg-rose-900 mb-3">
          <tr>
            <th className="py-1 text-rose-50 font-semibold tracking-wide">
              EmpID
            </th>
            <th className="py-1 text-rose-50 font-semibold tracking-wide">
              Name
            </th>
            <th className="py-1 text-rose-50 font-semibold tracking-wide">
              Department
            </th>
            <th className="py-1 text-rose-50 font-semibold tracking-wide">
              Contact
            </th>
            <th className="py-1 text-rose-50 font-semibold tracking-wide">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => {
            const { id, name, title, contact } = emp;
            return (
              <tr className="bg-red-50" key={index}>
                <td className="py-1">{id}</td>
                <td className="py-1">{name}</td>
                <td className="py-1">{title}</td>
                <td className="py-1">{contact}</td>
                <td className="py-1">
                  <button
                    className="bg-rose-600 hover:bg-rose-500 mx-1 px-3 rounded-lg text-white"
                    onClick={(e) => deleteHandler(e, id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-teal-600 hover:bg-teal-500 mx-1 px-3 rounded-lg text-white"
                    onClick={(e) => editHandler(e, emp)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal handlingData={handlingData} closeModal={closeModal} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.emp.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedId: (data) => {
      dispatch(selectId(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployees);
