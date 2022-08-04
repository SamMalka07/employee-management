import React from "react";
import AddEmployee from "./AddEmployee";
import ViewEmployees from "./ViewEmployees";

const Employees = () => {
  return (
    <div className="page-container">
      <h1 className="text-rose-500 text-center font-bold text-3xl mt-3 border-b-2">
        Employee Management
      </h1>
      <AddEmployee />
      <ViewEmployees />
    </div>
  );
};

export default Employees;
