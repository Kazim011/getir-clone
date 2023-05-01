import { CHECK, KATEGORİLER } from "./Action";

const initalState = {
  kategoriler: [],
  check: JSON.parse(localStorage.getItem("check")) || false,
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case KATEGORİLER:
      return {
        ...state,
        kategoriler: action.payload,
      };
    case CHECK:
      return {
        ...state,
        check: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
