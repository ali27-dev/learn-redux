// import store from "../../store";

const initailStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initailStateAccount, action) {
  switch (action.type) {
    case "account/deposite":
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

// store.dispatch({ type: "account/deposite", payload: 500 });
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

export function deposite(amount) {
  return { type: "account/deposite", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function loan(amount, purpose) {
  return { type: "account/requestloan", payload: { amount, purpose } };
}
export function payloan() {
  return { type: "account/payloan" };
}
// function deposite(amount) {
//   return { type: "account/deposite", payload: amount };
// }
// store.dispatch(deposite(51000));
// store.dispatch(withdraw(500));
// store.dispatch(loan(500, "Buy car"));
// store.dispatch(loanPurpose());
// console.log(store.getState());
