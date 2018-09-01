import React from "react";
import OrderListItem from "../OrderListItem/OrderListItem";

const OrderList = ({ orderList, moveUp, moveDown, removeElem }) => {
  return orderList.length > 0 ? orderList.map(item =>
    <OrderListItem
      key={item._id}
      id={item._id}
      category={item.category}
      moveUp={moveUp}
      moveDown={moveDown}
      removeElem={removeElem}
    />) : null
};

export default OrderList;
