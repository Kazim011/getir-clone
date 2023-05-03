import {
  CHECK,
  DELETECHECK,
  EDITCHECK,
  KATEGORİLER,
  RAND,
  URUN,
} from "./Action";

const initalState = {
  kategoriler: [],
  check: JSON.parse(localStorage.getItem("check")) || false,
  deleteCheck: false,
  editCheck: false,
  urun: {},
  rand: 0,
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
    case DELETECHECK:
      return { ...state, deleteCheck: action.payload };
    case URUN:
      return { ...state, urun: action.payload };
    case EDITCHECK:
      return {
        ...state,
        editCheck: action.payload,
      };
    case RAND:
      return {
        ...state,
        rand: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
