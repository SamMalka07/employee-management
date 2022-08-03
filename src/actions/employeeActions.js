import { actions } from "../actionTypes.js";

export const deleteEmployee = (id) => {
  return {
    type: actions.DELETE_EMPLOYEE,
    id,
  };
};

export const addEmployee = (data) => {
  return {
    type: actions.ADD_EMPLOYEE,
    data,
  };
};

export const selectId = (data) => {
  return {
    type: actions.SELECTED_ID,
    data,
  };
};

export const removeSelectedID = () => {
  return {
    type: actions.REMOVE_SELECTED_ID,
  };
};

export const updateEmployee = (data) => {
  return {
    type: actions.UPDATE_EMPLOYEE,
    data,
  };
};
