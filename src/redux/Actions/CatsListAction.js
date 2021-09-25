import axios from "axios";
import {
  API,
  CATS_LIST_FAIL,
  CATS_LIST_SUCCESS,
  CATS_LIST_LOADING,
} from "../../constants";

const ResponsLoading = () => {
  return { type: CATS_LIST_LOADING };
};

const ResponsSuccess = (data) => {
  return {
    type: CATS_LIST_SUCCESS,
    payload: data,
  };
};

const ResponsFail = () => {
  return {
    type: CATS_LIST_FAIL,
  };
};

const GetData = (categoriesId,page) => async (dispatch) => {
  try {
    dispatch(ResponsLoading());
    const limit = page*10 
    const { data } = await axios.get(
      `${API}/images/search?limit=${limit}&page=${page}&category_ids=${categoriesId} `
    );
    // const newResult = data.results.map((item) => {
    //   return axios.get(`${API}/pokemon/${item.name}`);
    // });

    // const parsedPokemonData = await Promise.all(newResult).then((item) =>
    //   item.map((result) => result.data)
    // );

    dispatch(ResponsSuccess( data));
  } catch (error) {
    dispatch(ResponsFail());
  }
};

export default GetData;