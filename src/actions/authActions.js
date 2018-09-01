import axios from "axios";

import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, VERIFY_EMAIL_FAILURE, VERIFY_EMAIL_SUCCESS
} from "../types/authTypes";
import apiUrl from "../config/apiConfig";

export const auth = value => dispatch => {
  axios({
    url: apiUrl.login,
    method: "post",
    data: value
  })
    .then(response => dispatch({
      type: LOGIN_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: LOGIN_FAILURE,
      payload: error
    }))
};

export const register = value => dispatch => {
  axios({
    url: apiUrl.register,
    method: "post",
    data: value
  })
    .then(response => dispatch({
      type: REGISTER_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: REGISTER_FAILURE,
      payload: error
    }))
};

export const verifyEmail = value => dispatch => {
  axios({
    url: apiUrl.verifyEmail,
    method: "post",
    data:value
  })
    .then(response => dispatch({
      type: VERIFY_EMAIL_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: VERIFY_EMAIL_FAILURE,
      payload: error
    }))
};