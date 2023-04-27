import { MEYVE, SEBZE } from "./Actions";
const initialState = {
  Meyve: [],
  Sebze: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MEYVE:
      return { ...state, Meyve: action.payload };
    case SEBZE:
      return { ...state, Sebze: action.payload };
    default:
      return state;
  }
};
export default Reducer;
