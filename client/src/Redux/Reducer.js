import { CHECKLOGIN, CHECKREGISTER } from "./Actions";
const initialState = {
  login: false,
  registers: false,
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
    default:
      return state;
  }
};
export default Reducer;
