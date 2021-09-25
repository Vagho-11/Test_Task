import axios from "axios";
import {
  API,
 CATS_CATEGORIES_LOADING,
 CATS_CATEGORIES_SUCCESS,
 CATS_CATEGORIES_FAIL,
} from "../../constants";

const ResponsLoading = () => {
  return { type: CATS_CATEGORIES_LOADING };
};

const ResponsSuccess = (data) => {
  return {
    type: CATS_CATEGORIES_SUCCESS,
    payload: data,
  };
};

const ResponsFail = () => {
  return {
    type: CATS_CATEGORIES_FAIL,
  };
};

const GetCategories = () => async (dispatch) => {
  try {
    dispatch(ResponsLoading());
    const { data } = await axios.get(
      `${API}/categories`
    );
console.log(data,"Categories")

    dispatch(ResponsSuccess( data));
  } catch (error) {
    dispatch(ResponsFail());
  }
};

export default GetCategories;