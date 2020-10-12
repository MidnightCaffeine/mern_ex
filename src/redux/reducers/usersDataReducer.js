import { GET_USERS_DATA } from "../actions/actions";
const initState = {};

const usersData = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default usersData;
