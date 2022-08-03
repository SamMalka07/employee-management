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
      contact: "021111111",
    },
    {
      id: 3,
      name: "ABC",
      title: "Sales Rep",
      contact: "021111111",
    },
  ],
  selectedID: "",
};

const testReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default testReducer;
