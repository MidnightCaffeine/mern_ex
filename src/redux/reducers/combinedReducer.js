import logInData from "./loginReducer";
import usersData from "./usersDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  logInData,
  usersData,
});

export default rootReducer;
