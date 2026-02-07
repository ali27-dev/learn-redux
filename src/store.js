import { combineReducers, createStore } from "redux";

const initailStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initailStateCustomer = {
  fullName: "",
  customerID: "",
  createdAt: "",
};

function accountReducer(state = initailStateAccount, action) {
  switch (action.type) {
    case "account/balance":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestloan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initailStateCustomer, action) {
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

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// store.dispatch({ type: "account/balance", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 30 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestloan",
//   payload: { amount: 1000, purpose: "Buy car" },
// });
// console.log(store.getState());
// store.dispatch({
//   type: "account/payloan",
// });
// console.log(store.getState());

function balance(amount) {
  return { type: "account/balance", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function loan(amount, purpose) {
  return { type: "account/requestloan", payload: { amount, purpose } };
}
function loanPurpose() {
  return { type: "account/payloan" };
}
// function balance(amount) {
//   return { type: "account/balance", payload: amount };
// }
store.dispatch(balance(51000));
store.dispatch(withdraw(500));
store.dispatch(loan(500, "Buy car"));
store.dispatch(loanPurpose());
console.log(store.getState());

function createCustomer(fullName, customerID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, customerID, createdAt: new Date().toISOString() },
  };
}
function updateCustomer(fullName) {
  return { type: "customer/updateCustomer", payload: fullName };
}

store.dispatch(createCustomer("Abid", "3229"));
store.dispatch(updateCustomer("Abid Ali"));
console.log(store.getState());
