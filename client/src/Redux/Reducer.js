import { CHECKLOGIN, CHECKREGISTER, MEYVE, SEBZE } from "./Actions";
const initialState = {
  Meyve: [],
  Sebze: [],
  login: false,
  register: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MEYVE:
      return { ...state, Meyve: action.payload };
    case SEBZE:
      return { ...state, Sebze: action.payload };
    case CHECKLOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case CHECKREGISTER:
      return {
        ...state,
        register: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
