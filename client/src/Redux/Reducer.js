import {
  CHECKLOGIN,
  CHECKREGISTER,
  RAND,
  SEPET,
  total,
  TOTAL,
} from "./Actions";
const initialState = {
  login: false,
  registers: false,
  sepet: [],
  rand: 0,
  total: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKLOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case CHECKREGISTER:
      return {
        ...state,
        registers: action.payload,
      };
    case SEPET:
      return { ...state, sepet: action.payload };
    case RAND:
      return { ...state, rand: action.payload };
    case TOTAL:
      return { ...state, total: action.payload };

    default:
      return state;
  }
};
export default Reducer;
