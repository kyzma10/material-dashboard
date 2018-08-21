import { LOGIN_SUCCESS } from "../types/authTypes";

export const auth = value => dispatch => {
  dispatch({ type: LOGIN_SUCCESS, payload: value })
};
