import axios from "axios";
import { UPDATE_LOGGED_USER, GET_USERS_DATA } from "./actions";

export const updateUserId = (userID) => {
  return {
    type: UPDATE_LOGGED_USER,
    payload: userID,
  };
};

export const getUsersData = () => {
  return function (dispatch) {
    return axios
      .get("http://localhost:5000/users/")
      .then((res) => dispatch({ type: GET_USERS_DATA, payload: res.data }));
  };
};
