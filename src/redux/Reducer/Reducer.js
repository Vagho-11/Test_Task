import {
  CATS_LIST_FAIL,
  CATS_LIST_LOADING,
  CATS_LIST_SUCCESS,
  CATS_CATEGORIES_FAIL,
  CATS_CATEGORIES_SUCCESS,
  CATS_CATEGORIES_LOADING,
} from "../../constants";

const initalState = {
  loading: false,
  categories:[],
  data: [],
  errorMsg: "",
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case CATS_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CATS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "no Cats",
      };
    case CATS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    case CATS_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "no Cats Categories",
      };
    case CATS_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        errorMsg: "",
      };
    case CATS_CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
      };


    default:
      return state;
  }
};

export default Reducer;