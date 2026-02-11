// import store from "../../store";

import { createSlice } from "@reduxjs/toolkit";
import reducer from "../accounts/accountSlice";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCustomer(state, action) {
      state.fullName = action.payload;
    },
  },
});
console.log(customerSlice);
export const { createCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;
/*
export default function customerReducer(state = initailStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
export function updateCustomer(fullName) {
  return { type: "customer/updateCustomer", payload: fullName };
}
*/
// store.dispatch(createCustomer("Abid", "3229"));
// store.dispatch(updateCustomer("Abid Ali"));
// console.log(store.getState());
