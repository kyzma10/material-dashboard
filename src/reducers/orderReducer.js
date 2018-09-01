import { GET_ORDER_LIST_FAILURE, GET_ORDER_LIST_SUCCESS } from "../types/orderTypes";

const initialState = {
  loading: false,
  orderList: [],
  error: null
};

export default function(state = initialState, action){
  switch (action.type) {
    case GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: true,
        orderList: action.payload.data
      };

    case GET_ORDER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.data
      };

    default: return state;
  }
}