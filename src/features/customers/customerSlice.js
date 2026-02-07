// import store from "../../store";

const initailStateCustomer = {
  fullName: "",
  customerID: "",
  createdAt: "",
};

export default function customerReducer(state = initailStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        customerID: action.payload.customerID,
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

export function createCustomer(fullName, customerID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, customerID, createdAt: new Date().toISOString() },
  };
}
export function updateCustomer(fullName) {
  return { type: "customer/updateCustomer", payload: fullName };
}

// store.dispatch(createCustomer("Abid", "3229"));
// store.dispatch(updateCustomer("Abid Ali"));
// console.log(store.getState());
