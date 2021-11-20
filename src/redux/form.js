import { createSlice } from "@reduxjs/toolkit";

const initial = {
  items: [
    {
      id: 14532,
      name: "Quamar Hood",
      Category: "Baker",
      city: "Thane",
      "Opening date": "Mar 28 2021",
      "Closing date": "Aug 12 2022",
      status: "Open",
    },
    {
      id: 14533,
      name: "Wing Nguyen",
      Category: "Baker",
      city: "Pune",
      "Opening date": "Sep 16 2020",
      "Closing date": "Sep 4 2021",
      status: "Closed",
    },
    {
      id: 14544,
      name: "Urielle Chapman",
      Category: "Butcher",
      city: "Nashik",
      "Opening date": "Mar 8 2021",
      "Closing date": "Sep 22 2022",
      status: "Open",
    },
    {
      id: 14545,
      name: "Sopoline Best",
      Category: "Stationery shop",
      city: "Ahmednagar",
      "Opening date": "Jul 9 2020",
      "Closing date": "Mar 17 2021",
      status: "Closed",
    },
    {
      id: 14546,
      name: "Tobias Stevens",
      Category: "Baker",
      city: "Nashik",
      "Opening date": "Jan 4 2020",
      "Closing date": "Jul 9 2021",
      status: "Closed",
    },
  ],
};

const FormSlice = createSlice({
  name: "Form",
  initialState: initial,
  reducers: {
    delete(state, action) {
      const name = action.payload;
      const newState = state.items.filter((item) => item.name !== name);
      state.items = newState;
    },
    AddShop(state, action) {
      const newShop = action.payload;
      state.items.push(newShop);
    },
  },
});
export const FormActions = FormSlice.actions;

export default FormSlice;
