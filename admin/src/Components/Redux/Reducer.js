import {
  CHECK,
  DELETECHECK,
  EDITCHECK,
  KATEGORİLER,
  KATEGORİSİL,
  RAND,
  TUR,
  TURCHECK,
  URUN,
} from "./Action";

const initalState = {
  kategoriler: [],
  check: JSON.parse(localStorage.getItem("check")) || false,
  deleteCheck: false,
  editCheck: false,
  urun: {},
  tur: [],
  rand: 0,
  kategoriSil: false,
  turCheck: false,
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case KATEGORİLER:
      return {
        ...state,
        kategoriler: action.payload,
      };
    case KATEGORİSİL:
      return { ...state, kategoriSil: action.payload };
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
      case TURCHECK:
        return {
          ...state,
          rand: action.payload,
        };
    case TUR:
      return {
        ...state,
        tur: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
