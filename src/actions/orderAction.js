import axios from "axios";
import apiUrl from "../config/apiConfig";

import { GET_ORDER_LIST_FAILURE, GET_ORDER_LIST_SUCCESS } from "../types/orderTypes";

export const getOrderList = () => dispatch => {
  axios({
    url: apiUrl.orderList,
    method: "get"
  })
    .then(response => dispatch({
      type: GET_ORDER_LIST_SUCCESS,
      payload: response
    }))
    .catch(error => dispatch({
      type: GET_ORDER_LIST_FAILURE,
      payload: error
    }))
};