import axios from "axios";
import apiUrl from "../config/apiConfig";

import {
  ADD_PURCHASE_FAILURE,
  ADD_PURCHASE_SUCCESS,
  GET_ORDER_LIST_FAILURE,
  GET_ORDER_LIST_SUCCESS
} from "../types/orderTypes";

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

export const addPurchase = values => dispatch => {
  axios({
    url: apiUrl.addPurchase,
    method: "post",
    data: values
  })
    .then(response => dispatch({
        type: ADD_PURCHASE_SUCCESS,
        payload: response
      }))
    .catch(error => dispatch({
        type: ADD_PURCHASE_FAILURE,
        payload: error
      })
    );
};