import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import {
  addEmployee,
  removeSelectedID,
  updateEmployee,
} from "../actions/employeeActions";

const AddEmployee = (props) => {
  let defaultValues = {
    name: props.selectedId?.name || "",
    title: props.selectedId?.title || "",
    contact: props.selectedId?.contact || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = props.selectedId?.name || "";
    defaultValues.title = props.selectedId?.title || "";
    defaultValues.contact = props.selectedId?.contact || "";
    reset({ ...defaultValues });
  }, [props.selectedId?.id]);

  const onSubmit = (data) => {
    if (props.selectedId?.id) {
      props.updateEmployee(data);
      props.removeSelectedID();
    }
    if (props.selectedId?.id === undefined) {
      props.addEmployee(data);
    }
    reset();
  };

  const clearFields = () => {
    props.removeSelectedID();
    reset();
  };

  return (
    <div className="bg-rose-50 mt-10 p-4">
      <h1 className="mb-5 mx-1 font-bold">
        {props.selectedId?.id ? "Update" : "Add"} Employee
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <input
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-3/4 mr-3 rounded-md px-2 py-1"
          />
          {errors.name?.type === "required" && "Name is required"}
        </div>

        <div className="my-2">
          <input
            placeholder="Title"
            {...register("title", { required: true })}
            className="w-3/4 mr-3 rounded-md px-2 py-1"
          />
          {errors.title?.type === "required" && "Title is required"}
        </div>

        <div className="my-2">
          <input
            placeholder="Contact"
            {...register("contact", { required: true })}
            className="w-3/4 mr-3 rounded-md px-2 py-1"
          />
          {errors.contact?.type === "required" && "Contact is required"}
        </div>

        <button
          type="submit"
          className="bg-rose-700 hover:bg-rose-600 text-rose-50 px-10 py-1 mt-2 mr-3 rounded-lg"
        >
          {props.selectedId?.id ? "Update" : "Add"}
        </button>
        <button
          type="button"
          className="bg-rose-700 hover:bg-rose-600 text-rose-50 px-10 py-1 mt-2 mr-3 rounded-lg"
          onClick={clearFields}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedId: state.emp.selectedID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (data) => {
      dispatch(addEmployee(data));
    },
    removeSelectedID: () => {
      dispatch(removeSelectedID());
    },
    updateEmployee: (data) => {
      dispatch(updateEmployee(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
