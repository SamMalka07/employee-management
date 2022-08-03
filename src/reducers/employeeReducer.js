import { actions } from "../actionTypes.js/index.js";

const initState = {
  employees: [
    {
      id: 1,
      name: "Sam Malka",
      title: "Developer",
      contact: "022123456",
    },
    {
      id: 2,
      name: "Sheldon Cooper",
      title: "Manager",
      contact: "021000000",
    },
    {
      id: 3,
      name: "John Doe",
      title: "Admin",
      contact: "027000000",
    },
  ],
  selectedID: {},
};

const employeeReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.DELETE_EMPLOYEE:
      const tempState = state.employees.filter((emp) => emp.id !== action.id);
      return {
        ...state,
        employees: tempState,
      };
    case actions.ADD_EMPLOYEE:
      const newEmployee = {
        id: new Date().valueOf(),
        name: action.data.name,
        title: action.data.title,
        contact: action.data.contact,
      };
      return { ...state, employees: state.employees.concat(newEmployee) };
    case actions.SELECTED_ID:
      const newSelected = {
        id: action.data.id,
        name: action.data.name,
        title: action.data.title,
        contact: action.data.contact,
      };

      return { ...state, selectedID: newSelected };

    case actions.REMOVE_SELECTED_ID:
      const selectedID = {};
      return {
        ...state,
        selectedID,
      };
    case actions.UPDATE_EMPLOYEE:
      const updatedEmployee = state.employees.map((emp) => {
        if (emp.id === state.selectedID.id) {
          emp.id = emp.id;
          emp.name = action.data.name;
          emp.title = action.data.title;
          emp.contact = action.data.contact;
        }
        return emp;
      });
      return { ...state, employees: updatedEmployee };
    default:
      return state;
  }
};

export default employeeReducer;
