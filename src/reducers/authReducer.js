import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS, VERIFY_EMAIL_FAILURE,
  VERIFY_EMAIL_SUCCESS
} from "../types/authTypes";

const initialState = {
  isRegister: false,
  codeVerify: "",
  userEmail: "",
  isVerify: false,
  isLoged: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      console.log("REGISTER", action.payload);
      return {
        ...state,
        isRegister: true,
        codeVerify: action.payload.data.confirm_code,
        userEmail: action.payload.data.email
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload.response.data
      };

    case VERIFY_EMAIL_SUCCESS:
      console.log("VERIFY EMAIL", action.payload);
      return {
        ...state,
        isVerify: true
      };

    case VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case LOGIN_SUCCESS:
      console.log("LOGIN", action.payload);
      return {
        ...state,
        isLoged: true
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}