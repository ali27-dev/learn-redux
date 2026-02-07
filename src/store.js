import { type } from "@testing-library/user-event/dist/type";
import { createStore } from "redux";

const initailState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initailState, action) {
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
      break;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "account/balance", payload: 500 });
console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 30 });
console.log(store.getState());
store.dispatch({
  type: "account/requestloan",
  payload: { amount: 1000, purpose: "Buy car" },
});
console.log(store.getState());
store.dispatch({
  type: "account/payloan",
});
console.log(store.getState());
