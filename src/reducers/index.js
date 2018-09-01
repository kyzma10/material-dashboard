import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  order: orderReducer
})